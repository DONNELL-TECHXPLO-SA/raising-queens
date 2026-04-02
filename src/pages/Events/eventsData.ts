export interface Event {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date: { day: string; month: string };
  eventDate: Date;
  location: string;
  time: string;
  status: "upcoming" | "past";
  meta?: string;
  learnMoreUrl?: string;
  registerUrl?: string;
}

interface SheetEvent {
  id?: string;
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  date?: string;
  location?: string;
  time?: string;
  status?: "upcoming" | "past";
  meta?: string;
  learn_more_url?: string;
  register_url?: string;
  learnmoreurl?: string;
  registerurl?: string;
  register?: string;
  register_link?: string;
}

const SHEET_CSV_URL = import.meta.env.VITE_EVENTS_SHEET_CSV_URL as
  | string
  | undefined;

const safeDate = (rawDate: string | undefined): Date | null => {
  if (!rawDate) return null;
  const parsed = new Date(rawDate);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const parseCsvLine = (line: string): string[] => {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  result.push(current.trim());
  return result;
};

const toCardDate = (date: Date) => ({
  day: String(date.getDate()).padStart(2, "0"),
  month: date.toLocaleString("en-US", { month: "short" }),
});

const normalizeDayStart = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const resolveEventStatus = (
  parsedDate: Date,
  rawStatus?: "upcoming" | "past",
): "upcoming" | "past" => {
  if (rawStatus === "past") return "past";

  const today = normalizeDayStart(new Date());
  const eventDay = normalizeDayStart(parsedDate);

  return eventDay < today ? "past" : "upcoming";
};

const normalizeUrl = (rawUrl: string | undefined): string | undefined => {
  if (!rawUrl) return undefined;

  const trimmed = rawUrl.trim();
  if (!trimmed) return undefined;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.toString();
    }
    return undefined;
  } catch {
    try {
      const parsed = new URL(`https://${trimmed}`);
      return parsed.toString();
    } catch {
      return undefined;
    }
  }
};

const toEvent = (sheetEvent: SheetEvent, fallbackId: number): Event | null => {
  const parsedDate = safeDate(sheetEvent.date);
  if (!sheetEvent.title || !parsedDate) return null;

  return {
    id: sheetEvent.id || String(fallbackId),
    title: sheetEvent.title,
    category: sheetEvent.category || "Community",
    description: sheetEvent.description || "More details coming soon.",
    image: sheetEvent.image || "/gallery/events/event1.webp",
    date: toCardDate(parsedDate),
    eventDate: parsedDate,
    location: sheetEvent.location || "TBC",
    time: sheetEvent.time || "",
    status: resolveEventStatus(parsedDate, sheetEvent.status),
    meta: sheetEvent.meta || undefined,
    learnMoreUrl: normalizeUrl(
      sheetEvent.learn_more_url || sheetEvent.learnmoreurl,
    ),
    registerUrl: normalizeUrl(
      sheetEvent.register_url ||
        sheetEvent.registerurl ||
        sheetEvent.register_link ||
        sheetEvent.register,
    ),
  };
};

const parseSheetCsv = (csv: string): Event[] => {
  const lines = csv.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length < 2) return [];

  const headers = parseCsvLine(lines[0]).map((header) => header.toLowerCase());

  return lines
    .slice(1)
    .map((line, index) => {
      const values = parseCsvLine(line);
      const row: SheetEvent = {};

      headers.forEach((header, headerIndex) => {
        const value = values[headerIndex];

        switch (header) {
          case "id":
            row.id = value;
            break;
          case "title":
            row.title = value;
            break;
          case "category":
            row.category = value;
            break;
          case "description":
            row.description = value;
            break;
          case "image":
            row.image = value;
            break;
          case "date":
            row.date = value;
            break;
          case "location":
            row.location = value;
            break;
          case "time":
            row.time = value;
            break;
          case "status":
            row.status = value.toLowerCase() === "past" ? "past" : "upcoming";
            break;
          case "meta":
            row.meta = value;
            break;
          case "learn_more_url":
            row.learn_more_url = value;
            break;
          case "register_url":
            row.register_url = value;
            break;
          case "learnmoreurl":
            row.learnmoreurl = value;
            break;
          case "registerurl":
            row.registerurl = value;
            break;
          case "register":
            row.register = value;
            break;
          case "register_link":
            row.register_link = value;
            break;
          default:
            break;
        }
      });

      return toEvent(row, index + 1);
    })
    .filter((event): event is Event => event !== null);
};

export const fetchEvents = async (): Promise<Event[]> => {
  if (!SHEET_CSV_URL) {
    console.error("VITE_EVENTS_SHEET_CSV_URL is not configured.");
    return [];
  }

  try {
    const response = await fetch(SHEET_CSV_URL);
    if (!response.ok) {
      throw new Error(`Events sheet request failed with ${response.status}`);
    }

    const csvText = await response.text();
    const parsedEvents = parseSheetCsv(csvText);
    return parsedEvents;
  } catch (error) {
    console.error("Failed to load events from Google Sheets:", error);
    return [];
  }
};

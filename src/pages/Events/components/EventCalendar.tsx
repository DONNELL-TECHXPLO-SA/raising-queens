import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventCalendar.css";

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
}

interface EventCalendarProps {
  upcomingEvents: CalendarEvent[];
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EventCalendar = ({ upcomingEvents }: EventCalendarProps) => {
  const navigate = useNavigate();
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const generateCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const days = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Day cells
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = upcomingEvents.filter(
        (event) =>
          event.date.getDate() === day &&
          event.date.getMonth() === currentMonth &&
          event.date.getFullYear() === currentYear,
      );
      const primaryEvent = dayEvents[0];
      const isEventDay = dayEvents.length > 0;

      days.push(
        <div
          key={day}
          className={`calendar-day ${isEventDay ? "event-day" : ""}`}
          role={isEventDay ? "button" : undefined}
          tabIndex={isEventDay ? 0 : -1}
          onClick={() => {
            if (primaryEvent) {
              navigate(`/events/${primaryEvent.id}`);
            }
          }}
          onKeyDown={(event) => {
            if (!primaryEvent) return;

            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              navigate(`/events/${primaryEvent.id}`);
            }
          }}
          aria-label={
            isEventDay
              ? `View event details for ${monthNames[currentMonth]} ${day}: ${dayEvents
                  .map((event) => event.title)
                  .join(", ")}`
              : undefined
          }
        >
          <span className="calendar-day-number">{day}</span>
          {isEventDay && (
            <div className="calendar-day-events">
              <span className="calendar-day-event-title">
                {primaryEvent.title}
              </span>
              {dayEvents.length > 1 && (
                <span className="calendar-day-more">
                  +{dayEvents.length - 1} more
                </span>
              )}
            </div>
          )}
        </div>,
      );
    }

    return days;
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <section className="event-calendar">
      <div className="calendar-container">
        <h2>Upcoming Events Calendar</h2>
        <div className="calendar-view">
          <div className="calendar-header">
            <button className="nav-btn" onClick={prevMonth}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <h3>
              {monthNames[currentMonth]} {currentYear}
            </h3>
            <button className="nav-btn" onClick={nextMonth}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="calendar-grid">{generateCalendar()}</div>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;

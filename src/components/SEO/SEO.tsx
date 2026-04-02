import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "event";
  noindex?: boolean;
  keywords?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "Raising Queens Foundation";
const DEFAULT_IMAGE = "/images/logo.png";
const BASE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://raisingqueens.org.za";

const toAbsoluteUrl = (pathOrUrl: string) => {
  try {
    return new URL(pathOrUrl).toString();
  } catch {
    return new URL(pathOrUrl, BASE_URL).toString();
  }
};

const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  keywords,
  schema,
}: SEOProps) => {
  const canonicalUrl = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schema ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Helmet>
  );
};

export default SEO;
import { Title, Meta } from "@solidjs/meta";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO(props: SEOProps) {
  const siteName = "Sakura's Project Hub";
  const fullTitle = () => `${props.title} - ${siteName}`;
  const defaultImage = "/images/og-default.png"; // Fallback image
  const image = () => props.image || defaultImage;
  const url = () => props.url || "";
  const type = () => props.type || "website";

  return (
    <>
      <Title>{fullTitle()}</Title>
      <Meta name="description" content={props.description} />

      {/* Open Graph / Facebook */}
      <Meta property="og:type" content={type()} />
      <Meta property="og:title" content={fullTitle()} />
      <Meta property="og:description" content={props.description} />
      <Meta property="og:image" content={image()} />
      {props.url && <Meta property="og:url" content={props.url} />}
      <Meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={fullTitle()} />
      <Meta name="twitter:description" content={props.description} />
      <Meta name="twitter:image" content={image()} />
    </>
  );
}

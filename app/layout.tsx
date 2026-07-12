import type { Metadata, Viewport } from "next";
import "@uswds/uswds/css/uswds.min.css";
import "./globals.css";

const siteUrl = "https://www.mustafasadiq.com";
const title = "Mustafa Sadiq | Software Application Engineer";
const description =
  "Mustafa Sadiq's software engineering portfolio: secure cloud modernization and accessible digital services using AWS, Azure, Java, .NET, Python, and React.";
const socialTitle = "Mustafa Sadiq | Software Engineer Portfolio";
const socialDescription =
  "Explore secure cloud modernization, accessible digital services, and full-stack engineering work across AWS, Azure, Java, .NET, Python, and React.";
const socialImage = `${siteUrl}/portfolio-social-card.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Mustafa Sadiq" },
  description,
  applicationName: "Mustafa Sadiq Portfolio",
  authors: [{ name: "Mustafa Sadiq", url: siteUrl }],
  creator: "Mustafa Sadiq",
  publisher: "Mustafa Sadiq",
  category: "technology",
  alternates: { canonical: siteUrl },
  keywords: [
    "Mustafa Sadiq",
    "software application engineer",
    "federal digital services",
    "cloud modernization",
    "AWS solutions architect",
    "Azure developer",
    "Java developer",
    ".NET developer",
    "Python engineer",
    "Section 508 accessibility",
    "FISMA ATO",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    url: siteUrl,
    siteName: "Mustafa Sadiq Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Mustafa Sadiq — Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [
      {
        url: socialImage,
        alt: "Mustafa Sadiq — Software Engineer Portfolio",
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#005ea8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

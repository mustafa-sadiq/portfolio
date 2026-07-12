import type { Metadata, Viewport } from "next";
import "@uswds/uswds/css/uswds.min.css";
import "./globals.css";

const siteUrl = "https://mustafasadiq.com";
const title = "Mustafa Sadiq | Software Application Engineer";
const description =
  "Software application engineer modernizing secure, accessible federal digital services across AWS, Azure, Java, .NET, Python, and React.";

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
    title,
    description,
    url: siteUrl,
    siteName: "Mustafa Sadiq Portfolio",
    locale: "en_US",
    type: "profile",
    firstName: "Mustafa",
    lastName: "Sadiq",
    images: [
      {
        url: `${siteUrl}/og-uswds.png`,
        width: 1734,
        height: 907,
        alt: "Mustafa Sadiq, Software Application Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-uswds.png`],
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

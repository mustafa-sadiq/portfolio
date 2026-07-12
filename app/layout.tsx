import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://mustafasadiq.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mustafa Sadiq — Software Application Engineer",
  description:
    "Software engineer modernizing secure, accessible federal digital services across AWS, Azure, Java, .NET, Python, and React.",
  alternates: { canonical: siteUrl },
  keywords: [
    "Mustafa Sadiq",
    "Software Engineer",
    "Cloud Engineer",
    "AWS",
    "Azure",
    "Federal Digital Services",
  ],
  openGraph: {
    title: "Mustafa Sadiq — Software Application Engineer",
    description:
      "Secure cloud modernization for public-impact digital services.",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1731,
        height: 909,
        alt: "Mustafa Sadiq — Software Application Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Sadiq — Software Application Engineer",
    description:
      "Secure cloud modernization for public-impact digital services.",
    images: [`${siteUrl}/og.png`],
  },
};

export const viewport: Viewport = {
  themeColor: "#07111f",
  colorScheme: "dark",
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

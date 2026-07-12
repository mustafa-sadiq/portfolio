import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mustafa Sadiq | Software Application Engineer",
    short_name: "Mustafa Sadiq",
    description:
      "Portfolio of a software application engineer specializing in secure cloud modernization and accessible federal digital services.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f9fa",
    theme_color: "#005ea8",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}

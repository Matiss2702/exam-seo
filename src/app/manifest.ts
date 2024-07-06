import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Terrains Confus",
    short_name: "Terrains Confus",
    description:
      "Découvrez le projet Terrains Confus de Paris, explorant la biodiversité, la conservation des sols, la gestion de l'eau et plus encore.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#FDFDFD",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-192x192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}

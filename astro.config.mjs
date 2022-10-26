import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "astro-sanity";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanity({
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      projectId: "v9diiubf",
      token: process.env.SANITY_API_TOKEN,
      useCDN: process.env.NODE_ENV === "production",
    }),
  ],
});

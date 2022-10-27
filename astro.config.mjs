import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "astro-sanity";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: "v9diiubf",
      dataset: process.env.PUBLIC_SANITY_DATASET || "production",
      // token: process.env.PUBLIC_SANITY_API_TOKEN,
      useCDN: process.env.NODE_ENV || "production",
      apiVersion: "2022-05-13",
    }),
  ],
});

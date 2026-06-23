import { defineConfig } from "astro/config";

import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://muskelmaenner.de",

  integrations: [sitemap(), react()],

  vite: {
    plugins: [tailwind()],
  },
});
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-micro.vercel.app",
  integrations: [tailwind(), sitemap(), mdx(), icon()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

const DEFAULT_SITE_URL = "https://russulasp.github.io";
const DEFAULT_BASE_PATH = "/astro-snippet-app/";

function normalizeBasePath(value) {
  if (!value) return "/";
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

const site = process.env.PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
const base = normalizeBasePath(process.env.PUBLIC_BASE_PATH ?? DEFAULT_BASE_PATH);

export default defineConfig({
  site,
  base,

  vite: {
    plugins: [tailwindcss()],
  },
});

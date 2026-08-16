import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

const site = process.env.PUBLIC_SITE_URL ?? "https://ourmicroschool.com";

export default defineConfig({
  site,
  adapter: vercel(),
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "connect-src 'self'",
        "font-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "frame-ancestors 'self'",
        "form-action 'self'",
        "upgrade-insecure-requests",
      ],
    },
  },
});

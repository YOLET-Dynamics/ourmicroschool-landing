import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const site = process.env.PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://ourmicroschool.com";

const sitemapPages = ["/", "/contact", "/partners", "/corporate-social-responsibility"].map(
  (pathname) => new URL(pathname, site).href,
);

export default defineConfig({
  site,
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [
    sitemap({
      customPages: sitemapPages,
      filter: (page) => page === new URL("/", site).href || !new URL(page).pathname.endsWith("/"),
    }),
  ],
  image: {
    responsiveStyles: true,
  },
  markdown: {
    syntaxHighlight: false,
  },
  security: {
    checkOrigin: true,
    allowedDomains: [
      { hostname: "ourmicroschool.com", protocol: "https" },
      { hostname: "www.ourmicroschool.com", protocol: "https" },
      { hostname: "localhost", protocol: "http" },
    ],
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
  vite: {
    server: {
      allowedHosts: ["ourmicroschool.com", "www.ourmicroschool.com"],
    },
  },
});

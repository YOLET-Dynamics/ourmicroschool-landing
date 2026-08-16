import { FetchState, astro } from "astro/fetch";

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
} as const;

export default {
  async fetch(request: Request): Promise<Response> {
    const response = await astro(new FetchState(request));

    for (const [name, value] of Object.entries(securityHeaders)) {
      response.headers.set(name, value);
    }

    if (["GET", "HEAD"].includes(request.method) && response.headers.get("content-type")?.includes("text/html")) {
      response.headers.set("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
    }

    return response;
  },
};

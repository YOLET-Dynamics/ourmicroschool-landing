type RateLimitOptions = {
  limit?: number;
  windowMs?: number;
};

type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const DEFAULT_LIMIT = 5;
const DEFAULT_WINDOW = 60_000; // 1 minute

const store = new Map<string, RateLimitEntry>();

export function isRateLimited(key: string, options?: RateLimitOptions): boolean {
  const limit = options?.limit ?? DEFAULT_LIMIT;
  const windowMs = options?.windowMs ?? DEFAULT_WINDOW;
  const now = Date.now();

  const entry = store.get(key);

  if (!entry || entry.expiresAt <= now) {
    store.set(key, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  if (entry.count >= limit) {
    return true;
  }

  entry.count += 1;
  return false;
}

export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim().toLowerCase() ?? "unknown";
  }

  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.toLowerCase();
  }

  return "unknown";
}


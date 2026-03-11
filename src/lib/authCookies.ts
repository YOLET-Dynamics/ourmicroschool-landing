const EXPIRED_COOKIE_DATE = "Thu, 01 Jan 1970 00:00:00 GMT";

const deleteCookie = (name: string, domain?: string) => {
  const domainPart = domain ? `; domain=${domain}` : "";
  document.cookie = `${name}=; expires=${EXPIRED_COOKIE_DATE}; max-age=0; path=/${domainPart}`;
};

const getDomainCandidates = (hostname: string): string[] => {
  const candidates = new Set<string>([".ourmicroschool.com", "ourmicroschool.com"]);

  if (!hostname) {
    return Array.from(candidates);
  }

  candidates.add(hostname);
  candidates.add(`.${hostname}`);

  return Array.from(candidates);
};

export const clearDomainCookiesBeforeLogin = () => {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return;
  }

  const cookieNames = document.cookie
    .split(";")
    .map((item) => item.trim().split("=")[0])
    .filter(Boolean);

  if (!cookieNames.length) {
    return;
  }

  const domainCandidates = getDomainCandidates(window.location.hostname);

  cookieNames.forEach((cookieName) => {
    deleteCookie(cookieName);
    domainCandidates.forEach((domain) => deleteCookie(cookieName, domain));
  });
};

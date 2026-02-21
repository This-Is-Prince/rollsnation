const LOCALHOST_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);

export function isAnalyticsProductionEnv() {
  return process.env.NODE_ENV === "production";
}

export function isLocalhostHostname(hostname: string) {
  return LOCALHOST_HOSTNAMES.has(hostname.toLowerCase());
}

export function isAnalyticsRuntimeEnabled() {
  if (!isAnalyticsProductionEnv()) {
    return false;
  }

  if (typeof window === "undefined") {
    return true;
  }

  return !isLocalhostHostname(window.location.hostname);
}

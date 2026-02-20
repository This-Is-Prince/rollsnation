import "server-only";

import { cache } from "react";
import { headers } from "next/headers";
import {
  DEFAULT_SITE_ORIGIN,
  PRIMARY_SITE_DOMAIN,
  SUPPORTED_SITE_DOMAINS,
} from "@/src/config/site";

type RequestSite = {
  host: string;
  protocol: "http" | "https";
  origin: string;
};

const localHosts = new Set(["localhost", "127.0.0.1", "0.0.0.0"]);
const trustedHosts = new Set([
  ...SUPPORTED_SITE_DOMAINS,
  ...SUPPORTED_SITE_DOMAINS.map((domain) => `www.${domain}`),
]);

function firstForwardedValue(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }

  const normalized = value.split(",")[0]?.trim().toLowerCase();
  return normalized || null;
}

function normalizeHost(value: string | null | undefined): string | null {
  const firstValue = firstForwardedValue(value);
  if (!firstValue) {
    return null;
  }

  const withoutTrailingDot = firstValue.endsWith(".")
    ? firstValue.slice(0, -1)
    : firstValue;

  // IPv6 hosts are rare here; keep them untouched if bracketed.
  if (withoutTrailingDot.startsWith("[")) {
    return withoutTrailingDot;
  }

  return withoutTrailingDot.split(":")[0] || null;
}

function getDefaultHost() {
  try {
    return new URL(DEFAULT_SITE_ORIGIN).host.toLowerCase();
  } catch {
    return PRIMARY_SITE_DOMAIN;
  }
}

function isTrustedHost(host: string): boolean {
  return (
    trustedHosts.has(host) ||
    localHosts.has(host) ||
    host.endsWith(".vercel.app")
  );
}

function resolveProtocol(host: string, forwardedProto: string | null) {
  const explicitProto = firstForwardedValue(forwardedProto);

  if (explicitProto === "http" || explicitProto === "https") {
    return explicitProto;
  }

  return localHosts.has(host) ? "http" : "https";
}

const getRequestSiteContext = cache(async (): Promise<RequestSite> => {
  const requestHeaders = await headers();

  const forwardedHost = normalizeHost(requestHeaders.get("x-forwarded-host"));
  const hostHeader = normalizeHost(requestHeaders.get("host"));

  const candidateHost = forwardedHost ?? hostHeader;
  const host =
    candidateHost && isTrustedHost(candidateHost)
      ? candidateHost
      : getDefaultHost();

  const protocol = resolveProtocol(host, requestHeaders.get("x-forwarded-proto"));

  return {
    host,
    protocol,
    origin: `${protocol}://${host}`,
  };
});

function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export async function getRequestSite() {
  return getRequestSiteContext();
}

export async function getSiteOrigin() {
  const site = await getRequestSiteContext();
  return site.origin;
}

export async function getSiteHost() {
  const site = await getRequestSiteContext();
  return site.host;
}

export async function absoluteUrl(pathname = "/") {
  const origin = await getSiteOrigin();
  return new URL(normalizePath(pathname), origin).toString();
}

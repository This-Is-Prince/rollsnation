import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const STRIPPED_QUERY_PARAMS = ["trk"];

function shouldBypassProxy(pathname: string) {
  return (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.includes(".")
  );
}

export function proxy(request: NextRequest) {
  const { nextUrl } = request;

  if (shouldBypassProxy(nextUrl.pathname)) {
    return NextResponse.next();
  }

  const normalizedUrl = nextUrl.clone();
  let hasChanges = false;

  for (const param of STRIPPED_QUERY_PARAMS) {
    if (!normalizedUrl.searchParams.has(param)) {
      continue;
    }

    normalizedUrl.searchParams.delete(param);
    hasChanges = true;
  }

  if (!hasChanges) {
    return NextResponse.next();
  }

  return NextResponse.redirect(normalizedUrl, 308);
}

export const config = {
  matcher: "/:path*",
};

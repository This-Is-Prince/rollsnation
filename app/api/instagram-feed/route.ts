import { NextResponse } from "next/server";

import { getInstagramFeed } from "@/src/services/instagram-feed";

const DEFAULT_LIMIT = 6;

function resolveLimit(rawLimit: string | null) {
  if (!rawLimit) {
    return DEFAULT_LIMIT;
  }

  const parsedLimit = Number.parseInt(rawLimit, 10);
  if (Number.isNaN(parsedLimit)) {
    return DEFAULT_LIMIT;
  }

  return parsedLimit;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = resolveLimit(searchParams.get("limit"));
  const feed = await getInstagramFeed({ limit });

  return NextResponse.json(feed);
}

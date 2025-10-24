import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const regencyId = req.nextUrl.searchParams.get("regencyId");
  if (!regencyId) return NextResponse.json([], { status: 400 });

  try {
    const res = await fetch(
      `https://penhele.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`,
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}

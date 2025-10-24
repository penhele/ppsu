import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const districtId = req.nextUrl.searchParams.get("districtId");
  if (!districtId) return NextResponse.json([], { status: 400 });

  try {
    const res = await fetch(
      `https://penhele.github.io/api-wilayah-indonesia/api/villages/${districtId}.json`,
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}

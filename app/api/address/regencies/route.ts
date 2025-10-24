import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const provinceId = req.nextUrl.searchParams.get("provinceId");
  if (!provinceId) return NextResponse.json([], { status: 400 });

  try {
    const res = await fetch(
      `https://penhele.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`,
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}

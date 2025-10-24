import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://penhele.github.io/api-wilayah-indonesia/api/provinces.json",
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal fetch provinsi" },
      { status: 500 },
    );
  }
}

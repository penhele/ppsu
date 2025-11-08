import { NextResponse } from "next/server";
import { getJumlahCuti } from "@/lib/data/statistic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const days = Number(searchParams.get("days") ?? 7);
  const data = await getJumlahCuti(days);
  return NextResponse.json(data);
}

import { NextResponse } from "next/server";
import { getPegawai } from "@/lib/data";

export async function GET() {
  const data = await getPegawai();
  return NextResponse.json(data);
}

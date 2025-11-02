import { getPegawai } from "@/lib/data/pegawai";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getPegawai();
  return NextResponse.json(data);
}

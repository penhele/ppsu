import { JenisPekerjaan } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const jenisPekerjaanValues = Object.values(JenisPekerjaan);
  return NextResponse.json(jenisPekerjaanValues);
}

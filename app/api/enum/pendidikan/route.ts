import { Pendidikan } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const pendidikanValues = Object.values(Pendidikan);
  return NextResponse.json(pendidikanValues);
}

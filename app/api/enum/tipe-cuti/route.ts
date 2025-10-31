import { TipeCuti } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const tipeCutiValues = Object.values(TipeCuti);
  return NextResponse.json(tipeCutiValues);
}

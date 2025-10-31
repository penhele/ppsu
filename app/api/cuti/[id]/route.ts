import { getCutiById } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const data = await getCutiById(id);

  if (!data) {
    return NextResponse.json({ error: "Cuti not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}

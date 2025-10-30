import { NextResponse } from "next/server";
import { getPegawaiById } from "@/lib/data";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params; 

  const data = await getPegawaiById(id);

  if (!data) {
    return NextResponse.json({ error: "Pegawai not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}

import { updatePegawaiStatusIfCutiEnded } from "@/lib/action";
import { NextResponse } from "next/server";

export async function GET() {
  await updatePegawaiStatusIfCutiEnded();
  return NextResponse.json({ message: "Pegawai status updated." });
}

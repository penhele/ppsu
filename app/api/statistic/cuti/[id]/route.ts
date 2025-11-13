import { getCutiByUserId } from "@/lib/data/cuti";
import { CutiStatus } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const cuti = await getCutiByUserId(id);

  const results = [
    {
      title: "Sisa Cuti",
      total:
        12 - cuti.filter((item) => item.status == CutiStatus.DISETUJUI).length,
      fill: "var(--color-sisa)",
    },
    {
      title: "Total Cuti",
      total: cuti.filter((item) => item.status == CutiStatus.DISETUJUI).length,
      fill: "var(--color-total)",
    },
  ];

  return NextResponse.json(results);
}

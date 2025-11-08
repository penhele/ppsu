import { getJumlahCutiPerTanggal } from "@/lib/data/statistic";
import { formatDateSmall } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
  const results: { date: string; total: number }[] = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    const total = await getJumlahCutiPerTanggal(date);
    results.push({
      date: formatDateSmall(date),
      total,
    });
  }

  return NextResponse.json(results);
}

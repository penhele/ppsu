import { CutiStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { formatDateSmall } from "../utils";

export const getJumlahCutiPerTanggal = async (date: Date) => {
  const startOfDay = new Date(date);
  startOfDay.setUTCHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setUTCHours(23, 59, 59, 999);

  const count = await prisma.cuti.count({
    where: {
      tanggal_mulai: { lte: endOfDay },
      tanggal_selesai: { gte: startOfDay },
      status: CutiStatus.DISETUJUI,
    },
  });

  return count;
};

export const getJumlahCuti = async (totalDay: number) => {
  const today = new Date();
  const dates = Array.from({ length: totalDay + 1 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    return date;
  });

  const totals = await Promise.all(dates.map(getJumlahCutiPerTanggal));

  const results = dates.map((date, idx) => ({
    date: formatDateSmall(date),
    total: totals[idx],
  }));

  return results.reverse();
};

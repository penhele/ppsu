import { CutiStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

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

import { CutiStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getPegawaiByUserId } from "@/lib/data/pegawai";

export const getCuti = async () => {
  try {
    const result = await prisma.cuti.findMany({
      include: {
        Pegawai: true,
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching cuti:", error);
    return [];
  }
};

export const getCutiById = async (cutiId: string) => {
  try {
    const result = await prisma.cuti.findUnique({
      where: { id_cuti: cutiId },
      include: { Pegawai: true },
    });
    return result;
  } catch (error) {
    console.error("Error fetching cuti by ID:", error);
  }
};

export const getCutiByStatus = async ({
  status,
}: {
  status: CutiStatus | CutiStatus[];
}) => {
  try {
    const result = await prisma.cuti.findMany({
      where: {
        status: Array.isArray(status) ? { in: status } : status,
      },
      include: { Pegawai: true },
    });
    return result;
  } catch (error) {
    console.error("Error fetching cuti by status:", error);
    return [];
  }
};

export const getCutiByUserId = async (userId: string) => {
  try {
    const user = await getPegawaiByUserId(userId);
    const result = await prisma.cuti.findMany({
      where: {
        id_pegawai: user?.id_pegawai,
      },
      include: {
        Pegawai: true,
      },
    });

    return result;
  } catch (error) {
    console.error("Error fetching cuti by user ID:", error);
    return [];
  }
};

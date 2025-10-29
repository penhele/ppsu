import { prisma } from "@/lib/prisma";
import { CutiStatus } from "@prisma/client";

export const getPegawai = async () => {
  try {
    const result = await prisma.pegawai.findMany({
      include: {
        _count: {
          select: { cuti: true },
        },
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching pegawai:", error);
    return [];
  }
};

export const getPegawaiById = async (pegawaiId: string) => {
  try {
    const result = await prisma.pegawai.findUnique({
      where: { id_pegawai: pegawaiId },
    });
    return result;
  } catch (error) {
    console.error("Error fetching pegawai by id:", error);
  }
};

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

export const getCutiById = async ({ id }: { id: string }) => {
  try {
    const result = await prisma.cuti.findFirst({
      where: { id_cuti: id },
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

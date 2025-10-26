import { prisma } from "@/lib/prisma";

export const getPegawai = async () => {
  try {
    const result = await prisma.pegawai.findMany({});
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

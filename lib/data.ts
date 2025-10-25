import { prisma } from "./prisma";

export const getPegawai = async () => {
  try {
    const result = await prisma.pegawai.findMany({});
    return result;
  } catch (error) {
    console.error("Error fetching pegawai:", error);
    return [];
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

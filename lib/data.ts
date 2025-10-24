import { prisma } from "./prisma";

export const getPegawai = async () => {
  try {
    const result = await prisma.pegawai.findMany({
      orderBy: {
        nama: "asc",
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching pegawai:", error);
    return [];
  }
};
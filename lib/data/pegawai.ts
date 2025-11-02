import { CutiStatus, Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { updatePegawaiStatusIfCutiEnded } from "@/lib/action/pegawai";

export const getPegawai = async () => {
  try {
    await updatePegawaiStatusIfCutiEnded();

    const result = await prisma.pegawai.findMany({
      include: {
        _count: {
          select: {
            cuti: {
              where: {
                status: CutiStatus.DISETUJUI,
              },
            },
          },
        },
        User: true,
      },
      where: {
        User: {
          role: Role.PEGAWAI,
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
      include: {
        User: true,
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching pegawai by id:", error);
  }
};

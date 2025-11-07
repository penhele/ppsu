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
        user: true,
        cuti: true,
      },
      where: {
        user: {
          role: Role.PEGAWAI,
        },
      },
    });

    return result.map((p) => ({
      id: p.id_pegawai,
      nama: p.nama,
      email: p.user.email,
      tempat_lahir: p.tempat_lahir,
      tanggal_lahir: p.tanggal_lahir,
      alamat: p.alamat,
      rt: p.rt,
      rw: p.rw,
      kelurahan: p.kelurahan,
      kecamatan: p.kecamatan,
      kota: p.kota,
      provinsi: p.provinsi,
      no_telepon: p.no_telepon,
      no_ktp: p.no_ktp,
      npwp: p.npwp,
      no_rekening: p.no_rekening,
      bank_dki_cabang: p.bank_dki_cabang,
      status: p.status,
      pendidikan: p.pendidikan,
      jenis_pekerjaan: p.jenis_pekerjaan,
      total_cuti_disetujui: p._count.cuti,
    }));
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
        user: true,
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching pegawai by id:", error);
  }
};

export const getPegawaiByUserId = async (userId: string) => {
  try {
    const result = await prisma.pegawai.findUnique({
      where: { user_id: userId },
    });
    return result;
  } catch (error) {
    console.error("Error fetching pegawai by user id:", error);
  }
};

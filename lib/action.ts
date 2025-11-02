"use server";

import { prisma } from "@/lib/prisma";
import { CutiSchema, CutiType, PegawaiType } from "@/lib/zod";
import { CutiStatus, PegawaiStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { getPegawaiById } from "./data";
import { hashPassword } from "./utils/password";
import { auth } from "@/auth";

export const savePegawai = async (data: PegawaiType) => {
  try {
    const hashedPassword = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    });

    await prisma.pegawai.create({
      data: {
        nama: data.nama,
        user_id: user.id,
        tempat_lahir: data.tempat_lahir,
        tanggal_lahir: data.tanggal_lahir,
        alamat: data.alamat,
        provinsi: data.provinsi,
        kota: data.kota,
        kecamatan: data.kecamatan,
        kelurahan: data.kelurahan,
        rt: data.rt,
        rw: data.rw,
        no_telepon: data.no_telepon,
        no_ktp: data.no_ktp,
        npwp: data.npwp,
        no_rekening: data.no_rekening,
        bank_dki_cabang: data.bank_dki_cabang,
        pendidikan: data.pendidikan,
        jenis_pekerjaan: data.jenis_pekerjaan,
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/dashboard/data-pegawai");
};

// export const saveCuti = async (prevState: unknown, formData: FormData) => {
//   const rawData = {
//     id_pegawai: formData.get("nama"),
//     tipe_cuti: formData.get("tipe_cuti"),
//     tanggal_mulai: formData.get("tanggal_mulai"),
//     tanggal_selesai: formData.get("tanggal_selesai"),
//     alasan: formData.get("alasan"),
//   };

//   const validatedFields = CutiSchema.safeParse(rawData);
//   if (!validatedFields.success)
//     return { error: validatedFields.error.flatten().fieldErrors };

//   const { id_pegawai, tipe_cuti, tanggal_mulai, tanggal_selesai, alasan } =
//     validatedFields.data;

//   try {
//     await prisma.cuti.create({
//       data: {
//         id_pegawai,
//         tipe_cuti,
//         tanggal_mulai,
//         tanggal_selesai,
//         alasan,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }

//   redirect("/dashboard/pengajuan-cuti");
// };

export const saveCutiByPegawai = async (data: CutiType) => {
  const session = await auth();

  try {
    await prisma.cuti.create({
      data: {
        id_pegawai: session?.user?.id,
        tipe_cuti: data.tipe_cuti,
        tanggal_mulai: data.tanggal_mulai,
        tanggal_selesai: data.tanggal_selesai,
        alasan: data.alasan,
      },
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/pengajuan-cuti");
  redirect("/pengajuan-cuti");
};

// Delete
export const deletePegawaiById = async (id: string) => {
  try {
    await prisma.pegawai.delete({
      where: { id_pegawai: id },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/data-pegawai");
};

// Update
export const updatePegawai = async (pegawaiId: string, data: PegawaiType) => {
  try {
    await prisma.pegawai.update({
      where: { id_pegawai: pegawaiId },
      data: {
        nama: data.nama,
        tempat_lahir: data.tempat_lahir,
        tanggal_lahir: data.tanggal_lahir,
        alamat: data.alamat,
        provinsi: data.provinsi,
        kota: data.kota,
        kecamatan: data.kecamatan,
        kelurahan: data.kelurahan,
        rt: data.rt,
        rw: data.rw,
        no_telepon: data.no_telepon,
        no_ktp: data.no_ktp,
        npwp: data.npwp,
        no_rekening: data.no_rekening,
        bank_dki_cabang: data.bank_dki_cabang,
        pendidikan: data.pendidikan,
        jenis_pekerjaan: data.jenis_pekerjaan,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/data-pegawai");
  redirect("/dashboard/data-pegawai");
};

export const approveCutiById = async (
  cutiId: string,
  prevState: unknown,
  formData: FormData,
) => {
  const catatan = (formData.get("catatan") as string | null)?.trim() ?? null;

  const cuti = await prisma.cuti.findUnique({
    where: { id_cuti: cutiId },
    select: { id_pegawai: true },
  });

  try {
    await prisma.cuti.update({
      where: { id_cuti: cutiId },
      data: {
        catatan: catatan,
        status: CutiStatus.DISETUJUI,
      },
    });

    await prisma.pegawai.update({
      where: { id_pegawai: cuti?.id_pegawai },
      data: { status: PegawaiStatus.CUTI },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/persetujuan-cuti");
  redirect("/dashboard/persetujuan-cuti");
};

export const rejectCutiById = async (id: string) => {
  try {
    await prisma.cuti.update({
      where: { id_cuti: id },
      data: { status: CutiStatus.DITOLAK },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/persetujuan-cuti");
  redirect("/dashboard/persetujuan-cuti");
};

// cron job action
export const updatePegawaiStatusIfCutiEnded = async () => {
  const today = new Date();

  try {
    const cutiList = await prisma.cuti.findMany({
      where: {
        status: CutiStatus.DISETUJUI,
        tanggal_selesai: { lt: today },
      },
      select: { id_pegawai: true },
    });

    const pegawaiIds = cutiList.map((cuti) => cuti.id_pegawai);

    await prisma.pegawai.updateMany({
      where: { id_pegawai: { in: pegawaiIds }, status: PegawaiStatus.CUTI },
      data: { status: PegawaiStatus.AKTIF },
    });
  } catch (error) {
    console.log(error);
  }
};

// auth
export const loginUser = async () => {
  try {
  } catch (error) {}
};

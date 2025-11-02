"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/utils/password";
import { PegawaiType } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { CutiStatus, PegawaiStatus } from "@prisma/client";

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

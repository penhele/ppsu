"use server";

import { auth } from "@/auth";
import { CutiType, PegawaiType } from "@/lib/zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CutiStatus, PegawaiStatus } from "@prisma/client";
import { getPegawaiByUserId } from "../data/pegawai";

export const saveCuti = async (data: CutiType) => {
  const session = await auth();
  const pegawai = await getPegawaiByUserId(session?.user?.id as string);

  try {
    await prisma.cuti.create({
      data: {
        id_pegawai: pegawai?.id_pegawai,
        tipe_cuti: data.tipe_cuti,
        tanggal_mulai: data.tanggal_mulai,
        tanggal_selesai: data.tanggal_selesai,
        alasan: data.alasan,
      },
    });

    revalidatePath("/");

    return { success: true, message: "Cuti berhasil diajukan" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Cuti gagal diajukan" };
  }
};

export const approveCutiById = async (cutiId: string, data: CutiType) => {
  try {
    await prisma.cuti.update({
      where: { id_cuti: cutiId },
      data: {
        catatan: data.catatan,
        status: CutiStatus.DISETUJUI,
      },
    });

    revalidatePath("/dashboard/persetujuan-cuti");

    return { success: true, message: "Cuti berhasil disetujui" };
  } catch (error) {
    console.log(error);
    return { success: true, message: "Cuti gagal disetujui" };
  }
};

export const rejectCutiById = async (cutiId: string, data: CutiType) => {
  try {
    await prisma.cuti.update({
      where: { id_cuti: cutiId },
      data: {
        catatan: data.catatan,
        status: CutiStatus.DITOLAK,
      },
    });

    revalidatePath("/dashboard/persetujuan-cuti");

    return { success: true, message: "Cuti berhasil ditolak" };
  } catch (error) {
    console.log(error);
    return { success: true, message: "Cuti gagal ditolak" };
  }
};

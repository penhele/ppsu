"use server";

import { auth } from "@/auth";
import { CutiType } from "@/lib/zod";
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

    console.log(data);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
  redirect("/");
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

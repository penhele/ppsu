"use server";

import { prisma } from "@/lib/prisma";
import { CutiSchema, PegawaiSchema } from "@/lib/zod";
import { CutiStatus, PegawaiStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const savePegawai = async (prevState: unknown, formData: FormData) => {
  const rawData = {
    nama: formData.get("nama"),
    tempat_lahir: formData.get("tempat_lahir"),
    tanggal_lahir: formData.get("tanggal_lahir"),
    alamat: formData.get("alamat"),
    provinsi: formData.get("provinsi"),
    kota: formData.get("kota"),
    kecamatan: formData.get("kecamatan"),
    kelurahan: formData.get("kelurahan"),
    rt: formData.get("rt"),
    rw: formData.get("rw"),
    no_telepon: formData.get("no_telepon"),
    no_ktp: formData.get("no_ktp"),
    npwp: formData.get("npwp"),
    no_rekening: formData.get("no_rekening"),
    bank_dki_cabang: formData.get("bank_dki_cabang"),
    pendidikan: formData.get("pendidikan"),
    jenis_pekerjaan: formData.get("jenis_pekerjaan"),
  };

  const validatedFields = PegawaiSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const {
    nama,
    tempat_lahir,
    tanggal_lahir,
    alamat,
    provinsi,
    kota,
    kecamatan,
    kelurahan,
    rt,
    rw,
    no_telepon,
    no_ktp,
    npwp,
    no_rekening,
    bank_dki_cabang,
    pendidikan,
    jenis_pekerjaan,
  } = validatedFields.data;

  try {
    await prisma.pegawai.create({
      data: {
        nama,
        tempat_lahir,
        tanggal_lahir,
        alamat,
        provinsi,
        kota,
        kecamatan,
        kelurahan,
        rt,
        rw,
        no_telepon,
        no_ktp,
        npwp,
        no_rekening,
        bank_dki_cabang,
        pendidikan,
        jenis_pekerjaan,
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/data-pegawai");
};

export const saveCuti = async (prevState: unknown, formData: FormData) => {
  const rawData = {
    id_pegawai: formData.get("nama"),
    tanggal_mulai: formData.get("tanggal_mulai"),
    tanggal_selesai: formData.get("tanggal_selesai"),
    alasan: formData.get("alasan"),
  };

  const validatedFields = CutiSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const { id_pegawai, tanggal_mulai, tanggal_selesai, alasan } =
    validatedFields.data;

  try {
    await prisma.cuti.create({
      data: {
        id_pegawai,
        tanggal_mulai,
        tanggal_selesai,
        alasan,
      },
    });
  } catch (error) {
    console.log("gagal");
    console.log(error);
  }

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

  revalidatePath("/data-pegawai");
};

// Update
export const updatePegawai = async (
  pegawaiId: string,
  prevState: unknown,
  formData: FormData,
) => {
  const rawData = {
    nama: formData.get("nama"),
    tempat_lahir: formData.get("tempat_lahir"),
    tanggal_lahir: formData.get("tanggal_lahir"),
    alamat: formData.get("alamat"),
    provinsi: formData.get("provinsi"),
    kota: formData.get("kota"),
    kecamatan: formData.get("kecamatan"),
    kelurahan: formData.get("kelurahan"),
    rt: formData.get("rt"),
    rw: formData.get("rw"),
    no_telepon: formData.get("no_telepon"),
    no_ktp: formData.get("no_ktp"),
    npwp: formData.get("npwp"),
    no_rekening: formData.get("no_rekening"),
    bank_dki_cabang: formData.get("bank_dki_cabang"),
    pendidikan: formData.get("pendidikan"),
    jenis_pekerjaan: formData.get("jenis_pekerjaan"),
  };

  const validatedFields = PegawaiSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const {
    nama,
    tempat_lahir,
    tanggal_lahir,
    alamat,
    provinsi,
    kota,
    kecamatan,
    kelurahan,
    rt,
    rw,
    no_telepon,
    no_ktp,
    npwp,
    no_rekening,
    bank_dki_cabang,
    pendidikan,
    jenis_pekerjaan,
  } = validatedFields.data;

  try {
    await prisma.pegawai.update({
      where: { id_pegawai: pegawaiId },
      data: {
        nama,
        tempat_lahir,
        tanggal_lahir,
        alamat,
        provinsi,
        kota,
        kecamatan,
        kelurahan,
        rt,
        rw,
        no_telepon,
        no_ktp,
        npwp,
        no_rekening,
        bank_dki_cabang,
        pendidikan,
        jenis_pekerjaan,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/data-pegawai");
  redirect("/data-pegawai");
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

    console.log("berhasil");
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/persetujuan-cuti");
  redirect("/persetujuan-cuti");
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

  revalidatePath("/persetujuan-cuti");
  redirect("/persetujuan-cuti");
};

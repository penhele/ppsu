"use server";

import { prisma } from "@/lib/prisma";
import { PegawaiSchema } from "@/lib/zod";
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

  console.log("berhasil mentimpan");

  redirect("/data-pegawai");
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

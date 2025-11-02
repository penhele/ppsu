import { JenisPekerjaan, Pendidikan, TipeCuti } from "@prisma/client";
import { z, object, string } from "zod";

export const PegawaiSchema = object({
  nama: string().min(1, "Nama wajib diisi"),
  email: string("Email is required")
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string("Password is required")
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  tempat_lahir: string().min(1, "Tempat lahir wajib diisi"),
  tanggal_lahir: string().min(1, "Tanggal lahir wajib diisi"),
  alamat: string().min(1, "Alamat wajib diisi"),
  provinsi: string().min(1, "Provinsi Wajib diisi"),
  kota: string().min(1, "Kota wajib diisi"),
  kecamatan: string().min(1, "Kecamatan wajib diisi"),
  kelurahan: string().min(1, "Kelurahan wajib diisi"),
  rt: string().min(1, "RT wajib diisi"),
  rw: string().min(1, "RW wajib diisi"),
  no_telepon: string().min(1, "No. telepon wajib diisi"),
  no_ktp: string().min(1, "No. KTP wajib diisi"),
  npwp: string().min(1, "NPWP wajib diisi"),
  no_rekening: string().min(1, "No. Rekening wajib diisi"),
  bank_dki_cabang: string().min(1, "Bank DKI Cabang wajib diisi"),
  pendidikan: z.enum(Pendidikan, {
    message: "Input tidak valid",
  }),
  jenis_pekerjaan: z.enum(JenisPekerjaan, {
    message: "Input tidak valid",
  }),
});

export type PegawaiType = z.infer<typeof PegawaiSchema>;

export const SigninSchema = object({
  email: string("Email is required").min(1, "Email is required"),
  password: string("Password is required").min(1, "Password is required"),
});

export type SigninType = z.infer<typeof SigninSchema>;

export const CutiSchema = object({
  tipe_cuti: z.enum(TipeCuti, {
    message: "Input tidak valid",
  }),
  tanggal_mulai: string().min(1, "Tanggal mulai wajib diisi"),
  tanggal_selesai: string(),
  alasan: string().min(1, "Alasan wajib diisi"),
});

export type CutiType = z.infer<typeof CutiSchema>;

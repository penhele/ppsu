import { z, object, string } from "zod";

export const PegawaiSchema = object({
  nama: string().min(1, "Nama wajib diisi"),
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
  pendidikan: z.enum(["SD", "SMP", "SMA"], {
    message: "Input tidak valid",
  }),
  jenis_pekerjaan: z.enum(["PETUGAS_PPSU"], {
    message: "Input tidak valid",
  }),
});

export const CutiSchema = object({
  id_pegawai: string(),
  tanggal_mulai: string(),
  tanggal_selesai: string(),
  alasan: string(),
});

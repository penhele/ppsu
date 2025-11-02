-- CreateEnum
CREATE TYPE "Pendidikan" AS ENUM ('SD', 'SMP', 'SMA');

-- CreateEnum
CREATE TYPE "JenisPekerjaan" AS ENUM ('PETUGAS_PPSU');

-- CreateEnum
CREATE TYPE "CutiStatus" AS ENUM ('MENUNGGU', 'DISETUJUI', 'DITOLAK');

-- CreateEnum
CREATE TYPE "PegawaiStatus" AS ENUM ('AKTIF', 'TIDAK_AKTIF', 'CUTI');

-- CreateEnum
CREATE TYPE "TipeCuti" AS ENUM ('SAKIT', 'LIBURAN', 'HAMIL', 'KEDUKAAN');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'PEGAWAI');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'PEGAWAI',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pegawai" (
    "id_pegawai" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "tanggal_lahir" TIMESTAMP(3) NOT NULL,
    "alamat" TEXT NOT NULL,
    "rt" TEXT NOT NULL,
    "rw" TEXT NOT NULL,
    "kelurahan" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kota" TEXT NOT NULL,
    "provinsi" TEXT NOT NULL,
    "no_telepon" TEXT NOT NULL,
    "no_ktp" TEXT NOT NULL,
    "npwp" TEXT NOT NULL,
    "no_rekening" TEXT NOT NULL,
    "bank_dki_cabang" TEXT NOT NULL,
    "status" "PegawaiStatus" NOT NULL DEFAULT 'AKTIF',
    "pendidikan" "Pendidikan" NOT NULL,
    "jenis_pekerjaan" "JenisPekerjaan" NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id_pegawai")
);

-- CreateTable
CREATE TABLE "Cuti" (
    "id_cuti" TEXT NOT NULL,
    "tanggal_mulai" TIMESTAMP(3) NOT NULL,
    "tanggal_selesai" TIMESTAMP(3) NOT NULL,
    "tipe_cuti" "TipeCuti" NOT NULL,
    "alasan" TEXT,
    "catatan" TEXT,
    "status" "CutiStatus" NOT NULL DEFAULT 'MENUNGGU',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id_pegawai" TEXT NOT NULL,

    CONSTRAINT "Cuti_pkey" PRIMARY KEY ("id_cuti")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_no_ktp_key" ON "Pegawai"("no_ktp");

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_npwp_key" ON "Pegawai"("npwp");

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_user_id_key" ON "Pegawai"("user_id");

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuti" ADD CONSTRAINT "Cuti_id_pegawai_fkey" FOREIGN KEY ("id_pegawai") REFERENCES "Pegawai"("id_pegawai") ON DELETE CASCADE ON UPDATE CASCADE;

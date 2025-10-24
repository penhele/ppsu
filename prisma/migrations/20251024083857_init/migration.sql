-- CreateEnum
CREATE TYPE "CutiStatus" AS ENUM ('MENUNGGU', 'DISETUJUI', 'DITOLAK');

-- CreateTable
CREATE TABLE "Pegawai" (
    "id_pegawai" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "tanggal_lahir" TEXT NOT NULL,
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
    "pendidikan" TEXT NOT NULL,
    "jenis_pekerjaan" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id_pegawai")
);

-- CreateTable
CREATE TABLE "Cuti" (
    "id_cuti" TEXT NOT NULL,
    "id_pegawai" TEXT NOT NULL,
    "tanggal_mulai" TIMESTAMP(3) NOT NULL,
    "tanggal_selesai" TIMESTAMP(3) NOT NULL,
    "alasan" TEXT,
    "status" "CutiStatus" NOT NULL DEFAULT 'MENUNGGU',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cuti_pkey" PRIMARY KEY ("id_cuti")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_no_ktp_key" ON "Pegawai"("no_ktp");

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_npwp_key" ON "Pegawai"("npwp");

-- AddForeignKey
ALTER TABLE "Cuti" ADD CONSTRAINT "Cuti_id_pegawai_fkey" FOREIGN KEY ("id_pegawai") REFERENCES "Pegawai"("id_pegawai") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "PegawaiStatus" AS ENUM ('AKTIF', 'TIDAK_AKTIF', 'CUTI');

-- AlterTable
ALTER TABLE "Pegawai" ADD COLUMN     "status" "PegawaiStatus" NOT NULL DEFAULT 'AKTIF';

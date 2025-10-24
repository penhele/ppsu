/*
  Warnings:

  - Changed the type of `pendidikan` on the `Pegawai` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `jenis_pekerjaan` on the `Pegawai` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Pendidikan" AS ENUM ('SD', 'SMP', 'SMA');

-- CreateEnum
CREATE TYPE "JenisPekerjaan" AS ENUM ('PETUGAS_PPSU');

-- AlterTable
ALTER TABLE "Pegawai" DROP COLUMN "pendidikan",
ADD COLUMN     "pendidikan" "Pendidikan" NOT NULL,
DROP COLUMN "jenis_pekerjaan",
ADD COLUMN     "jenis_pekerjaan" "JenisPekerjaan" NOT NULL;

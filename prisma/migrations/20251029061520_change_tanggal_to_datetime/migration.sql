/*
  Warnings:

  - Changed the type of `tanggal_lahir` on the `Pegawai` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Pegawai" DROP COLUMN "tanggal_lahir",
ADD COLUMN     "tanggal_lahir" TIMESTAMP(3) NOT NULL;

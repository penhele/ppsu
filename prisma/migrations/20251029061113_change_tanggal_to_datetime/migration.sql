/*
  Warnings:

  - Changed the type of `tanggal_mulai` on the `Cuti` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tanggal_selesai` on the `Cuti` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cuti" DROP COLUMN "tanggal_mulai",
ADD COLUMN     "tanggal_mulai" TIMESTAMP(3) NOT NULL,
DROP COLUMN "tanggal_selesai",
ADD COLUMN     "tanggal_selesai" TIMESTAMP(3) NOT NULL;

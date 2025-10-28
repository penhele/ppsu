/*
  Warnings:

  - You are about to drop the column `keterangan` on the `Cuti` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cuti" DROP COLUMN "keterangan",
ADD COLUMN     "catatan" TEXT;

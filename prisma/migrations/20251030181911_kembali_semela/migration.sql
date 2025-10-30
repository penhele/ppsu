/*
  Warnings:

  - A unique constraint covering the columns `[no_ktp]` on the table `Pegawai` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[npwp]` on the table `Pegawai` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Pegawai_id_pegawai_key";

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_no_ktp_key" ON "Pegawai"("no_ktp");

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_npwp_key" ON "Pegawai"("npwp");

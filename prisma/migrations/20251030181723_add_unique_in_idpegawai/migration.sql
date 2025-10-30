/*
  Warnings:

  - A unique constraint covering the columns `[id_pegawai]` on the table `Pegawai` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_id_pegawai_key" ON "Pegawai"("id_pegawai");

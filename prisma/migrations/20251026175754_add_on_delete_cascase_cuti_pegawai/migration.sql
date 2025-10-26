-- DropForeignKey
ALTER TABLE "public"."Cuti" DROP CONSTRAINT "Cuti_id_pegawai_fkey";

-- AddForeignKey
ALTER TABLE "Cuti" ADD CONSTRAINT "Cuti_id_pegawai_fkey" FOREIGN KEY ("id_pegawai") REFERENCES "Pegawai"("id_pegawai") ON DELETE CASCADE ON UPDATE CASCADE;

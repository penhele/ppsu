import { getPegawaiById } from "@/lib/data";
import EditDaftarPegawaiForm from "@/components/forms/edit-daftar-pegawai-form";
import { notFound } from "next/navigation";

const EditDaftarPegawai = async ({ pegawaiId }: { pegawaiId: string }) => {
  const pegawai = await getPegawaiById(pegawaiId);
  if (!pegawai) return notFound();

  return (
    <div className="flex flex-col gap-8 p-4 border rounded-lg bg-white">
      <div className="text-xl font-medium">Edit Pegawai</div>

      <EditDaftarPegawaiForm pegawai={pegawai} />
    </div>
  );
};

export default EditDaftarPegawai;

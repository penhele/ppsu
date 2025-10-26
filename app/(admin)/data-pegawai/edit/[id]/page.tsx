import EditDaftarPegawai from "@/components/forms/edit-daftar-pegawai";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const pegawaiId = (await params).id;
  if (!pegawaiId) return notFound();

  return (
    <div>
      <EditDaftarPegawai pegawaiId={pegawaiId} />
    </div>
  );
};

export default page;

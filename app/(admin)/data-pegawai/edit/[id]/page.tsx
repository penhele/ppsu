import EditDaftarPegawai from "@/components/forms/edit-daftar-pegawai";
import SkeletonDaftarPegawaiForm from "@/components/skeleton/skeleton-daftar-pegawai-form";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const pegawaiId = (await params).id;
  if (!pegawaiId) return notFound();

  return (
    <div>
      <Suspense fallback={<SkeletonDaftarPegawaiForm />}>
        <EditDaftarPegawai pegawaiId={pegawaiId} />
      </Suspense>
    </div>
  );
};

export default page;

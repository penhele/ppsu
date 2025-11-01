import EditDaftarPegawai from "@/components/forms/edit-daftar-pegawai";
import SkeletonDaftarPegawaiForm from "@/components/skeleton/skeleton-daftar-pegawai-form";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  if (!id) return notFound();

  return (
    <div>
      <Suspense fallback={<SkeletonDaftarPegawaiForm />}>
        <EditDaftarPegawai pegawaiId={id} />
      </Suspense>
    </div>
  );
};

export default page;

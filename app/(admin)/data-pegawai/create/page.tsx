import DaftarPegawaiForm from "@/components/forms/daftar-pegawai-form";
import SkeletonDaftarPegawaiForm from "@/components/skeleton/skeleton-daftar-pegawai-form";
import { Suspense } from "react";

export const metadata = {
  title: "Tambah Data Pegawai",
};

const page = () => {
  return (
    <div className="">
      <Suspense fallback={<SkeletonDaftarPegawaiForm />}>
        <DaftarPegawaiForm />
      </Suspense>
    </div>
  );
};

export default page;

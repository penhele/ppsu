import DaftarPegawaiForm from "@/components/forms/daftar-pegawai-form";

export const metadata = {
  title: "Tambah Data Pegawai",
};

const page = () => {
  return (
    <div className="px-4">
      <DaftarPegawaiForm />
    </div>
  );
};

export default page;

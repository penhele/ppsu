import CreateDaftarPegawaiForm from "@/components/forms/create-daftar-pegawai-form";

const DaftarPegawaiForm = () => {
  return (
    <div className="flex flex-col gap-8 p-4 border rounded-lg bg-white">
      <div className="text-xl font-medium">Tambah Pegawai</div>

      <CreateDaftarPegawaiForm />
    </div>
  );
};

export default DaftarPegawaiForm;

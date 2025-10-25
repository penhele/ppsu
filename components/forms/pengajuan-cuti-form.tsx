import CreatePengajuanCutiForm from "./create-pengajuan-cuti-form";

const PengajuanCutiForm = () => {
  return (
    <div className="flex flex-col gap-8 p-4 border rounded-lg">
      <h1 className="text-xl font-medium">Formulir Pengajuan</h1>

      <CreatePengajuanCutiForm />
    </div>
  );
};

export default PengajuanCutiForm;

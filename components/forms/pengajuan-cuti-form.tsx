import { auth } from "@/auth";
import CreatePengajuanCutiForm from "@/components/forms/create-pengajuan-cuti-form";

const PengajuanCutiForm = async () => {
  const session = await auth();
  if (!session) return null;

  return (
    <div className="flex flex-col gap-8 p-4 mt-[50px] border rounded-lg ">
      <h1 className="text-xl font-medium">Formulir Pengajuan</h1>

      <CreatePengajuanCutiForm session={session} />
    </div>
  );
};

export default PengajuanCutiForm;

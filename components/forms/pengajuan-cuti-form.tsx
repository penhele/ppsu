import { getPegawai } from "@/lib/data";
import CreatePengajuanCutiForm from "@/components/forms/create-pengajuan-cuti-form";

const PengajuanCutiForm = async () => {
  const pegawai = await getPegawai();
  const pegawaiList = pegawai.map((item) => ({
    label: item.nama,
    value: item.id_pegawai,
  }));

  return (
    <div className="flex flex-col gap-8 p-4 border rounded-lg bg-white">
      <h1 className="text-xl font-medium">Formulir Pengajuan</h1>

      <CreatePengajuanCutiForm pegawaiList={pegawaiList} />
    </div>
  );
};

export default PengajuanCutiForm;

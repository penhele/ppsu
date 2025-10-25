import SectionHeader from "./header";
import PengajuanCutiForm from "./forms/pengajuan-cuti-form";

const PengajuanCuti = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Pengajuan Cuti"
        description="Lorem ipsum dolor sit amet."
      />

      <PengajuanCutiForm />
    </div>
  );
};

export default PengajuanCuti;

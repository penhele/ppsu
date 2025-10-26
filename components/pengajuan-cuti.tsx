import SectionHeader from "@/components/header";
import PengajuanCutiForm from "@/components/forms/pengajuan-cuti-form";

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

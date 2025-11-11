import PengajuanCutiForm from "@/components/forms/pengajuan-cuti-form";
import SectionHeader from "@/components/section-header";

const PengajuanCuti = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="Pengajuan Cuti"/>

      <PengajuanCutiForm />
    </div>
  );
};

export default PengajuanCuti;

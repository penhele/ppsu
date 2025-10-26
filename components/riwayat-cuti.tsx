import SectionHeader from "@/components/header";
import TableRiwayatCuti from "@/components/table-riwayat-cuti";

const RiwayatCuti = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Riwayat Cuti"
        description="Pantau semua pengajuan cuti beserta statusnya."
      />

      <TableRiwayatCuti />
    </div>
  );
};

export default RiwayatCuti;

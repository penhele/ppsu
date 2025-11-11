import SectionHeader from "@/components/section-header";
import TableRiwayatCuti from "@/components/tables/table-riwayat-cuti/table-riwayat-cuti";

const RiwayatCuti = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="Riwayat Cuti" />

      <TableRiwayatCuti isPegawai />
    </div>
  );
};

export default RiwayatCuti;

import SectionHeader from "./header";
import TableRiwayatCuti from "./table-riwayat-cuti";

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

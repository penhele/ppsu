import SectionHeader from "@/components/header";
import TablePersetujuanCuti from "@/components/tables/table-persetujuan-cuti";
import TableRiwayatCuti from "@/components/tables/table-riwayat-cuti";

const PersetujuanCuti = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Persetujuan Cuti"
        description="Kelola persetujuan pengajuan cuti pegawai"
      />

      <TablePersetujuanCuti />

      <TableRiwayatCuti />
    </div>
  );
};

export default PersetujuanCuti;

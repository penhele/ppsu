import SectionHeader from "@/components/header";
import TablePersetujuanCuti from "@/components/table-persetujuan-cuti";
import TableRiwayatCuti from "@/components/table-riwayat-cuti";

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

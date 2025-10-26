import SectionHeader from "@/components/header";
import TableRiwayatCuti from "@/components/table-riwayat-cuti";
import CutiSummaryCard from "@/components/cuti-summary";
import { Activity, CheckCircle, Clock, XCircle } from "lucide-react";

const RiwayatCuti = () => {
  const data = [
    { title: "Total Permohonan", total: 10, icon: Activity, color: "gray" },
    { title: "Disetujui", total: 6, icon: CheckCircle, color: "green" },
    { title: "Ditolak", total: 2, icon: XCircle, color: "red" },
    { title: "Menunggu", total: 2, icon: Clock, color: "yellow" },
  ];

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Riwayat Cuti"
        description="Pantau semua pengajuan cuti beserta statusnya."
      />

      <CutiSummaryCard items={data} />

      <TableRiwayatCuti />
    </div>
  );
};

export default RiwayatCuti;

import SectionHeader from "@/components/header";
import TableRiwayatCuti from "@/components/tables/table-riwayat-cuti";
import CutiSummaryCard from "@/components/cuti-summary";
import { Activity, CheckCircle, Clock, XCircle } from "lucide-react";
import { getCuti } from "@/lib/data";
import { CutiStatus } from "@prisma/client";
import { capitalizeWords } from "@/lib/utils";

const RiwayatCuti = async () => {
  const cuti = await getCuti();

  const data = [
    {
      title: "Total Permohonan",
      total: cuti.length,
      icon: Activity,
      color: "gray",
    },
    {
      title: capitalizeWords(CutiStatus.DISETUJUI),
      total: cuti.filter((item) => item.status === CutiStatus.DISETUJUI).length,
      icon: CheckCircle,
      color: "green",
    },
    {
      title: capitalizeWords(CutiStatus.DITOLAK),
      total: cuti.filter((item) => item.status === CutiStatus.DITOLAK).length,
      icon: XCircle,
      color: "red",
    },
    {
      title: capitalizeWords(CutiStatus.MENUNGGU),
      total: cuti.filter((item) => item.status === CutiStatus.MENUNGGU).length,
      icon: Clock,
      color: "yellow",
    },
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

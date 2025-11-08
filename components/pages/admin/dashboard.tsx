import SectionHeader from "@/components/section-header";
import Permohonan from "@/components/permohonan";
import Overview from "@/components/overview";
import ChartRiwayatCuti from "@/components/charts/chart-riwayat-cuti";
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Dashboard Overview"
        description="Selamat datang di sistem manajemen cuti pegawai"
      />

      <Overview />

      <Permohonan />

      <ChartRiwayatCuti />
    </div>
  );
};

export default Dashboard;

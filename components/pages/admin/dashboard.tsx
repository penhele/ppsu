import SectionHeader from "@/components/section-header";
import Permohonan from "@/components/permohonan";
import Overview from "@/components/overview";
import { ChartAreaInteractive } from "@/components/chart";
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Dashboard Overview"
        description="Selamat datang di sistem manajemen cuti pegawai"
      />

      <Overview />

      <Permohonan />

      <ChartAreaInteractive />
    </div>
  );
};

export default Dashboard;

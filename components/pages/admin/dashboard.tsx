import SectionHeader from "@/components/section-header";
import Permohonan from "@/components/permohonan";
import Overview from "@/components/overview";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Dashboard Overview"
        description="Selamat datang di sistem manajemen cuti pegawai"
      />

      <Overview />

      <Permohonan />
    </div>
  );
};

export default Dashboard;

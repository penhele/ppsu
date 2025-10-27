import SectionHeader from "@/components/header";
import Permohonan from "@/components/permohonan";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Dashboard Overview"
        description="Selamat datang di sistem manajemen cuti pegawai"
      />

      <div className="grid grid-cols-3 gap-4">
        <Permohonan />
      </div>
    </div>
  );
};

export default Dashboard;

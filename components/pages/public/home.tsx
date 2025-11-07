import DashboardCardPegawai from "@/components/dashboard-card-pegawai";
import InformasiCutiPegawai from "@/components/informasi-cuti-pegawai";

const Home = async () => {
  return (
    <div>
      <DashboardCardPegawai />
      <InformasiCutiPegawai />
    </div>
  );
};

export default Home;

import { auth } from "@/auth";
import DashboardCardPegawai from "@/components/dashboard-card-pegawai";

import InformasiCutiPegawai from "@/components/informasi-cuti-pegawai";

const Home = async () => {
  const session = await auth();
  if (!session) return <p>tidak ada session</p>;

  return (
    <div>
      <DashboardCardPegawai />
      <InformasiCutiPegawai/>
    </div>
  );
};

export default Home;

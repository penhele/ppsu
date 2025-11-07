import { auth } from "@/auth";
import DashboardCardPegawai from "./dashboard-card-pegawai";

const Home = async () => {
  const session = await auth();
  if (!session) return <p>tidak ada session</p>;

  return (
    <div>
      <DashboardCardPegawai />
    </div>
  );
};

export default Home;

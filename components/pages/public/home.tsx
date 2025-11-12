import { auth } from "@/auth";
import AktivitasTerbaru from "@/components/aktivitas-terbaru";
import { ChartPieLabel } from "@/components/charts/chart-pie-label";
import SectionCard from "@/components/section-card";
import SectionHeader from "@/components/section-header";
import { getPegawaiByUserId } from "@/lib/data/pegawai";

const Home = async () => {
  const session = await auth();
  const pegawai = await getPegawaiByUserId(session?.user.id ?? "");

  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title={`Halo, ${pegawai?.nama}`}
        description="Selamat datang di halaman pegawai"
      />

      <SectionCard />

      <div className="grid lg:grid-cols-2 gap-4">
        <AktivitasTerbaru />
        <ChartPieLabel />
        {/* <InformasiCuti /> */}
      </div>
    </div>
  );
};

export default Home;

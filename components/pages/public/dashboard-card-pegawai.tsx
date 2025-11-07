import { DashboardCard } from "@/components/dashboardCard";
import { Calendar, Check, Clock, TrendingUp } from "lucide-react";


const DashboardCardPegawai = () => {
    const cardData = [
  {
    title: "Sisa Cuti Tahunan",
    value: 8,
    description: "Hari",
    icon: Calendar,
    iconBgColor: "bg-blue-100", // Latar belakang biru muda
    iconColor: "text-blue-600", // Ikon biru
  },
  {
    title: "Cuti Diambil",
    value: 4,
    description: "Tahun ini",
    icon: Check,
    iconBgColor: "bg-green-100", // Latar belakang hijau muda
    iconColor: "text-green-600", // Ikon hijau
  },
  {
    title: "Pengajuan Pending",
    value: 1,
    description: "Menunggu persetujuan",
    icon: Clock,
    iconBgColor: "bg-orange-100", // Latar belakang oranye muda
    iconColor: "text-orange-600", // Ikon oranye
  },
  {
    title: "Total Pengajuan",
    value: 7,
    description: "Tahun ini",
    icon: TrendingUp,
    iconBgColor: "bg-purple-100", // Latar belakang ungu muda
    iconColor: "text-purple-600", // Ikon ungu
  },
];
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Dashboard */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Selamat datang, John Doe</p>
      </header>

      {/* Grid Kartu Data */}
      {/* grid-cols-4 untuk desktop, sm:grid-cols-2 untuk tablet, grid-cols-1 untuk mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((data, index) => (
          <DashboardCard
            key={index}
            title={data.title}
            value={data.value}
            description={data.description}
            icon={data.icon}
            iconBgColor={data.iconBgColor}
            iconColor={data.iconColor}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardCardPegawai;

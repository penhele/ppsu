import { Card, CardContent } from "./ui/card";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ElementType; 
  iconBgColor: string; 
  iconColor: string; 
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  description,
  icon: Icon,
  iconBgColor,
  iconColor,
}) => (
  // Menggunakan Card dari shadcn/ui. 
  // border-none: untuk menghilangkan border default shadcn/ui.
  // shadow-md dan hover:shadow-lg: untuk efek bayangan yang halus.
  <Card className="shadow-md hover:shadow-lg transition-shadow border-none"> 
    {/* CardContent: container untuk isi kartu */}
    <CardContent className="p-5"> 
      <div className="flex justify-between items-start">
        {/* Konten Teks (Kiri) */}
        <div>
          {/* Judul: Sisa Cuti Tahunan */}
          <h4 className="text-base font-medium text-gray-800">{title}</h4> 
          {/* Nilai: 8, 4, 1, 7 */}
          <div className="text-3xl font-bold mt-2 mb-0.5 text-gray-900">{value}</div>
          {/* Deskripsi: Hari, Tahun ini, dll. */}
          <p className="text-sm text-gray-500">{description}</p> 
        </div>

        {/* Ikon (Kanan) */}
        {/* rounded-xl: untuk sudut yang agak membulat (sesuai gambar) */}
        <div className={`p-3 rounded-xl ${iconBgColor}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
    </CardContent>
  </Card>
);
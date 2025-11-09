import { auth } from "@/auth";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPegawaiByUserId } from "@/lib/data/pegawai";
import { cn } from "@/lib/utils";
import {
  ChartNoAxesColumn,
  Check,
  CheckCircle,
  CircleGauge,
  Clock,
} from "lucide-react";

const SectionCard = async () => {
  const session = await auth();
  const pegawai = await getPegawaiByUserId(session?.user.id ?? "");
  const totalCuti = 12;

  const items = [
    {
      title: "Sisa Cuti Tahunan",
      value: totalCuti - (pegawai?._count.disetujui ?? 0),
      Icon: CircleGauge,
      className: "bg-blue-100 text-blue-600",
    },
    {
      title: "Cuti Diambil",
      value: pegawai?._count.disetujui,
      Icon: CheckCircle,
      className: "bg-green-100 text-green-600",
    },
    {
      title: "Pengajuan Pending",
      value: pegawai?._count.menunggu,
      Icon: Clock,
      className: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Total Pengajuan",
      value: pegawai?._count.total,
      Icon: ChartNoAxesColumn,
      className: "bg-gray-100 text-gray-600",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => (
        <Card key={index} className="transition hover:shadow-md">
          <CardHeader className="flex justify-between items-center">
            <div className="">
              <CardDescription>{item.title}</CardDescription>
              <CardTitle>{item.value}</CardTitle>
            </div>

            <div className={cn("bg-amber-400 rounded-lg p-2", item.className)}>
              <item.Icon className="size-5" />
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default SectionCard;

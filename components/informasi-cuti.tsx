import { auth } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPegawaiByUserId } from "@/lib/data/pegawai";
import { Slider } from "@/components/ui/slider";

const InformasiCuti = async () => {
  const session = await auth();
  const pegawai = await getPegawaiByUserId(session?.user.id ?? "");
  const totalCuti = 12;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informasi Cuti</CardTitle>
        <CardDescription>Status dan informasi cuti Anda</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>Jatah cuti</span>
            <span>{totalCuti} kali</span>
          </div>
          <div className="flex justify-between">
            <span>Cuti Terpakai</span>
            <span>{pegawai?._count.disetujui} kali</span>
          </div>
          <div className="flex justify-between">
            <span>Jatah cuti</span>
            <span>{totalCuti - (pegawai?._count.disetujui ?? 0)} kali</span>
          </div>

          <div className="">
            <Slider
              defaultValue={[pegawai?._count.disetujui ?? 0]}
              max={12}
              step={1}
              disabled
              className="**:[[role=slider]]:hidden bg-gray-200 rounded-full"
            />

            <span className="text-xs text-gray-500">33% telah digunakan</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InformasiCuti;

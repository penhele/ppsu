import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPegawaiByUserId } from "@/lib/data/pegawai";
import { auth } from "@/auth";
import { capitalizeWords, formatDate } from "@/lib/utils";
import StatusLabel from "@/components/status-label";

const AktivitasTerbaru = async () => {
  const session = await auth();
  const pegawai = await getPegawaiByUserId(session?.user.id ?? "");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
        <CardDescription>Riwayat aktivitas cuti Anda</CardDescription>
      </CardHeader>

      <CardContent>
        {pegawai?.cuti.length !== 0 ? (
          <div className="flex flex-col gap-2">
            {pegawai?.cuti
              .map((item) => (
                <div
                  key={item.id_cuti}
                  className="flex justify-between items-center bg-gray-50 p-2 rounded-lg transition hover:bg-gray-100"
                >
                  <div className="">
                    <h1 className="text-base">
                      Anda mengajukan cuti {capitalizeWords(item.tipe_cuti)}
                    </h1>
                    <span className="text-xs text-gray-500">
                      Tanggal pengajuan: {formatDate(item.created_at)}
                    </span>
                  </div>

                  <StatusLabel value={item.status} />
                </div>
              ))
              .reverse()}
          </div>
        ) : (
          <div className="h-24 flex items-center justify-center text-gray-500">
            Tidak ada riwayat cuti.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AktivitasTerbaru;

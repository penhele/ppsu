import { getCutiByStatus } from "@/lib/data";
import Tableheader from "@/components/table-header";
import { CutiStatus } from "@prisma/client";
import StatusLabel from "@/components/status-label";
import { formatDate, getDurationDays } from "@/lib/utils";

const Permohonan = async () => {
  const cuti = await getCutiByStatus({ status: CutiStatus.MENUNGGU });
  if (!cuti) return null;

  return (
    <div className="flex flex-col gap-4 col-span-2 border p-4 bg-white rounded-xl">
      <Tableheader
        title="Permohonan Terbaru"
        description="Permohonan cuti yang menunggu persetujuan"
      />

      <div className="col-span-2 gap-3 flex flex-col">
        {cuti.map((item) => (
          <div
            key={item.id_cuti}
            className="grid grid-cols-4 items-center p-4 border rounded-xl"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-sm">{item.Pegawai?.nama}</span>
              <span className="text-xs truncate">{item.alasan}</span>
            </div>

            <div className="flex flex-col font-medium items-center">
              <span className="text-sm flex">
                {formatDate(item.tanggal_mulai)}
              </span>
              <span className="text-xs text-gray-500">
                s.d. {formatDate(item.tanggal_selesai)}
              </span>
            </div>

            <span className="text-sm flex justify-center">
              {getDurationDays(item.tanggal_mulai, item.tanggal_selesai)} hari
            </span>

            <div className="flex justify-end">
              <StatusLabel value={item.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Permohonan;

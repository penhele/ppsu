export const dynamic = "force-dynamic";

import { getCutiByStatus } from "@/lib/data";
import AcceptButton from "@/components/buttons/accept-button";
import RejectButton from "@/components/buttons/reject-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CutiStatus } from "@prisma/client";
import { formatDate, getDurationDays } from "@/lib/utils";
import StatusLabel from "@/components/status-label";
import Tableheader from "@/components/table-header";
import { Clock } from "lucide-react";

const TablePersetujuanCuti = async () => {
  const menungguStatus = await getCutiByStatus({
    status: CutiStatus.MENUNGGU,
  });
  if (!menungguStatus) return null;

  return (
    <div className="flex flex-col gap-3 bg-white p-4 border rounded-xl">
      <Tableheader
        title="Pengajuan Menunggu Persetujuan"
        Icon={Clock}
        description={`${menungguStatus.length} pengajuan cuti menunggu persetujuan`}
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pegawai</TableHead>
            <TableHead>Jenis Pekerjaan</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Durasi</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Tanggal Pengajuan</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menungguStatus.map((item) => (
            <TableRow key={item.id_cuti}>
              <TableCell>{item.Pegawai?.nama}</TableCell>
              <TableCell>{item.Pegawai?.jenis_pekerjaan}</TableCell>
              <TableCell>
                <div className="flex flex-col font-medium">
                  <span>{formatDate(item.tanggal_mulai)}</span>
                  <span className="text-xs text-gray-500">
                    s.d. {formatDate(item.tanggal_selesai)}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                {getDurationDays(item.tanggal_mulai, item.tanggal_selesai)} hari
              </TableCell>
              <TableCell>
                <StatusLabel value={item.status} />
              </TableCell>
              <TableCell>{formatDate(item.created_at)}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <AcceptButton id={item.id_cuti} />
                  <RejectButton id={item.id_cuti} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TablePersetujuanCuti;

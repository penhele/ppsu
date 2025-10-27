import { getCutiByStatus } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, getDurationDays } from "@/lib/utils";
import SearchBar from "@/components/filters/search-bar";
import StatusSelect from "@/components/filters/status-select";
import { ViewButton } from "@/components/buttons/view-button";
import { CutiStatus } from "@prisma/client";
import StatusValue from "@/components/status-label";

const TableRiwayatCuti = async () => {
  const cuti = await getCutiByStatus({
    status: [CutiStatus.DISETUJUI, CutiStatus.DITOLAK],
  });

  return (
    <div className="border p-4 rounded-xl flex flex-col gap-3 bg-white">
      <div className="flex justify-between">
        <h1 className="font-medium text-lg">Riwayat Cuti</h1>

        <div className="flex gap-3">
          <SearchBar />

          <StatusSelect />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>
            <TableHead>Jenis Pekerjaan</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Durasi</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Tanggal Pengajuan</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cuti.map((item) => (
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
                <StatusValue value={item.status} />
              </TableCell>
              <TableCell>{formatDate(item.created_at.toString())}</TableCell>
              <TableCell>
                <ViewButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableRiwayatCuti;

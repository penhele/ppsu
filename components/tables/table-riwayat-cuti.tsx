import { getCutiByStatus } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  formatDate,
  getDurationDays,
  getTextWithoutUnderscore,
} from "@/lib/utils";
import SearchBar from "@/components/filters/search-bar";
import StatusSelect from "@/components/filters/status-select";
import { ViewButton } from "@/components/buttons/view-button";
import { CutiStatus } from "@prisma/client";
import StatusValue from "@/components/status-label";
import Tableheader from "@/components/table-header";

const TableRiwayatCuti = async () => {
  const cuti = await getCutiByStatus({
    status: [CutiStatus.DISETUJUI, CutiStatus.DITOLAK],
  });

  return (
    <div className="border p-4 rounded-xl flex flex-col gap-3 bg-white">
      <div className="flex justify-between">
        <Tableheader
          title="Riwayat Cuti"
          description="Pengajuan cuti yang telah diproses"
        />
        <div className="flex gap-3">
          <SearchBar />

          <StatusSelect />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap">Nama</TableHead>
            <TableHead className="whitespace-nowrap">Jenis Pekerjaan</TableHead>
            <TableHead className="whitespace-nowrap">Tanggal</TableHead>
            <TableHead className="whitespace-nowrap">Durasi</TableHead>
            <TableHead className="whitespace-nowrap">Status</TableHead>
            <TableHead className="whitespace-nowrap">
              Tanggal Pengajuan
            </TableHead>
            <TableHead className="whitespace-nowrap">Tanggal Respon</TableHead>
            <TableHead className="whitespace-nowrap">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cuti.map((item) => (
            <TableRow key={item.id_cuti}>
              <TableCell className="whitespace-nowrap">
                {item.Pegawai?.nama}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {getTextWithoutUnderscore(item.Pegawai?.jenis_pekerjaan ?? "")}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                <div className="flex flex-col font-medium">
                  <span>{formatDate(item.tanggal_mulai)}</span>
                  <span className="text-xs text-gray-500">
                    s.d. {formatDate(item.tanggal_selesai)}
                  </span>
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {getDurationDays(item.tanggal_mulai, item.tanggal_selesai)} hari
              </TableCell>
              <TableCell className="whitespace-nowrap">
                <StatusValue value={item.status} />
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {formatDate(item.created_at)}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {formatDate(item.updated_at)}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                <ViewButton id={item.id_cuti} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableRiwayatCuti;

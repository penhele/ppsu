import { getCuti } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const TableRiwayatCuti = async () => {
  const cuti = await getCuti();
  if (!cuti) return null;

  return (
    <div className="border p-4 rounded-xl flex flex-col gap-3">
      <h1 className="font-medium text-lg">Riwayat Cuti</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>
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
              <TableCell>{item.tanggal_mulai}</TableCell>
              <TableCell>1 hari</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.created_at.toString()}</TableCell>
              <TableCell>...</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableRiwayatCuti;

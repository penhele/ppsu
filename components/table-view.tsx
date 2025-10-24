import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserPlus } from "lucide-react";
import { getPegawai } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import SearchBar from "./search-bar";
import { DeleteButton } from "./button";

const TableView = async () => {
  const pegawai = await getPegawai();
  if (!pegawai) return <p>kosong</p>;

  return (
    <div className="border p-4 rounded-xl flex flex-col gap-3 w-full">
      <div className="flex justify-between">
        <div className="">
          <h1 className="font-medium text-lg">Daftar Pegawai</h1>
          <span className="text-sm text-gray-400">
            Total {pegawai.length} pegawai terdaftar
          </span>
        </div>

        <div className="flex gap-3">
          <SearchBar />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Semua Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="semua-status">Semua Status</SelectItem>
                <SelectItem value="aktif">Aktif</SelectItem>
                <SelectItem value="sedang-cuti">Sedang Cuti</SelectItem>
                <SelectItem value="tidak-aktif">Tidak Aktif</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button className="bg-orange-400 hover:bg-orange-500">
            <Link
              href={"/data-pegawai/create"}
              className="flex justify-between items-center gap-2"
            >
              <UserPlus />
              <span>Tambah Pegawai</span>
            </Link>
          </Button>
        </div>
      </div>

      <Table className="max-w-screen">
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap">Nama</TableHead>
            <TableHead className="whitespace-nowrap">Tempat Lahir</TableHead>
            <TableHead className="whitespace-nowrap">Tanggal Lahir</TableHead>
            <TableHead className="whitespace-nowrap">No. Telepon</TableHead>
            <TableHead className="whitespace-nowrap">No. KTP</TableHead>
            <TableHead className="whitespace-nowrap">NPWP</TableHead>
            <TableHead className="whitespace-nowrap">No. Rekening</TableHead>
            <TableHead className="whitespace-nowrap">Bank DKI Cabang</TableHead>
            <TableHead className="whitespace-nowrap">Pendidikan</TableHead>
            <TableHead className="whitespace-nowrap">Jenis Pekerjaan</TableHead>
            <TableHead className="whitespace-nowrap">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pegawai.map((item) => (
            <TableRow key={item.id_pegawai}>
              <TableCell className="whitespace-nowrap">{item.nama}</TableCell>
              <TableCell className="whitespace-nowrap">
                {item.tempat_lahir}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {formatDate(item.tanggal_lahir)}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {item.no_telepon}
              </TableCell>
              <TableCell className="whitespace-nowrap">{item.no_ktp}</TableCell>
              <TableCell className="whitespace-nowrap">{item.npwp}</TableCell>
              <TableCell className="whitespace-nowrap">
                {item.no_rekening}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {item.bank_dki_cabang}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {item.pendidikan}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {item.jenis_pekerjaan}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                <DeleteButton id={item.id_pegawai} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;

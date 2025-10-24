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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { SearchIcon, UserPlus } from "lucide-react";
import { getPegawai } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

const TableView = async () => {
  const pegawai = await getPegawai();

  return (
    <div className="border p-4 rounded-xl flex flex-col gap-3 w-full overflow-x-auto">
      <div className="flex justify-between">
        <div className="">
          <h1 className="font-medium text-lg">Daftar Pegawai</h1>
          <span className="text-sm text-gray-400">
            Total {pegawai.length} pegawai terdaftar
          </span>
        </div>

        <div className="flex gap-3">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>

          <Select>
            <SelectTrigger className="w-40">
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
              href={"/data-pegawai/add"}
              className="flex justify-between items-center gap-2"
            >
              <UserPlus />
              <span>Tambah Pegawai</span>
            </Link>
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>
            <TableHead>Tempat Lahir</TableHead>
            <TableHead>Tanggal Lahir</TableHead>
            <TableHead>No. Telepon</TableHead>
            {/* <TableHead>No. KTP</TableHead>
            <TableHead>NPWP</TableHead>
            <TableHead>No. Rekening</TableHead>
            <TableHead>Bank DKI Cabang</TableHead>
            <TableHead>Pendidikan</TableHead>
            <TableHead>Jenis Pekerjaan</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {pegawai.map((item) => (
            <TableRow key={item.id_pegawai}>
              <TableCell>{item.nama}</TableCell>
              <TableCell>{item.tempat_lahir}</TableCell>
              <TableCell>{formatDate(item.tanggal_lahir)}</TableCell>
              <TableCell>{item.no_telepon}</TableCell>
              {/* <TableCell>{item.no_ktp}</TableCell>
              <TableCell>{item.npwp}</TableCell>
              <TableCell>{item.no_rekening}</TableCell>
              <TableCell>{item.bank_dki_cabang}</TableCell>
              <TableCell>{item.pendidikan}</TableCell>
              <TableCell>{item.jenis_pekerjaan}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;

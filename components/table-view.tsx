import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteButton } from "@/components/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { SearchIcon } from "lucide-react";

const TableView = () => {
  const pegawaiList = [
    {
      nip: "EMP001",
      nama: "John Doe",
      telepon: "081234567890",
      posisi: "Petugas Lapangan",
      status: "Aktif",
      tanggalBergabung: "2022-01-15",
    },
    {
      nip: "EMP002",
      nama: "Jane Smith",
      telepon: "082198765432",
      posisi: "Koordinator",
      status: "Aktif",
      tanggalBergabung: "2021-09-10",
    },
    {
      nip: "EMP003",
      nama: "Rudi Hartono",
      telepon: "087712345678",
      posisi: "Petugas Lapangan",
      status: "Cuti",
      tanggalBergabung: "2023-03-05",
    },
    {
      nip: "EMP004",
      nama: "Sinta Dewi",
      telepon: "085634578912",
      posisi: "Administrasi",
      status: "Aktif",
      tanggalBergabung: "2020-11-20",
    },
    {
      nip: "EMP005",
      nama: "Andi Saputra",
      telepon: "089876543210",
      posisi: "Petugas Lapangan",
      status: "Cuti",
      tanggalBergabung: "2019-07-02",
    },
  ];

  return (
    <div className="border p-4 rounded-xl flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="">
          <h1 className="font-medium text-lg">Daftar Pegawai</h1>
          <span className="text-sm text-gray-400">
            Total {pegawaiList.length} pegawai terdaftar
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
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>NIP</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>No. Telepon</TableHead>
            <TableHead>Posisi</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Tanggal Bergabung</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pegawaiList.map((pegawai, index) => (
            <TableRow key={index}>
              <TableCell>{pegawai.nip}</TableCell>
              <TableCell>{pegawai.nama}</TableCell>
              <TableCell>{pegawai.telepon}</TableCell>
              <TableCell>{pegawai.posisi}</TableCell>
              <TableCell>{pegawai.status}</TableCell>
              <TableCell>{pegawai.tanggalBergabung}</TableCell>
              <TableCell>
                <DeleteButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserPlus } from "lucide-react";
import { getPegawai } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatDate, getTextWithoutUnderscore } from "@/lib/utils";
import SearchBar from "@/components/filters/search-bar";
import StatusSelect from "@/components/filters/status-select";
import { UpdateButton } from "@/components/buttons/update-button";
import { DeleteButton } from "@/components/buttons/delete-button";
import Tableheader from "@/components/table-header";
import StatusLabel from "@/components/status-label";
import { Slider } from "@/components/ui/slider";

const TableView = async () => {
  const pegawai = await getPegawai();
  if (!pegawai) return <p>kosong</p>;

  return (
    <div className="border p-4 rounded-xl flex flex-col gap-3 w-full bg-white">
      <div className="flex justify-between">
        <Tableheader
          title="Daftar Pegawai"
          description={`Total ${pegawai.length} pegawai terdaftar`}
        />

        <div className="flex gap-3">
          <SearchBar />

          <StatusSelect />

          <Button className="bg-primary hover:bg-orange-500">
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
            <TableHead className="whitespace-nowrap">Tanggal Lahir</TableHead>
            <TableHead className="whitespace-nowrap">No. Telepon</TableHead>
            <TableHead className="whitespace-nowrap">Jenis Pekerjaan</TableHead>
            <TableHead className="whitespace-nowrap">Status</TableHead>
            <TableHead className="whitespace-nowrap">Jatah Cuti</TableHead>
            <TableHead className="whitespace-nowrap">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pegawai.map((item) => (
            <TableRow key={item.id_pegawai}>
              <TableCell className="whitespace-nowrap">{item.nama}</TableCell>
              <TableCell className="whitespace-nowrap">
                {formatDate(item.tanggal_lahir)}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {item.no_telepon}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                {getTextWithoutUnderscore(item.jenis_pekerjaan)}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                <StatusLabel value={getTextWithoutUnderscore(item.status)} />
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500">
                    Terpakai {item._count.cuti}/12
                  </span>
                  <Slider
                    defaultValue={[item._count.cuti]}
                    max={12}
                    step={1}
                    className="[&_[role=slider]]:hidden bg-gray-200 rounded-full"
                  />
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap">
                <div className="flex gap-1">
                  <UpdateButton id={item.id_pegawai} />
                  <DeleteButton id={item.id_pegawai} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;

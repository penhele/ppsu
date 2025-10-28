import Tableheader from "./table-header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const CutiTerbanyak = () => {
  return (
    <div className="flex flex-col gap-4 border p-4 bg-white rounded-xl">
      <Tableheader title="Top Cuti" description="Cuti terbanyak pegawai PPSU" />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>
            <TableHead>Total Cuti</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Stephen Helenus</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Stephen Helenus</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Stephen Helenus</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Stephen Helenus</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Stephen Helenus</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
        </TableBody>
        <TableCaption>Total Cuti Tahun 2025</TableCaption>
      </Table>
    </div>
  );
};

export default CutiTerbanyak;

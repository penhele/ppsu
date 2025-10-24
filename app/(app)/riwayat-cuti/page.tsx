import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const data = [
  {
    nama: "Budi Santoso",
    tipe: "Tahunan",
    durasi: "25–27 Okt 2025",
    status: "APPROVED",
  },
  {
    nama: "Siti Aisyah",
    tipe: "Sakit",
    durasi: "22 Okt 2025",
    status: "PENDING",
  },
];

export default function RiwayatCutiPage() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Riwayat Cuti</h1>
        <p className="text-sm text-gray-500">
          Pantau semua pengajuan cuti beserta statusnya.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Pengajuan</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <Thead>
              <Tr>
                <Th>Nama</Th>
                <Th>Tipe</Th>
                <Th>Durasi</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row, i) => (
                <Tr key={i}>
                  <Td className="font-medium text-gray-900">{row.nama}</Td>
                  <Td>{row.tipe}</Td>
                  <Td>{row.durasi}</Td>
                  <Td>
                    {row.status === "APPROVED" ? (
                      <Badge color="approved">{row.status}</Badge>
                    ) : row.status === "PENDING" ? (
                      <Badge color="pending">{row.status}</Badge>
                    ) : (
                      <Badge color="rejected">{row.status}</Badge>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

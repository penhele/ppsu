import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, Thead, Tbody, Tr, Th, Td } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const pegawai = [
  {
    nama: "Budi Santoso",
    jabatan: "Petugas Lapangan",
    unit: "PPSU RW 01",
    role: "EMPLOYEE",
  },
  {
    nama: "Siti Aisyah",
    jabatan: "Admin Cuti",
    unit: "Sekretariat",
    role: "ADMIN",
  },
];

export default function DataPegawaiPage() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Data Pegawai</h1>
        <p className="text-sm text-gray-500">
          Daftar seluruh pegawai PPSU beserta unit dan perannya.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Pegawai</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <Thead>
              <Tr>
                <Th>Nama</Th>
                <Th>Jabatan</Th>
                <Th>Unit</Th>
                <Th>Role</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pegawai.map((p, i) => (
                <Tr key={i}>
                  <Td className="font-medium text-gray-900">{p.nama}</Td>
                  <Td>{p.jabatan}</Td>
                  <Td>{p.unit}</Td>
                  <Td>
                    {p.role === "ADMIN" ? (
                      <Badge color="role-admin">ADMIN</Badge>
                    ) : (
                      <Badge color="role-employee">EMPLOYEE</Badge>
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

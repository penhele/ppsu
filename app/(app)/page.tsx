import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Total Pegawai", value: 24 },
  { label: "Cuti Aktif", value: 3 },
  { label: "Menunggu Persetujuan", value: 2 },
  { label: "Tidak Aktif", value: 1 },
];

const pending = [
  {
    nama: "Budi Santoso",
    jenis: "Tahunan",
    tanggal: "25–27 Okt 2025",
    status: "PENDING",
  },
  {
    nama: "Siti Aisyah",
    jenis: "Sakit",
    tanggal: "22 Okt 2025",
    status: "PENDING",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Ringkasan status cuti dan aktivitas pegawai hari ini
        </p>
      </div>

      {/* Cards statistik */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, i) => (
          <Card key={i} className="text-center">
            <CardHeader className="border-b border-gray-100 py-3">
              <CardTitle className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="py-4 text-2xl font-semibold text-gray-900">
              {item.value}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Menunggu Persetujuan */}
      <Card>
        <CardHeader>
          <CardTitle>Menunggu Persetujuan</CardTitle>
          <p className="text-sm text-gray-500">
            {pending.length} pengajuan cuti perlu ditinjau
          </p>
        </CardHeader>
        <CardContent className="divide-y text-sm text-gray-800">
          {pending.map((req, idx) => (
            <div
              key={idx}
              className="py-3 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">{req.nama}</span>
                <span className="text-gray-500">{req.jenis}</span>
                <span className="text-[11px] text-gray-400">{req.tanggal}</span>
              </div>
              <div className="mt-2 md:mt-0 text-[11px] font-medium text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-md px-2 py-1 self-start">
                {req.status}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

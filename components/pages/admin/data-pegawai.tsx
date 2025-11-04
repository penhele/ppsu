import SectionHeader from "@/components/header";
import { PegawaiStatus } from "@prisma/client";
import TableDaftarPegawai from "@/components/tables/table-daftar-pegawai";
import { getPegawai } from "@/lib/data/pegawai";

const DataPegawai = async () => {
  const pegawai = await getPegawai();
  if (!pegawai) return 0;

  const items = [
    { title: "Total Pegawai", total: pegawai.length },
    {
      title: "Aktif",
      total: pegawai.filter((item) => item.status === PegawaiStatus.AKTIF)
        .length,
    },
    {
      title: "Cuti",
      total: pegawai.filter((item) => item.status === PegawaiStatus.CUTI)
        .length,
    },
    {
      title: "Tidak Aktif",
      total: pegawai.filter((item) => item.status === PegawaiStatus.TIDAK_AKTIF)
        .length,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Data Pegawai"
        description="Halaman ini menampilkan daftar lengkap pegawai beserta status keaktifan mereka. Anda dapat memantau jumlah pegawai aktif, cuti, maupun tidak aktif secara real-time."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center py-4 sm:py-8 rounded-xl border bg-white"
          >
            <h2 className="text-sm text-gray-500">{item.title}</h2>
            <span className="text-lg">{item.total}</span>
          </div>
        ))}
      </div>

      <TableDaftarPegawai />
    </div>
  );
};

export default DataPegawai;

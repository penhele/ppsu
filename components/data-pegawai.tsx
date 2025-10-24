import TableView from "@/components/table-view";
import { getPegawai } from "@/lib/data";

const DataPegawai = async () => {
  const pegawai = await getPegawai();
  if (!pegawai) return 0;

  const items = [
    { title: "Total Pegawai", total: pegawai.length },
    { title: "Aktif", total: 16 },
    { title: "Cuti", total: 3 },
    { title: "Tidak Aktif", total: 0 },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <h1 className="font-medium text-xl">Data Pegawai</h1>
        <span className="text-base text-gray-400">
          Kelola informasi dan jatah cuti pegawai
        </span>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center py-8 rounded-xl border"
          >
            <h2 className="text-sm text-gray-500">{item.title}</h2>
            <span className="text-lg">{item.total}</span>
          </div>
        ))}
      </div>

      <TableView />
    </div>
  );
};

export default DataPegawai;

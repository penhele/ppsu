import { getCuti } from "@/lib/data/cuti";
import { getPegawai } from "@/lib/data/pegawai";
import { CutiStatus } from "@prisma/client";

const Overview = async () => {
  const pegawai = await getPegawai();
  const cuti = await getCuti();

  const items = [
    { title: "Total Pegawai", count: pegawai.length },
    {
      title: "Cuti Menunggu",
      count: cuti.filter((item) => item.status === CutiStatus.MENUNGGU).length,
    },
    {
      title: "Cuti Disetujui",
      count: cuti.filter((item) => item.status === CutiStatus.DISETUJUI).length,
    },
    {
      title: "Cuti Ditolak",
      count: cuti.filter((item) => item.status === CutiStatus.DITOLAK).length,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="border p-4 rounded-xl bg-white">
          <h1>{item.title}</h1>
          <span>{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default Overview;

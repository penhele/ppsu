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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      {items.map((item, index) => (
        <div key={index} className="rounded-xl border">
          <div
            className={` bg-gray-200 rounded-t-xl py-2 flex justify-center text-sm`}
          >
            {item.title}
          </div>
          <div className="bg-white flex justify-center py-2 rounded-b-xl text-lg">
            {item.count}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;

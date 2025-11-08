import { Chart } from "@/components/chart";
import Tableheader from "@/components/table-header";

const ChartRiwayatCuti = () => {
  return (
    <div className="flex flex-col gap-4 col-span-3 md:col-span-2 border p-4 bg-white rounded-xl">
      <div className="flex flex-col gap-4">
        <Tableheader title="Riwayat cuti dalam 7 hari kebelakang" />

        <Chart />
      </div>
    </div>
  );
};

export default ChartRiwayatCuti;

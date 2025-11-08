import { getJumlahCutiPerTanggal } from "@/lib/data/statistic";
import { formatDate } from "@/lib/utils";

const Tes = async () => {
  const currentDate = new Date(2025, 10, 16);
  const totalCuti = await getJumlahCutiPerTanggal(currentDate);

  return (
    <div className="flex flex-col">
      <span>{currentDate.toISOString()}</span>
      <span>{formatDate(currentDate)}</span>

      <span>{totalCuti}</span>
    </div>
  );
};

export default Tes;

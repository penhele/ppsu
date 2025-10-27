import clsx from "clsx";
import { LucideIcon } from "lucide-react";

const CutiSummaryCard = async ({
  items,
}: {
  items: {
    title: string;
    total: number | string;
    icon: LucideIcon;
    color: string;
  }[];
}) => {
  const colorMap: Record<string, string> = {
    green: "text-green-700 bg-green-100 border-green-100",
    red: "text-red-700 bg-red-100 border-red-100",
    yellow: "text-yellow-700 bg-yellow-100 border-yellow-100",
    gray: "text-gray-700 bg-gray-100 border-gray-100",
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-xl p-4 flex justify-between items-center bg-white"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-500">{item.title}</h1>
            <span className="text-xl font-semibold">{item.total}</span>
          </div>

          <div className={clsx("p-2 rounded-lg", colorMap[item.color])}>
            <item.icon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CutiSummaryCard;

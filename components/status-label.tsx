import { capitalizeWords, getTextWithoutUnderscore } from "@/lib/utils";
import { CutiStatus, PegawaiStatus } from "@prisma/client";
import clsx from "clsx";

const StatusLabel = ({
  value,
  isFullWidth,
}: {
  value: string;
  isFullWidth?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "font-medium w-fit h-fit py-0.5 px-2 rounded-full text-center",
        {
          "bg-green-100 text-green-800":
            value === CutiStatus.DISETUJUI || value === PegawaiStatus.AKTIF,
          "bg-red-100 text-red-800":
            value === CutiStatus.DITOLAK ||
            value === getTextWithoutUnderscore(PegawaiStatus.TIDAK_AKTIF),
          "bg-yellow-100 text-yellow-800":
            value === CutiStatus.MENUNGGU || value === PegawaiStatus.CUTI,
        },
        { "w-full": isFullWidth },
      )}
    >
      <span className="text-sm">{capitalizeWords(value)}</span>
    </div>
  );
};

export default StatusLabel;

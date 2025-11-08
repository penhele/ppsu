import { CircleX } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DetailCutiDialog from "@/components/forms/detail-cuti-dialog";
import { CutiStatus } from "@prisma/client";
import { CutiProps } from "@/types/cuti";

export const RejectButton = ({ data }: { data: CutiProps }) => {
  return (
    <Dialog>
      <DialogTrigger className="border rounded-md flex items-center justify-center text-red-700 hover:text-red-800 border-red-200 hover:border-red-500 w-8 h-8">
        <CircleX className="size-4" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Pengajuan Cuti</DialogTitle>
          <DialogDescription>
            detail pengajuan cuti dari {data.Pegawai?.nama}
          </DialogDescription>
        </DialogHeader>

        <DetailCutiDialog data={data} value={CutiStatus.DITOLAK} />
      </DialogContent>
    </Dialog>
  );
};
export default RejectButton;

import { CircleCheck } from "lucide-react";
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

export const AcceptButton = ({ data }: { data: CutiProps }) => {
  return (
    <Dialog>
      <DialogTrigger className="border rounded-md flex items-center justify-center text-green-700 hover:text-green-800 border-green-200 hover:border-green-500 w-8 h-8">
        <CircleCheck className="size-4" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Pengajuan Cuti</DialogTitle>
          <DialogDescription>
            detail pengajuan cuti dari {data.Pegawai?.nama}
          </DialogDescription>
        </DialogHeader>

        <DetailCutiDialog data={data} value={CutiStatus.DISETUJUI} />
      </DialogContent>
    </Dialog>
  );
};
export default AcceptButton;

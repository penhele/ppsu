import { CircleX } from "lucide-react";
import { getCutiById } from "@/lib/data";
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

export const RejectButton = async ({ id }: { id: string }) => {
  const cuti = await getCutiById({ id });
  if (!cuti) return null;

  return (
    <Dialog>
      <DialogTrigger className="border rounded-md flex items-center justify-center text-red-700 hover:text-red-800 border-red-200 hover:border-red-500 w-8 h-8">
        <CircleX className="size-4" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Pengajuan Cuti</DialogTitle>
          <DialogDescription>
            detail pengajuan cuti dari {cuti.Pegawai?.nama}
          </DialogDescription>
        </DialogHeader>

        <DetailCutiDialog id={id} value={CutiStatus.DITOLAK} />
      </DialogContent>
    </Dialog>
  );
};
export default RejectButton;

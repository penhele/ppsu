import { CircleCheck } from "lucide-react";
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

export const AcceptButton = async ({ id }: { id: string }) => {
  const cuti = await getCutiById({ id });
  if (!cuti) return null;

  return (
    <Dialog>
      <DialogTrigger className="border rounded-md flex items-center justify-center text-green-700 hover:text-green-800 border-green-200 hover:border-green-500 w-8 h-8">
        <CircleCheck className="size-4" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Pengajuan Cuti</DialogTitle>
          <DialogDescription>
            detail pengajuan cuti dari {cuti.Pegawai?.nama}
          </DialogDescription>
        </DialogHeader>

        <DetailCutiDialog id={id} value={CutiStatus.DISETUJUI} />
      </DialogContent>
    </Dialog>
  );
};
export default AcceptButton;

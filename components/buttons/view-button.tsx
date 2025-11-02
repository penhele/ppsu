import { Eye } from "lucide-react";
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
import { getCutiById } from "@/lib/data/cuti";

export const ViewButton = async ({ id }: { id: string }) => {
  const cuti = await getCutiById(id);
  if (!cuti) return null;

  return (
    <Dialog>
      <DialogTrigger className="border rounded-md w-8 h-8 flex items-center justify-center border-gray-200 hover:border-gray-500">
        <Eye className="size-4" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Pengajuan Cuti</DialogTitle>
          <DialogDescription>
            Detail pengajuan cuti dari {cuti.Pegawai?.nama}
          </DialogDescription>
        </DialogHeader>

        <DetailCutiDialog id={id} value={CutiStatus.MENUNGGU} />
      </DialogContent>
    </Dialog>
  );
};

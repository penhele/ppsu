import { Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import DetailCutiDialog from "../forms/detail-cuti-dialog";
import { getCutiById } from "@/lib/data";
import { CutiStatus } from "@prisma/client";

export const ViewButton = async ({ id }: { id: string }) => {
  const cuti = await getCutiById({ id });
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

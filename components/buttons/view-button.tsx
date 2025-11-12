import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { CutiProps } from "@/types/cuti";
import { CutiStatus } from "@prisma/client";
import { Eye } from "lucide-react";
import DetailCutiDialog from "@/components/forms/detail-cuti-dialog";

const ViewButton = ({ data }: { data: CutiProps }) => {
  return (
    <Dialog>
      <DialogTrigger className="border rounded-md w-8 h-8 flex items-center justify-center border-gray-200 hover:border-gray-500">
        <Eye className="size-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Pengajuan Cuti</DialogTitle>
          <DialogDescription>
            Detail pengajuan cuti dari {data.Pegawai?.nama}
          </DialogDescription>
        </DialogHeader>

        <DetailCutiDialog data={data} value={CutiStatus.MENUNGGU} />
      </DialogContent>
    </Dialog>
  );
};

export default ViewButton;

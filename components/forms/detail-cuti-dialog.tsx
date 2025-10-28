import { getCutiById } from "@/lib/data";
import { InputText, InputTextarea } from "../input";
import { formatDate, getDurationDays, getSafeCatatan } from "@/lib/utils";
import DetailCutiDialogForm from "./detail-cuti-dialog-form";
import { Separator } from "../ui/separator";
import { CutiStatus } from "@prisma/client";

const DetailCutiDialog = async ({
  id,
  value,
}: {
  id: string;
  value: CutiStatus;
}) => {
  const cuti = await getCutiById({ id });
  if (!cuti) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <InputText
          title="Nama"
          name="nama"
          defaultValue={cuti.Pegawai?.nama}
          readOnly
        />

        <div className="grid grid-cols-5 gap-4">
          <div className="grid grid-cols-2 col-span-4 gap-4">
            <InputText
              title="Tanggal Mulai"
              name="tanggal_mulai"
              defaultValue={cuti.tanggal_mulai}
              readOnly
            />
            <InputText
              title="Tanggal Selesai"
              name="tanggal_selesai"
              defaultValue={cuti.tanggal_selesai}
              readOnly
            />
          </div>

          <InputText
            title="Durasi"
            name="durasi"
            defaultValue={getDurationDays(
              cuti.tanggal_mulai,
              cuti.tanggal_selesai,
            ).toString()}
            readOnly
          />
        </div>

        <InputText
          title="Tanggal Pengajuan"
          name="tanggal_pengajuan"
          defaultValue={formatDate(cuti.created_at.toString())}
          readOnly
        />

        <InputTextarea
          title="Alasan/Keterangan"
          name="alasan"
          defaultValue={cuti.alasan ?? "Tidak ada alasan"}
          readOnly
        />

        {cuti.status !== CutiStatus.MENUNGGU ? (
          <InputTextarea
            title="Catatan"
            name="catatan"
            defaultValue={getSafeCatatan(cuti.catatan)}
            readOnly
          />
        ) : null}
      </div>

      {cuti.status === CutiStatus.MENUNGGU ? (
        <>
          <Separator />

          <DetailCutiDialogForm cuti={cuti} value={value} />
        </>
      ) : null}
    </div>
  );
};

export default DetailCutiDialog;

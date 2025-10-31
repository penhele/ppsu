import { getCutiById } from "@/lib/data";
import { formatDate, getDurationDays, getTextTrim } from "@/lib/utils";
import DetailCutiDialogForm from "@/components/forms/detail-cuti-dialog-form";
import { Separator } from "@/components/ui/separator";
import { CutiStatus } from "@prisma/client";
import InputDisplayed from "@/components/inputs/input-displayed";

const DetailCutiDialog = async ({
  id,
  value,
}: {
  id: string;
  value: CutiStatus;
}) => {
  const cuti = await getCutiById(id);
  if (!cuti) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="bg-white px-4 py-2 rounded-xl flex flex-col gap-6">
          <InputDisplayed title="Nama" value={cuti.Pegawai?.nama} />

          <div className="grid grid-cols-5 gap-4">
            <div className="grid grid-cols-2 col-span-4 gap-4">
              <InputDisplayed
                title="Tanggal Mulai"
                value={formatDate(cuti.tanggal_mulai)}
              />
              <InputDisplayed
                title="Tanggal Selesai"
                value={formatDate(cuti.tanggal_selesai)}
              />
            </div>

            <InputDisplayed
              title="Durasi"
              value={getDurationDays(
                cuti.tanggal_mulai,
                cuti.tanggal_selesai,
              ).toString()}
            />
          </div>
        </div>

        <InputDisplayed
          title="Tanggal Pegajuan"
          value={formatDate(cuti.created_at)}
        />

        <InputDisplayed
          title="Alasan/Keterangan"
          value={getTextTrim(cuti.alasan, "Tidak ada alasan/keterangan")}
        />

        {cuti.status !== CutiStatus.MENUNGGU ? (
          <InputDisplayed
            title="Catatan"
            value={getTextTrim(cuti.catatan, "Tidak ada catatan")}
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

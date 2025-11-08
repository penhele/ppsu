"use client"; // PENTING

import dynamic from "next/dynamic";
const DetailCutiDialogForm = dynamic(
  () => import("@/components/forms/detail-cuti-dialog-form"),
  { ssr: false },
);

import { formatDate, getDurationDays, getTextTrim } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { CutiStatus } from "@prisma/client";
import InputDisplayed from "@/components/inputs/input-displayed";
import StatusLabel from "@/components/status-label";
import { CutiProps } from "@/types/cuti";

const DetailCutiDialog = ({
  data,
  value,
}: {
  data: CutiProps;
  value: CutiStatus;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="bg-white px-4 py-2 rounded-xl flex flex-col gap-6">
          <InputDisplayed title="Nama" value={data.Pegawai?.nama} />

          <div className="grid grid-cols-5 gap-4">
            <div className="grid grid-cols-2 col-span-4 gap-4">
              <InputDisplayed
                title="Tanggal Mulai"
                value={formatDate(data.tanggal_mulai)}
              />
              <InputDisplayed
                title="Tanggal Selesai"
                value={formatDate(data.tanggal_selesai)}
              />
            </div>

            <InputDisplayed
              title="Durasi"
              value={getDurationDays(
                data.tanggal_mulai,
                data.tanggal_selesai,
              ).toString()}
            />
          </div>
        </div>

        <InputDisplayed
          title="Tanggal Pegajuan"
          value={formatDate(data.created_at)}
        />

        <InputDisplayed
          title="Alasan/Keterangan"
          value={getTextTrim(data.alasan, "Tidak ada alasan/keterangan")}
        />

        {data.status !== CutiStatus.MENUNGGU && (
          <>
            <InputDisplayed
              title="Catatan"
              value={getTextTrim(data.catatan, "Tidak ada catatan")}
            />

            <StatusLabel value={data.status} isFullWidth />
          </>
        )}
      </div>

      {data.status === CutiStatus.MENUNGGU && (
        <>
          <Separator />

          <DetailCutiDialogForm cuti={data} value={value} />
        </>
      )}
    </div>
  );
};

export default DetailCutiDialog;

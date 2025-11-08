"use client";

import { act, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { CutiProps } from "@/types/cuti";
import { CutiStatus } from "@prisma/client";
import clsx from "clsx";
import { Spinner } from "@/components/ui/spinner";
import { useForm } from "react-hook-form";
import { CutiSchema, CutiType } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputTextareaController from "@/components/inputs/input-textarea-controller";
import { approveCutiById, rejectCutiById } from "@/lib/action/cuti";
import { toast } from "sonner";

const DetailCutiDialogForm = ({
  cuti,
  value,
}: {
  cuti: CutiProps;
  value: CutiStatus;
}) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<CutiType>({
    resolver: zodResolver(CutiSchema),
    defaultValues: {
      tipe_cuti: cuti.tipe_cuti,
      tanggal_mulai: cuti.tanggal_mulai.toDateString(),
      tanggal_selesai: cuti.tanggal_selesai.toDateString(),
      alasan: cuti.alasan ?? "Tidak ada alasan/keterangan",
      catatan: "",
    },
  });

  function onSubmit(data: CutiType) {
    console.log("submit data", data);

    startTransition(async () => {
      try {
        const action =
          value === CutiStatus.DISETUJUI
            ? approveCutiById(cuti.id_cuti, data)
            : rejectCutiById(cuti.id_cuti, data);

        const result = await action;

        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <InputTextareaController
          title={`Pesan untuk ${cuti.Pegawai?.nama} (opsional)`}
          name="catatan"
          control={form.control}
          placeholder="Masukkan catatan jika diperlukan"
        />

        <Button
          className={clsx("bg-primary hover:bg-orange-500", {
            "cursor-progress": isPending,
          })}
        >
          {value === CutiStatus.DISETUJUI ? (
            isPending ? (
              <div className="flex gap-2 items-center">
                <Spinner />
                <span>Menyetujui...</span>
              </div>
            ) : (
              "Setujui Cuti"
            )
          ) : isPending ? (
            <div className="flex gap-2 items-center">
              <Spinner />
              <span>Menolak...</span>
            </div>
          ) : (
            "Tolak Cuti"
          )}
        </Button>
      </div>
    </form>
  );
};

export default DetailCutiDialogForm;

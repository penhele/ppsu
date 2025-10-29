"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { CutiProps } from "@/types/cuti";
import { CutiStatus } from "@prisma/client";
import { approveCutiById, rejectCutiById } from "@/lib/action";
import clsx from "clsx";
import InputTextarea from "@/components/inputs/input-textarea";

const DetailCutiDialogForm = ({
  cuti,
  value,
}: {
  cuti: CutiProps;
  value: CutiStatus;
}) => {
  const actionFn =
    value === CutiStatus.DISETUJUI
      ? approveCutiById.bind(null, cuti.id_cuti)
      : rejectCutiById.bind(null, cuti.id_cuti);

  const [state, formAction, isPending] = useActionState(actionFn, null);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-2">
        <InputTextarea
          title="Catatan Review (Opsional)"
          name="catatan"
          placeholder="Masukkan catatan jika diperlukan"
        />

        <Button
          className={clsx("bg-primary hover:bg-orange-500", {
            "cursor-progress": isPending,
          })}
        >
          {value === CutiStatus.DISETUJUI
            ? isPending
              ? "Menyetujui Cuti..."
              : "Setujui Cuti"
            : isPending
              ? "Menolak Cuti..."
              : "Tolak Cuti"}
        </Button>
      </div>
    </form>
  );
};

export default DetailCutiDialogForm;

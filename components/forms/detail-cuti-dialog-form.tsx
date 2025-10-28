"use client";

import { useActionState } from "react";
import { InputTextarea } from "@/components/input";
import { Button } from "@/components/ui/button";
import { updateCutiCatatan } from "@/lib/action";
import { CutiProps } from "@/types/cuti";
import { CutiStatus } from "@prisma/client";

const DetailCutiDialogForm = ({
  cuti,
  value,
}: {
  cuti: CutiProps;
  value: CutiStatus;
}) => {
  const [state, formAction, isPending] = useActionState(
    updateCutiCatatan.bind(null, cuti.id_cuti),
    null,
  );

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-2">
        <InputTextarea
          title="Catatan Review (Opsional)"
          name="catatan"
          placeholder="Masukkan catatan jika diperlukan"
        />

        <Button className="bg-primary hover:bg-orange-500">
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

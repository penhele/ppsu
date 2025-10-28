"use client";

import { useActionState } from "react";
import {
  InputTextarea,
  SelectOption,
  SelectRangeDate,
} from "@/components/input";
import { Button } from "@/components/ui/button";
import { saveCuti } from "@/lib/action";
import clsx from "clsx";

const CreatePengajuanCutiForm = ({
  pegawaiList,
}: {
  pegawaiList: { label: string; value: string }[];
}) => {
  const [state, formAction, isPending] = useActionState(
    saveCuti.bind(null),
    null,
  );

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        <SelectOption
          title="Nama"
          name="nama"
          message={state?.error.id_pegawai}
          options={pegawaiList}
        />

        <SelectOption
          title="Tipe Cuti"
          name="tipe_cuti"
          options={[{ label: "Sakit", value: "sakit" }]}
        />

        <SelectRangeDate
          title="Tanggal Cuti"
          placeholder="Pilih tanggal cuti"
          tanggal_mulai="tanggal_mulai"
          tanggal_selesai="tanggal_selesai"
        />

        <InputTextarea
          title="Alasan"
          name="alasan"
          placeholder="Masukkan alasan Anda"
          message={state?.error.tanggal_mulai || []}
        />

        <Button
          className={clsx("bg-primary hover:bg-orange-500", {
            "cursor-progress": isPending,
          })}
        >
          {isPending ? "Menyimpan..." : "Simpan"}
        </Button>
      </div>
    </form>
  );
};

export default CreatePengajuanCutiForm;

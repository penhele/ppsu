"use client";

import { useActionState } from "react";
import { InputTextarea, SelectDate, SelectOption } from "../input";
import { Button } from "../ui/button";
import { saveCuti } from "@/lib/action";

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

        <div className="grid sm:grid-cols-2 gap-4">
          <SelectDate
            title="Tanggal Mulai"
            name="tanggal_mulai"
            message={state?.error.tanggal_mulai}
          />
          <SelectDate
            title="Tanggal Selesai"
            name="tanggal_selesai"
            message={state?.error.tanggal_selesai}
          />
        </div>

        <InputTextarea
          title="Alasan"
          name="alasan"
          placeholder="Masukkan alasan Anda"
          message={state?.error.tanggal_mulai || []}
        />

        <Button className="bg-orange-400 hover:bg-orange-500">
          {isPending ? "Menyimpan..." : "Simpan"}
        </Button>
      </div>
    </form>
  );
};

export default CreatePengajuanCutiForm;

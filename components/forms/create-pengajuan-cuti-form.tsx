"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { saveCuti } from "@/lib/action";
import clsx from "clsx";
import InputOption from "@/components/inputs/input-option";
import InputRangeDate from "@/components/inputs/input-range-date";
import InputTextarea from "@/components/inputs/input-textarea";
import { capitalizeWords } from "@/lib/utils";

const CreatePengajuanCutiForm = ({
  pegawaiList,
}: {
  pegawaiList: { label: string; value: string }[];
}) => {
  const [tipeCutiList, setTipeCutiList] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchEnums = async () => {
      const tipeCutiRes = await fetch("/api/enum/tipe-cuti");
      const tipeCutiData: string[] = await tipeCutiRes.json();

      const formattedTipeCutiData = tipeCutiData.map((item) => ({
        label: capitalizeWords(item),
        value: item,
      }));

      setTipeCutiList(formattedTipeCutiData);
    };

    fetchEnums();
  }, []);

  const [state, formAction, isPending] = useActionState(
    saveCuti.bind(null),
    null,
  );

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        <InputOption
          title="Nama"
          name="nama"
          message={state?.error.id_pegawai}
          options={pegawaiList}
        />

        <InputOption
          title="Tipe Cuti"
          name="tipe_cuti"
          message={state?.error.tipe_cuti}
          options={tipeCutiList}
        />

        <InputRangeDate
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

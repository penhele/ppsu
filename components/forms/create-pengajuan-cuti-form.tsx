"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { CutiSchema, CutiType } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputTextareaController from "@/components/inputs/input-textarea-controller";
import { toast } from "sonner";
import InputOptionController from "@/components/inputs/input-option-controller";
import { TipeCuti } from "@prisma/client";
import { capitalizeWords } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import InputRangeDateController from "@/components/inputs/input-range-date-controller";
import InputText from "@/components/inputs/input-text";
import { saveCuti } from "@/lib/action/cuti";

const CreatePengajuanCutiForm = ({ session }: { session: any }) => {
  const [isPending, startTransition] = useTransition();

  const [tipeCutiList, setTipeCutiList] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchEnums = async () => {
      const tipeCutiData = Object.values(TipeCuti).map((item) => ({
        label: capitalizeWords(item),
        value: item,
      }));

      setTipeCutiList(tipeCutiData);
    };

    fetchEnums();
  }, []);

  const form = useForm<CutiType>({
    resolver: zodResolver(CutiSchema),
    defaultValues: {
      tipe_cuti: undefined,
      tanggal_mulai: "",
      tanggal_selesai: "",
      alasan: "",
    },
  });

  function onSubmit(data: CutiType) {
    console.log(data);

    startTransition(async () => {
      try {
        await saveCuti(data);
        toast.success("Pengajuan cuti berhasil diajukan");
      } catch (error) {
        toast.error("Terjadi kesalahan saat mengajukan cuti");
      }
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <InputText
        title="Email"
        name="email"
        defaultValue={session.user.email ?? ""}
        readOnly
      />

      <InputOptionController
        title="Tipe Cuti"
        name="tipe_cuti"
        control={form.control}
        options={tipeCutiList}
      />

      <InputRangeDateController
        title="Tanggal Cuti"
        control={form.control}
        tanggal_mulai="tanggal_mulai"
        tanggal_selesai="tanggal_selesai"
      />

      <InputTextareaController
        title="Alasan"
        name="alasan"
        control={form.control}
      />

      <Button>{isPending ? "Mengajukan..." : "Ajukan Cuti"}</Button>
    </form>
  );
};

export default CreatePengajuanCutiForm;

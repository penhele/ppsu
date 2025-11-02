"use client";

import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PegawaiSchema, PegawaiType } from "@/lib/zod";
import InputTextController from "@/components/inputs/input-text-controller";
import InputOptionController from "@/components/inputs/input-option-controller";
import InputSingleDateController from "@/components/inputs/input-single-date-controller";
import { getTextWithoutUnderscore } from "@/lib/utils";
import { toast } from "sonner";
import clsx from "clsx";
import { savePegawai } from "@/lib/action/pegawai";

const CreateDaftarPegawaiForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<PegawaiType>({
    resolver: zodResolver(PegawaiSchema),
    defaultValues: {
      nama: "",
      email: "",
      password: "ppsu1234",
      tempat_lahir: "",
      tanggal_lahir: "",
      alamat: "",
      provinsi: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      rt: "",
      rw: "",
      no_telepon: "",
      no_ktp: "",
      npwp: "",
      no_rekening: "",
      bank_dki_cabang: "",
      pendidikan: undefined,
      jenis_pekerjaan: undefined,
    },
  });

  const [pendidikanList, setPendidikanList] = useState<
    { label: string; value: string }[]
  >([]);
  const [jenisPekerjaanList, setJenisPekerjaanList] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchEnums = async () => {
      const pendidikanRes = await fetch("/api/enum/pendidikan");
      const pendidikanData: string[] = await pendidikanRes.json();

      const formattedPendidikanData = pendidikanData.map((item) => ({
        label: item.toUpperCase(),
        value: item,
      }));

      const jenisPekerjaanRes = await fetch("/api/enum/jenis-pekerjaan");
      const jenisPekerjaanData: string[] = await jenisPekerjaanRes.json();

      const formattedJenisPekerjaanData = jenisPekerjaanData.map((item) => ({
        label: getTextWithoutUnderscore(item),
        value: item,
      }));

      setPendidikanList(formattedPendidikanData);
      setJenisPekerjaanList(formattedJenisPekerjaanData);
    };

    fetchEnums();
  }, []);

  function onSubmit(data: PegawaiType) {
    console.log("submit data", data);
    startTransition(async () => {
      try {
        await savePegawai(data);
        toast.success("Data pegawai berhasil disimpan!");
      } catch (error) {
        toast.error("Gagal menyimpan data pegawai.");
      }
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <InputTextController
        name="nama"
        title="Nama"
        control={form.control}
        placeholder="Masukkan nama pegawai"
      />

      <div className="grid grid-cols-2 gap-4">
        <InputTextController
          name="email"
          title="Email"
          control={form.control}
        />
        <InputTextController
          name="password"
          title="Password"
          control={form.control}
          isDisabled
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InputTextController
          name="tempat_lahir"
          title="Tempat Lahir"
          control={form.control}
        />
        <InputSingleDateController
          title="Tanggal Lahir"
          name="tanggal_lahir"
          control={form.control}
        />
      </div>

      <InputTextController
        name="alamat"
        title="Alamat"
        control={form.control}
      />

      <div className="grid grid-cols-5 gap-4">
        <InputTextController
          name="provinsi"
          title="Provinsi"
          control={form.control}
        />
        <InputTextController name="kota" title="Kota" control={form.control} />
        <InputTextController
          name="kecamatan"
          title="Kecamatan"
          control={form.control}
        />
        <InputTextController
          name="kelurahan"
          title="Kelurahan"
          control={form.control}
        />
        <div className="flex gap-4">
          <InputTextController
            title="RT"
            name="rt"
            isNumeric
            control={form.control}
          />
          <InputTextController
            title="RW"
            name="rw"
            isNumeric
            control={form.control}
          />
        </div>
      </div>
      <InputTextController
        title="No. Telepon"
        name="no_telepon"
        isNumeric
        control={form.control}
      />

      <InputTextController
        title="No. KTP"
        name="no_ktp"
        isNumeric
        control={form.control}
      />
      <InputTextController
        title="NPWP"
        name="npwp"
        isNumeric
        control={form.control}
      />

      <div className="grid grid-cols-2 gap-4">
        <InputTextController
          name="no_rekening"
          title="No. Rekening"
          isNumeric
          control={form.control}
        />
        <InputTextController
          name="bank_dki_cabang"
          title="Bank DKI Cabang"
          control={form.control}
        />
      </div>
      <InputOptionController
        name="pendidikan"
        title="Pendidikan"
        control={form.control}
        options={pendidikanList}
      />
      <InputOptionController
        name="jenis_pekerjaan"
        title="Jenis Pekerjaan"
        control={form.control}
        options={jenisPekerjaanList}
      />

      <Button
        className={clsx("", {
          "curp-progress": isPending,
        })}
      >
        {isPending ? "Menyimpan..." : "Simpan"}
      </Button>
    </form>
  );
};

export default CreateDaftarPegawaiForm;

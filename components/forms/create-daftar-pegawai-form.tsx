"use client";

import { InputText, SelectOption } from "@/components/input";
import { savePegawai } from "@/lib/action";
import { useActionState } from "react";
import { Button } from "../ui/button";

const CreateDaftarPegawaiForm = () => {
  const [state, formAction, isPending] = useActionState(
    savePegawai.bind(null),
    null,
  );

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        <InputText
          name="nama"
          title="Nama Lengkap"
          message={state?.error.nama || []}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputText
            name="tempat_lahir"
            title="Tempat Lahir"
            message={state?.error.tempat_lahir || []}
          />
          <InputText
            name="tanggal_lahir"
            title="Tanggal Lahir"
            message={state?.error.tanggal_lahir || []}
          />
        </div>

        <InputText
          name="alamat"
          title="Alamat"
          message={state?.error.alamat || []}
        />

        <div className="grid grid-cols-5 gap-4">
          <InputText
            name="provinsi"
            title="Provinsi"
            message={state?.error.provinsi || []}
          />
          <InputText
            name="kota"
            title="Kota"
            message={state?.error.kota || []}
          />
          <InputText
            name="kecamatan"
            title="Kecamatan"
            message={state?.error.kecamatan || []}
          />
          <InputText
            name="kelurahan"
            title="Kelurahan"
            message={state?.error.kelurahan || []}
          />
          <div className="flex gap-4">
            <InputText
              title="RT"
              name="rt"
              type="number"
              message={state?.error.rt || []}
            />
            <InputText
              title="RW"
              name="rw"
              type="number"
              message={state?.error.rw || []}
            />
          </div>
        </div>

        <InputText
          title="No. Telepon"
          name="no_telepon"
          type="number"
          message={state?.error.no_telepon || []}
        />
        <InputText
          title="No. KTP"
          name="no_ktp"
          type="number"
          message={state?.error.no_ktp || []}
        />
        <InputText
          title="NPWP"
          name="npwp"
          type="number"
          message={state?.error.npwp || []}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputText
            name="no_rekening"
            title="No. Rekening"
            type="number"
            message={state?.error.no_rekening || []}
          />
          <InputText
            name="bank_dki_cabang"
            title="Bank DKI Cabang"
            message={state?.error.bank_dki_cabang || []}
          />
        </div>

        <SelectOption
          name="pendidikan"
          title="Pendidikan"
          message={state?.error.pendidikan || []}
          options={[
            { label: "SD", value: "sd" },
            { label: "SMP", value: "smp" },
            { label: "SMA", value: "sma" },
          ]}
        />

        <SelectOption
          name="jenis_pekerjaan"
          title="Jenis Pekerjaan"
          message={state?.error.jenis_pekerjaan || []}
          options={[
            { label: "SD", value: "sd" },
            { label: "SMP", value: "smp" },
            { label: "SMA", value: "sma" },
          ]}
        />

        <Button className="bg-orange-400">
          {isPending ? "Menyimpan..." : "Simpan"}
        </Button>
      </div>
    </form>
  );
};

export default CreateDaftarPegawaiForm;

"use client";

import { savePegawai } from "@/lib/action";
import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import InputText from "@/components/inputs/input-text";
import InputSingleDate from "@/components/inputs/input-single-date";
import InputOption from "@/components/inputs/input-option";

const CreateDaftarPegawaiForm = () => {
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
        label: item.toUpperCase(),
        value: item,
      }));

      setPendidikanList(formattedPendidikanData);
      setJenisPekerjaanList(formattedJenisPekerjaanData);
    };

    fetchEnums();
  }, []);

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
          <InputSingleDate
            title="Tanggal Lahir"
            name="tanggal_lahir"
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

        <InputOption
          name="pendidikan"
          title="Pendidikan"
          message={state?.error.pendidikan || []}
          options={pendidikanList}
        />

        <InputOption
          name="jenis_pekerjaan"
          title="Jenis Pekerjaan"
          message={state?.error.jenis_pekerjaan || []}
          options={jenisPekerjaanList}
        />

        <Button className="bg-primary hover:bg-orange-500">
          {isPending ? "Menyimpan..." : "Simpan"}
        </Button>
      </div>
    </form>
  );
};

export default CreateDaftarPegawaiForm;

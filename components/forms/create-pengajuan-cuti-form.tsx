"use client";

import { InputTextarea, SelectDate, SelectOption } from "../input";
import { Button } from "../ui/button";

const CreatePengajuanCutiForm = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-4">
        <SelectOption
          title="Tipe Cuti"
          name="tipe_cuti"
          options={[{ label: "Sakit", value: "sakit" }]}
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <SelectDate title="Tanggal Mulai" name="tanggal_mulai" />
          <SelectDate title="Tanggal Selesai" name="tanggal_selesai" />
        </div>

        <InputTextarea
          title="Alasan"
          name="alasan"
          placeholder="Masukkan alasan Anda"
        />

        <Button className="bg-orange-400 hover:bg-orange-500">Simpan</Button>
      </div>
    </form>
  );
};

export default CreatePengajuanCutiForm;

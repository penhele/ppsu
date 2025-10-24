"use client";

import { useEffect, useState } from "react";
import { InputText, SelectOption } from "./input";

const CreateDaftarPegawaiForm = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [kota, setKota] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [kelurahan, setKelurahan] = useState([]);

  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedKota, setSelectedKota] = useState("");
  const [selectedKecamatan, setSelectedKecamatan] = useState("");

  // Ambil provinsi
  useEffect(() => {
    fetch("/api/address/provinces")
      .then((res) => res.json())
      .then((data) =>
        setProvinsi(data.map((d: any) => ({ label: d.name, value: d.id }))),
      );
  }, []);

  // Ambil kota berdasarkan provinsi
  useEffect(() => {
    if (!selectedProvinsi) return;
    fetch(`/api/address/regencies?provinceId=${selectedProvinsi}`)
      .then((res) => res.json())
      .then((data) =>
        setKota(data.map((d: any) => ({ label: d.name, value: d.id }))),
      )
      .catch(() => setKota([]));

    setSelectedKota("");
    setKecamatan([]);
    setSelectedKecamatan("");
    setKelurahan([]);
  }, [selectedProvinsi]);

  // Ambil kecamatan berdasarkan kota
  useEffect(() => {
    if (!selectedKota) return;
    fetch(`/api/address/districts?regencyId=${selectedKota}`)
      .then((res) => res.json())
      .then((data) =>
        setKecamatan(data.map((d: any) => ({ label: d.name, value: d.id }))),
      )
      .catch(() => setKecamatan([]));

    setSelectedKecamatan("");
    setKelurahan([]);
  }, [selectedKota]);

  // Ambil kelurahan berdasarkan kecamatan
  useEffect(() => {
    if (!selectedKecamatan) return;
    fetch(`/api/address/villages?districtId=${selectedKecamatan}`)
      .then((res) => res.json())
      .then((data) =>
        setKelurahan(data.map((d: any) => ({ label: d.name, value: d.id }))),
      )
      .catch(() => setKelurahan([]));
  }, [selectedKecamatan]);

  return (
    <div className="flex flex-col gap-4">
      <InputText name="nama" title="Nama Lengkap" />

      <div className="grid grid-cols-2 gap-4">
        <InputText name="tempat_lahir" title="Tempat Lahir" />
        <InputText name="tanggal_lahir" title="Tanggal Lahir" />
      </div>

      <InputText name="alamat" title="Alamat" />

      <div className="grid grid-cols-5 gap-4">
        <SelectOption
          title="Provinsi"
          options={provinsi}
          onChange={setSelectedProvinsi}
        />
        <SelectOption
          title="Kota/Kabupaten"
          options={kota}
          onChange={setSelectedKota}
        />
        <SelectOption
          title="Kecamatan"
          options={kecamatan}
          onChange={setSelectedKecamatan}
        />
        <SelectOption title="Kelurahan" options={kelurahan} />
        <div className="flex gap-4">
          <InputText title="RT" name="rt" type="number" />
          <InputText title="RW" name="rw" type="number" />
        </div>
      </div>

      <InputText title="No. Telepon" name="no_telepon" type="number" />
      <InputText title="No. KTP" name="no_ktp" type="number" />
      <InputText title="NPWP" name="npwp" type="number" />

      <SelectOption
        title="Pendidikan"
        options={[
          { label: "SD", value: "sd" },
          { label: "SMP", value: "smp" },
          { label: "SMA", value: "sma" },
        ]}
      />

      <SelectOption
        title="Jenis Pekerjaan"
        options={[
          { label: "SD", value: "sd" },
          { label: "SMP", value: "smp" },
          { label: "SMA", value: "sma" },
        ]}
      />
    </div>
  );
};

export default CreateDaftarPegawaiForm;

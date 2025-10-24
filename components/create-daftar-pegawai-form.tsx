import { InputText, SelectOption } from "./input";

const CreateDaftarPegawaiForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <InputText name="nama" title="Nama Lengkap" />

      <div className="grid grid-cols-2 gap-4">
        <InputText name="tempat_lahir" title="Tempat Lahir" />
        <InputText name="tanggal_lahir" title="Tanggal Lahir" />
      </div>

      <InputText name="alamat" title="Alamat" />

      <div className="grid grid-cols-5 gap-4">
        <div className="flex gap-4">
          <InputText title="RT" name="rt" type="number" />
          <InputText title="RW" name="rw" type="number" />
        </div>
        <div className="flex flex-col gap-2">
          <SelectOption
            title="Kelurahan"
            options={[{ label: "Jakarta Utara", value: "jakarta-utara" }]}
          />
        </div>
        <div className="flex flex-col gap-2">
          <SelectOption
            title="Kecamatan"
            options={[{ label: "Jakarta Utara", value: "jakarta-utara" }]}
          />
        </div>
        <div className="flex flex-col gap-2">
          <SelectOption
            title="Kota"
            options={[{ label: "Jakarta Utara", value: "jakarta-utara" }]}
          />
        </div>
        <div className="flex flex-col gap-2">
          <SelectOption
            title="Provinsi"
            options={[{ label: "DKI Jakarta", value: "dki-jakarta" }]}
          />
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

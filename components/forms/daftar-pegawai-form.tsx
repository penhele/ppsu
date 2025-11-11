import CreateDaftarPegawaiForm from "@/components/forms/create-daftar-pegawai-form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DaftarPegawaiForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tambah Pegawai</CardTitle>
      </CardHeader>

      <CardContent>
        <CreateDaftarPegawaiForm />
      </CardContent>
    </Card>
  );
};

export default DaftarPegawaiForm;

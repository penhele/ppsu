import { auth } from "@/auth";
import CreatePengajuanCutiForm from "@/components/forms/create-pengajuan-cuti-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

const PengajuanCutiForm = async () => {
  const session = await auth();
  if (!session) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulir Pengajuan Cuti</CardTitle>
        <CardDescription>Ajukan cuti Anda di sini</CardDescription>
      </CardHeader>

      <CardContent>
        <CreatePengajuanCutiForm session={session} />
      </CardContent>
    </Card>
  );
};

export default PengajuanCutiForm;

import { auth } from "@/auth";
import UbahPasswordForm from "@/components/forms/ubah-password-form";
import InputDisplayed from "@/components/inputs/input-displayed";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPegawaiByUserId } from "@/lib/data/pegawai";
import { formatDate } from "@/lib/utils";

const Profile = async () => {
  const session = await auth();
  const pegawai = await getPegawaiByUserId(session?.user.id ?? "");

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Informasi Pribadi</CardTitle>
          <CardDescription></CardDescription>
          <CardAction>
            <Button variant={"outline"}>Edit</Button>
          </CardAction>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <section className="grid grid-cols-2 gap-4">
            <InputDisplayed isBold title="Nama" value={pegawai?.nama} />
            <InputDisplayed isBold title="No. KTP" value={pegawai?.no_ktp} />
            <InputDisplayed
              isBold
              title="Tempat"
              value={pegawai?.tempat_lahir}
            />
            <InputDisplayed
              isBold
              title="Tanggal Lahir"
              value={formatDate(pegawai?.tanggal_lahir || new Date())}
            />
          </section>

          <Separator />

          <section className="grid grid-cols-2 gap-4">
            <InputDisplayed isBold title="Alamat" value={pegawai?.alamat} />
            <InputDisplayed isBold title="RT/RW" value={pegawai?.rt} />
            <InputDisplayed
              isBold
              title="Kelurahan"
              value={pegawai?.kelurahan}
            />
            <InputDisplayed
              isBold
              title="Kecamatan"
              value={pegawai?.kecamatan}
            />
            <InputDisplayed isBold title="Kota" value={pegawai?.kota} />
            <InputDisplayed isBold title="Provinsi" value={pegawai?.provinsi} />
          </section>

          <Separator />

          <section className="grid grid-cols-2 gap-4">
            <InputDisplayed
              isBold
              title="No. Telepon"
              value={pegawai?.no_telepon}
            />
            <InputDisplayed
              isBold
              title="Pendidikan Terakhir"
              value={pegawai?.pendidikan}
            />
            <InputDisplayed isBold title="NPWP" value={pegawai?.npwp} />
            <InputDisplayed
              isBold
              title="No. Rekening"
              value={pegawai?.no_rekening}
            />
          </section>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ubah Password</CardTitle>
          <CardDescription>
            Pastikan menggunakan password yang aman
          </CardDescription>
        </CardHeader>

        <CardContent>
          <UbahPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;

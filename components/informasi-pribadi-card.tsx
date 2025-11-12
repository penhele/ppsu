import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

type UserProps = {
  name: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  alamat: string;
  rt: string;
  rw: string;
  kelurahan: string;
  kecamatan: string;
  kota: string;
  provinsi: string;
  no_telepon: string;
  no_ktp: string;
  npwp: string;
  no_rekening: string;
  pendidikan: string;
  total_cuti_diambil: number;
};

const InfoField = ({ label, value }: { label: string; value: string | number }) => (
  <div>
    <Label className="text-xs text-muted-foreground">{label}</Label>
    <p className="text-sm font-medium">{value || "-"}</p>
  </div>
);

export const InformasiPribadiCard = ({ user }: { user: UserProps }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Informasi Pribadi</CardTitle>
          <CardDescription>Informasi dasar tentang Anda sebagai pegawai</CardDescription>
        </div>
        <Button variant="outline">Edit</Button>
      </CardHeader>
      
      <CardContent className="space-y-6">
        
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Data Diri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoField label="Nama Lengkap" value={user.name} />
            <InfoField label="No. KTP" value={user.no_ktp} />
            <InfoField 
              label="Tempat, Tanggal Lahir" 
              value={`${user.tempat_lahir}, ${user.tanggal_lahir}`} 
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Alamat</h3>
          <InfoField label="Alamat" value={user.alamat} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoField label="RT / RW" value={`${user.rt} / ${user.rw}`} />
            <InfoField label="Kelurahan" value={user.kelurahan} />
            <InfoField label="Kecamatan" value={user.kecamatan} />
            <InfoField label="Kota / Provinsi" value={`${user.kota}, ${user.provinsi}`} />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">Kontak & Finansial</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoField label="No. Telepon" value={user.no_telepon} />
            <InfoField label="Pendidikan Terakhir" value={user.pendidikan} />
            <InfoField label="NPWP" value={user.npwp} />
            <InfoField label="No. Rekening" value={user.no_rekening} />
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
           <h3 className="text-sm font-medium text-muted-foreground">Kepegawaian</h3>
           <InfoField 
             label="Total Cuti Sudah Diambil (Tahun Ini)" 
             value={`${user.total_cuti_diambil} hari`} 
           />
        </div>

      </CardContent>
    </Card>
  );
};
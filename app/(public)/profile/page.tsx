import { auth } from "@/auth"; 
import { redirect } from "next/navigation";
import { InformasiPribadiCard } from "@/components/informasi-pribadi-card";
import { ProfileSidebar } from "@/components/profile-sidebar";

async function getUserData(userId: string) {
  const DUMMY_USER = {
    id: "PEG001",
    name: "Ahmad Subagja",
    tempat_lahir: "Jakarta",
    tanggal_lahir: "10-05-1990", 
    alamat: "Jl. Merdeka No. 45",
    rt: "005",
    rw: "002",
    kelurahan: "Cijantung",
    kecamatan: "Pasar Rebo",
    kota: "Jakarta Timur",
    provinsi: "DKI Jakarta",
    no_telepon: "081298765432",
    no_ktp: "3175011005900001",
    npwp: "09.254.897.1-001.000",
    no_rekening: "1234567890 (BCA)",
    pendidikan: "S1 Teknik Informatika",
    total_cuti_diambil: 5, 
    status: "Aktif", 
  };

  return DUMMY_USER;
}

export default async function ProfilePage() {
  const session = await auth(); 
  
  // if (!session?.user?.id) {
  //   redirect("/auth/login"); 
  // }
  
  const user = await getUserData("dummy-id"); 

  if (!user) {
    return <div>User tidak ditemukan.</div>;
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2">
          <InformasiPribadiCard user={user} />
        </div>

        <div className="lg:col-span-1">
          <ProfileSidebar user={user} />
        </div>

      </div>
    </div>
  );
}
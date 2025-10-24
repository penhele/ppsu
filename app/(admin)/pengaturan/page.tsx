"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PengaturanPage() {
  const router = useRouter();

  function handleLogout() {
    // nanti bisa kamu ganti dengan API logout
    alert("Anda telah logout dari Sistem Cuti Pegawai PPSU.");
    // hapus token / session di localStorage (placeholder)
    localStorage.removeItem("token");
    // redirect ke halaman login
    router.push("/login");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Pengaturan</h1>
        <p className="text-gray-500 text-sm">
          Kelola informasi akun Anda di Sistem Cuti Pegawai PPSU.
        </p>
      </div>

      <Card className="border border-gray-200 shadow-card rounded-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold text-gray-900">
            Profil Pengguna
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-700">Nama</p>
            <p className="text-gray-600">Budi Santoso</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Email</p>
            <p className="text-gray-600">budi@ppsu.co.id</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Role</p>
            <p className="text-gray-600">Admin</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button
              variant="outline"
              size="full"
              className="text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              Ganti Password
            </Button>

            {/* Tombol Logout */}
            <Button
              variant="primary"
              size="full"
              className="bg-ppsu hover:bg-ppsu-dark text-white"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-[12px] text-gray-500 text-center pt-6">
        Versi Sistem: v1.0 PPSU  
        <br />
        © {new Date().getFullYear()} PPSU Kelurahan
      </div>
    </div>
  );
}

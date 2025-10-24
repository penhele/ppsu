"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ tambahkan ini

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const router = useRouter(); // ✅ inisialisasi router
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    // nanti logic API register bisa ditaruh di sini
    console.log("register submit", { nama, email, role, password, konfirmasi });

    // ✅ arahkan ke halaman login
    router.push("/login");
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Registrasi Akun
        </h1>
        <p className="text-sm text-gray-500">
          Sistem Cuti Pegawai PPSU Kelurahan
        </p>
      </div>

      <Card className="shadow-card border border-gray-200 rounded-xl bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold text-gray-900">
            Buat Akun Baru
          </CardTitle>
          <p className="text-sm text-gray-500">
            Data Anda akan diverifikasi oleh Admin Kelurahan.
          </p>
        </CardHeader>

        <CardContent className="pt-4">
          <form onSubmit={handleRegister} className="flex flex-col gap-4 text-sm">
            <div className="flex flex-col gap-2">
              <Label htmlFor="nama">Nama Lengkap</Label>
              <Input
                id="nama"
                placeholder="Budi Santoso"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email PPSU</Label>
              <Input
                id="email"
                type="email"
                placeholder="nama@ppsu.go.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="role">Jabatan / Role</Label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-ppsu focus:ring-2 focus:ring-ppsu/30"
              >
                <option value="">Pilih role</option>
                <option value="EMPLOYEE">Petugas Lapangan PPSU</option>
                <option value="ADMIN">Admin Cuti / Sekretariat</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Minimal 8 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="konfirmasi">Konfirmasi Password</Label>
              <Input
                id="konfirmasi"
                type="password"
                placeholder="Ulangi password"
                value={konfirmasi}
                onChange={(e) => setKonfirmasi(e.target.value)}
                required
              />
            </div>

            <Button type="submit" variant="primary" size="full" className="mt-2">
              Daftar
            </Button>
          </form>

          <div className="text-center text-[13px] text-gray-500 mt-6">
            Sudah punya akun?{" "}
            <Link href="/login" className="font-medium text-ppsu hover:text-ppsu-dark">
              Masuk
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

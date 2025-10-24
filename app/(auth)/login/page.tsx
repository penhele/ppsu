"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ tambahkan ini

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter(); // ✅
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    console.log("login submit", { email, password });

    // ✅ redirect ke dashboard
    router.push("/");
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Masuk ke Sistem</h1>
        <p className="text-sm text-gray-500">
          Sistem Cuti Pegawai PPSU Kelurahan
        </p>
      </div>

      <Card className="shadow-card border border-gray-200 rounded-xl bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold text-gray-900">
            Login Admin / Pegawai
          </CardTitle>
          <p className="text-sm text-gray-500">
            Gunakan akun PPSU Anda untuk melanjutkan.
          </p>
        </CardHeader>

        <CardContent className="pt-4">
          <form className="flex flex-col gap-4 text-sm" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-[12px]">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-ppsu focus:ring-ppsu"
                />
                <span>Ingat saya</span>
              </label>
              <button
                type="button"
                className="text-ppsu hover:text-ppsu-dark font-medium"
              >
                Lupa password?
              </button>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="full"
              className="mt-2"
            >
              Masuk
            </Button>
          </form>

          <div className="text-center text-[13px] text-gray-500 mt-6">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="font-medium text-ppsu hover:text-ppsu-dark"
            >
              Daftar
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

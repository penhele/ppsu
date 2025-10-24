"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function PengajuanCutiPage() {
  const [tipe, setTipe] = useState("");
  const [mulai, setMulai] = useState("");
  const [akhir, setAkhir] = useState("");
  const [alasan, setAlasan] = useState("");

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Pengajuan Cuti</h1>
        <p className="text-sm text-gray-500">
          Ajukan cuti dan kirim untuk persetujuan atasan.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Form Pengajuan</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4 text-sm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Dummy submit. Belum terhubung backend.");
            }}
          >
            <div className="flex flex-col gap-2">
              <Label>Tipe Cuti</Label>
              <select
                value={tipe}
                onChange={(e) => setTipe(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-ppsu focus:ring-2 focus:ring-ppsu/30"
              >
                <option value="">Pilih tipe cuti</option>
                <option value="Tahunan">Cuti Tahunan</option>
                <option value="Sakit">Cuti Sakit</option>
                <option value="Mendadak">Cuti Mendadak</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Tanggal Mulai</Label>
              <Input
                type="date"
                value={mulai}
                onChange={(e) => setMulai(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Tanggal Akhir</Label>
              <Input
                type="date"
                value={akhir}
                onChange={(e) => setAkhir(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Alasan</Label>
              <Textarea
                placeholder="Tulis alasan cuti..."
                value={alasan}
                onChange={(e) => setAlasan(e.target.value)}
              />
            </div>

            <Button type="submit" variant="primary" size="full">
              Kirim Pengajuan
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

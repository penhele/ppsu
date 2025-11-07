"use client";

import { formatDate, getTextWithoutUnderscore } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import StatusLabel from "@/components/status-label";
import { UpdateButton } from "@/components/buttons/update-button";
import { DeleteButton } from "@/components/buttons/delete-button";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { PegawaiProps } from "@/types/pegawai";

export const columns: ColumnDef<PegawaiProps>[] = [
  {
    accessorKey: "nama",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    header: "Email",
    cell: ({ row }) => {
      return row.original.user.email;
    },
  },
  {
    accessorKey: "total_cuti_disetujui",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cuti
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-500">
            Terpakai {row.getValue("total_cuti_disetujui")}/12
          </span>
          <Slider
            defaultValue={[row.getValue("total_cuti_disetujui")]}
            max={12}
            step={1}
            disabled
            className="**:[[role=slider]]:hidden bg-gray-200 rounded-full"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return StatusLabel({ value: row.getValue("status") });
    },
  },
  {
    accessorKey: "tempat_lahir",
    header: "Tempat Lahir",
  },
  {
    accessorKey: "tanggal_lahir",
    header: "Tanggal Lahir",
    cell: ({ row }) => {
      return formatDate(row.getValue("tanggal_lahir"));
    },
  },
  {
    accessorKey: "alamat",
    header: "Alamat",
  },
  {
    accessorKey: "rt",
    header: "RT",
  },
  {
    accessorKey: "rw",
    header: "RW",
  },
  {
    accessorKey: "kelurahan",
    header: "Kelurahan",
  },
  {
    accessorKey: "kota",
    header: "Kota",
  },
  {
    accessorKey: "provinsi",
    header: "Provinsi",
  },
  {
    accessorKey: "no_telepon",
    header: "No. Telepon",
  },
  {
    accessorKey: "no_ktp",
    header: "No. KTP",
  },
  {
    accessorKey: "npwp",
    header: "NPWP",
  },
  {
    accessorKey: "no_rekening",
    header: "No. Rekening",
  },
  {
    accessorKey: "bank_dki_cabang",
    header: "Bank DKI Cabang",
  },
  {
    accessorKey: "pendidikan",
    header: "Pendidikan",
  },
  {
    accessorKey: "jenis_pekerjaan",
    header: "Jenis Pekerjaan",
    cell: ({ row }) => {
      return getTextWithoutUnderscore(row.getValue("jenis_pekerjaan"));
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <UpdateButton id={row.original.id_pegawai} />
          <DeleteButton id={row.original.id_pegawai} />
        </div>
      );
    },
  },
];

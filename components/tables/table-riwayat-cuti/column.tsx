"use client";

import StatusLabel from "@/components/status-label";
import { formatDate, getTextWithoutUnderscore } from "@/lib/utils";
import { CutiProps } from "@/types/cuti";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CutiProps>[] = [
  {
    accessorKey: "Pegawai.nama",
    header: "Nama",
  },
  {
    accessorKey: "Pegawai.jenis_pekerjaan",
    header: "Jenis Pekerjaan",
    cell: ({ row }) => {
      return getTextWithoutUnderscore(
        row.original.Pegawai?.jenis_pekerjaan ?? "",
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return StatusLabel({ value: row.original.status });
    },
  },
  {
    accessorKey: "created_at",
    header: "Tanggal Pengajuan",
    cell: ({ row }) => {
      return formatDate(row.original.created_at);
    },
  },
  {
    accessorKey: "updated_at",
    header: "Tanggal Respon",
    cell: ({ row }) => {
      return formatDate(row.original.updated_at);
    },
  },
];

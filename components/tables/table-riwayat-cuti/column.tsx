"use client";

import { ViewButton } from "@/components/buttons/view-button";
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
    header: "Tanggal",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col font-medium">
          <span>{formatDate(row.original.tanggal_mulai)}</span>
          <span className="text-xs text-gray-500">
            s.d. {formatDate(row.original.tanggal_selesai)}
          </span>
        </div>
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
  // {
  //   id: "actions",
  //   header: "Aksi",
  //   cell: ({ row }) => {
  //     return <ViewButton id={row.original.id_pegawai} />;
  //   },
  // },
];

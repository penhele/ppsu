"use client";

import AcceptButton from "@/components/buttons/accept-button";
import RejectButton from "@/components/buttons/reject-button";
import StatusLabel from "@/components/status-label";
import {
  formatDate,
  getDurationDays,
  getTextWithoutUnderscore,
} from "@/lib/utils";
import { CutiProps } from "@/types/cuti";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CutiProps>[] = [
  {
    accessorKey: "Pegawai.nama",
    header: "Nama",
  },
  {
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
    header: "Durasi",
    cell: ({ row }) => {
      return getDurationDays(
        row.original.tanggal_mulai,
        row.original.tanggal_selesai,
      );
    },
  },
  {
    header: "Status",
    cell: ({ row }) => {
      return StatusLabel({ value: row.original.status });
    },
  },
  {
    header: "Tanggal Pengajuan",
    cell: ({ row }) => {
      return formatDate(row.original.created_at);
    },
  },
  //   {
  //     id: "actions",
  //     header: "Aksi",
  //     cell: ({ row }) => {
  //       return (
  //         <div className="flex gap-2">
  //           <AcceptButton id={row.original.id_pegawai} />
  //           <RejectButton id={row.original.id_pegawai} />
  //         </div>
  //       );
  //     },
  //   },
];

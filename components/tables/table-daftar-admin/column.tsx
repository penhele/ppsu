"use client";

import { UserProps } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<UserProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return row.original.id;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return row.original.email;
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      return row.original.role;
    },
  },
];

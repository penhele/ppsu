"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuVisibilityItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Tableheader from "@/components/table-header";
import CreateButton from "@/components/buttons/create-button";
import { DataTablePagination } from "../filters/data-table-pagination";
import TableSearchInput from "@/components/filters/table-search-input";
import TableColumnVisibility from "../filters/table-column-visibility";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableSearchInput?: boolean;
  tableColumnVisibility?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  tableSearchInput = false,
  tableColumnVisibility = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  useEffect(() => {
    const saved = localStorage.getItem("table-columns");
    if (saved) {
      const visibility = JSON.parse(saved);
      table.setColumnVisibility(visibility);
    }
  }, [table]);

  useEffect(() => {
    localStorage.setItem("table-columns", JSON.stringify(columnVisibility));
  }, [columnVisibility]);

  return (
    <div className="border p-4 rounded-xl flex flex-col gap-3 w-full bg-white">
      <div className="flex justify-between items-center">
        <Tableheader title="Daftar Pegawai" description="Kelola pegawai PPSU" />

        <div className="flex items-center gap-4">
          <div className="flex items-center py-4">
            {tableSearchInput && (
              <TableSearchInput
                table={table}
                columnId="nama"
                placeholder="Cari nama..."
              />
            )}
          </div>

          {tableColumnVisibility && <TableColumnVisibility table={table} />}

          <CreateButton href={"/dashboard/data-pegawai/create"} />
        </div>
      </div>

      <div className="w-full overflow-x-auto border rounded-lg">
        <Table>
          <TableHeader className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="whitespace-nowrap">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="whitespace-nowrap">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </div>
  );
}

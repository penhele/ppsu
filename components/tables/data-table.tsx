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
import CreateButton from "@/components/buttons/create-button";
import { DataTablePagination } from "@/components/filters/data-table-pagination";
import TableSearchInput from "@/components/filters/table-search-input";
import TableColumnVisibility from "@/components/filters/table-column-visibility";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title: string;
  description: string;
  tableSearchInput?: boolean;
  tableColumnVisibility?: boolean;
  createUser?: boolean;
  createUserUrl?: string;
  dataTablePagination?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  title,
  description,
  tableSearchInput = false,
  tableColumnVisibility = false,
  createUser = false,
  createUserUrl,
  dataTablePagination = false,
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
    <Card>
      <CardHeader className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>

        <div className="flex gap-4">
          {tableSearchInput && (
            <TableSearchInput
              table={table}
              columnId="nama"
              placeholder="Cari nama..."
            />
          )}

          {tableColumnVisibility && <TableColumnVisibility table={table} />}

          {createUser && <CreateButton href={createUserUrl ?? ""} />}
        </div>
      </CardHeader>

      <CardContent>
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
                    className="h-24 text-center text-gray-500"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {dataTablePagination && (
        <CardFooter>
          <DataTablePagination table={table} />
        </CardFooter>
      )}
    </Card>
  );
}

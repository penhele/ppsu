import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuVisibilityItem } from "../ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

export default function TableColumnVisibility<TData>({
  table,
}: {
  table: Table<TData>;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto text-gray-400">
          Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-50">
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuVisibilityItem
                key={column.id}
                checked={column.getIsVisible()}
                onSelect={(e) => e.preventDefault()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuVisibilityItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "../ui/input-group";

export default function TableSearchInput<TData>({
  table,
  columnId,
  placeholder,
}: {
  table: Table<TData>;
  columnId: string;
  placeholder: string;
}) {
  const column = table.getColumn(columnId);

  return (
    <InputGroup>
      <InputGroupInput
        placeholder={placeholder}
        value={(column?.getFilterValue() as string) ?? ""}
        onChange={(event) => column?.setFilterValue(event.target.value)}
        className="max-w-sm"
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
}

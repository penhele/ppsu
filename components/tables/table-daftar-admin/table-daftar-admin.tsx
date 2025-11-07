import { DataTable } from "../data-table";
import { getUserByRole } from "@/lib/data/user";
import { Role } from "@prisma/client";
import { columns } from "./column";

const TableDaftarAdmin = async () => {
  const admin = await getUserByRole(Role.ADMIN);

  return (
    <div>
      <DataTable columns={columns} data={admin ?? []} />
    </div>
  );
};

export default TableDaftarAdmin;

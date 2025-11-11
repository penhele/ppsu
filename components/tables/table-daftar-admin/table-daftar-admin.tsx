import { DataTable } from "@/components/tables/data-table";
import { getUserByRole } from "@/lib/data/user";
import { Role } from "@prisma/client";
import { columns } from "@/components/tables/table-daftar-admin/column";

const TableDaftarAdmin = async () => {
  const admin = await getUserByRole(Role.ADMIN);

  return (
    <div>
      <DataTable
        title="Tabel Daftar Admin"
        description="Lorem ipsum dolor sit amet."
        columns={columns}
        data={admin ?? []}
      />
    </div>
  );
};

export default TableDaftarAdmin;

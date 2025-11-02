import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUserByRole } from "@/lib/data/user";
import { Role } from "@prisma/client";
import CreateAdminDialog from "@/components/forms/create-admin-dialog";
import Tableheader from "../table-header";

const TableDaftarAdmin = async () => {
  const user = await getUserByRole(Role.ADMIN);
  if (!user) return null;

  return (
    <div className="border p-4 rounded-xl flex flex-col gap-3 w-full bg-white">
      <div className="flex justify-between">
        <Tableheader
          title="Daftar Admin"
          description={`Terdapat ${user.length} admin terdaftarF`}
        />
        <CreateAdminDialog />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>...</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableDaftarAdmin;

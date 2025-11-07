import { getPegawai } from "@/lib/data/pegawai";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "@/components/tables/table-daftar-pegawai/column";

const TableDaftarPegawai = async () => {
  const pegawai = await getPegawai();

  return (
    <div className="">
      <DataTable
        columns={columns}
        data={pegawai}
        tableSearchInput
        tableColumnVisibility
        createUser
        createUserUrl="/dashboard/data-pegawai/create"
        dataTablePagination
      />
    </div>
  );
};

export default TableDaftarPegawai;

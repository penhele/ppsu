import { getPegawai } from "@/lib/data/pegawai";
import { DataTable } from "@/components/tables/table-pegawai/data-table";
import { columns } from "@/components/tables/table-pegawai/column";
import { DataTablePagination } from "./data-table-pagination";

const TableDaftarPegawai = async () => {
  const pegawai = await getPegawai();
  if (!pegawai) return <p>Tidak ada data</p>;

  return (
    <div className="">
      <DataTable columns={columns} data={pegawai} />
    </div>
  );
};

export default TableDaftarPegawai;

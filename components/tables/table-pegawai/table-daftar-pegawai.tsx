import { getPegawai } from "@/lib/data/pegawai";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "@/components/tables/table-pegawai/column";

const TableDaftarPegawai = async () => {
  const pegawai = await getPegawai();
  if (!pegawai) return <p>Tidak ada data</p>;

  return (
    <div className="">
      <DataTable
        columns={columns}
        data={pegawai}
        tableSearchInput
        tableColumnVisibility
      />
    </div>
  );
};

export default TableDaftarPegawai;

import { getPegawai } from "@/lib/data/pegawai";
import { DataTable } from "@/components/tables/pegawai/data-table";
import { columns } from "@/components/tables/pegawai/column";

const TableDaftarPegawai = async () => {
  const pegawai = await getPegawai();
  if (!pegawai) return <p>Tidak ada data</p>;

  return (
    <div className="container">
      <DataTable columns={columns} data={pegawai} />
    </div>
  );
};

export default TableDaftarPegawai;

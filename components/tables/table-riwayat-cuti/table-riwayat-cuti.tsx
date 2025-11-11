import { getCutiByStatus } from "@/lib/data/cuti";
import { CutiStatus } from "@prisma/client";
import { columns } from "@/components/tables/table-riwayat-cuti/column";
import { DataTable } from "@/components/tables/data-table";

const TableRiwayatCuti = async () => {
  const cuti = await getCutiByStatus({
    status: [CutiStatus.DISETUJUI, CutiStatus.DITOLAK],
  });

  return (
    <div className="">
      <DataTable
        title="Tabel Riwayat Cuti"
        description="Lorem ipsum dolor sit amet."
        columns={columns}
        data={cuti}
        dataTablePagination
      />
    </div>
  );
};

export default TableRiwayatCuti;

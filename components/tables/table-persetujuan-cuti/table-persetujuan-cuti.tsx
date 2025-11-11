import { getCutiByStatus } from "@/lib/data/cuti";
import { CutiStatus } from "@prisma/client";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "@/components/tables/table-persetujuan-cuti//column";

const TablePersetujuanCuti = async () => {
  const cuti = await getCutiByStatus({
    status: CutiStatus.MENUNGGU,
  });

  return (
    <div className="">
      <DataTable
        title="Tabel Persetujuan Cuti"
        description="Lorem ipsum dolor sit amet."
        columns={columns}
        data={cuti}
        dataTablePagination
      />
    </div>
  );
};

export default TablePersetujuanCuti;

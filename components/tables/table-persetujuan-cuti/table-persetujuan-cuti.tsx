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
      <DataTable columns={columns} data={cuti} />
    </div>
  );
};

export default TablePersetujuanCuti;

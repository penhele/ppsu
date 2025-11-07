import { getCutiByStatus } from "@/lib/data/cuti";
import { CutiStatus } from "@prisma/client";
import { columns } from "@/components/tables/table-riwayat-cuti/column";
import { DataTable } from "../data-table";

const TableRiwayatCuti = async () => {
  const cuti = await getCutiByStatus({
    status: [CutiStatus.DISETUJUI, CutiStatus.DITOLAK],
  });

  return (
    <div className="">
      <DataTable columns={columns} data={cuti} />
    </div>
  );
};

export default TableRiwayatCuti;

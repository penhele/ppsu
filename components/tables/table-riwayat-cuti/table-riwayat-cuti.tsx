import { getCutiByStatus } from "@/lib/data/cuti";
import { DataTable } from "@/components/tables/data-table";
import { CutiStatus } from "@prisma/client";
import { columns } from "@/components/tables/table-riwayat-cuti/column";

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

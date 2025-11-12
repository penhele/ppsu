import { getCutiByStatus, getCutiByUserId } from "@/lib/data/cuti";
import { CutiStatus } from "@prisma/client";
import { columns } from "@/components/tables/table-riwayat-cuti/column";
import { DataTable } from "@/components/tables/data-table";
import { auth } from "@/auth";

const TableRiwayatCuti = async ({
  isPegawai = false,
}: {
  isPegawai?: boolean;
}) => {
  const session = await auth();
  const cutiPegawai = await getCutiByUserId(session?.user.id ?? "");
  const cuti = await getCutiByStatus({
    status: [CutiStatus.DISETUJUI, CutiStatus.DITOLAK],
  });

  return (
    <div className="">
      <DataTable
        title="Tabel Riwayat Cuti"
        description="Lorem ipsum dolor sit amet."
        columns={columns}
        data={isPegawai ? cutiPegawai : cuti}
        dataTablePagination
      />
    </div>
  );
};

export default TableRiwayatCuti;

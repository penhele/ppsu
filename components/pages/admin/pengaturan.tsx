import PengaturanForm from "@/components/forms/pengaturan-form";
import SectionHeader from "@/components/section-header";
import TableDaftarAdmin from "@/components/tables/table-daftar-admin/table-daftar-admin";

const Pengaturan = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Pengaturan"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, officiis."
      />

      <PengaturanForm />

      <TableDaftarAdmin />
    </div>
  );
};

export default Pengaturan;

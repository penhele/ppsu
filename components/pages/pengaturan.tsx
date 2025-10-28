import PengaturanForm from "@/components/forms/pengaturan-form";
import SectionHeader from "@/components/header";

const Pengaturan = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Pengaturan"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, officiis."
      />

      <PengaturanForm />
    </div>
  );
};

export default Pengaturan;

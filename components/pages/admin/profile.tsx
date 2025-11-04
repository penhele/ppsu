import ProfileForm from "@/components/forms/pengaturan-form";
import SectionHeader from "@/components/header";

const Profile = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader title="Profile" description="Kelola profile Admin" />

      <ProfileForm />
    </div>
  );
};

export default Profile;

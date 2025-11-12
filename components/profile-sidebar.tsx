import { ProfileSidebarCard } from "./profile-sidebar-card";
import { UbahPasswordForm } from "./ubah-password-form";

export const ProfileSidebar = ({ user }: { user: any }) => {
  return (
    <div className="flex flex-col gap-6">
      <ProfileSidebarCard user={user} />
      <UbahPasswordForm />
    </div>
  );
};
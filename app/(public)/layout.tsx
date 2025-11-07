
import AppSidebarPegawai from "@/components/app-sidebar-pegawai";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebarPegawai />
      <main className="w-full px-2 md:px-4">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
      
  );
}

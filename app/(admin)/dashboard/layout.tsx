import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full px-2 py-4 md:py-2 md:px-4">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}

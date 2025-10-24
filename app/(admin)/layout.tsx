import SidebarShell from "@/components/app-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <SidebarShell>{children}</SidebarShell>;
}

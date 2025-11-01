import {
  ChartArea,
  CheckCircle,
  ClipboardList,
  FileText,
  Home,
  Settings,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const path = "dashboard";

const items = [
  { url: `/${path}`, title: "Dashboard", icon: Home },
  { url: `/${path}/data-pegawai`, title: "Data Pegawai", icon: Users },
  { url: `/${path}/pengajuan-cuti`, title: "Pengajuan Cuti", icon: FileText },
  {
    url: `/${path}/persetujuan-cuti`,
    title: "Persetujuan Cuti",
    icon: CheckCircle,
  },
  { url: `/${path}/riwayat-cuti`, title: "Riwayat Cuti", icon: ClipboardList },
  { url: `/${path}/pengaturan`, title: "Pengaturan", icon: Settings },
  { url: `/${path}/laporan`, title: "Laporan", icon: ChartArea },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

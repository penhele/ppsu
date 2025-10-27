import { CheckCircle, ClipboardList, FileText, Home, Settings, Users } from "lucide-react";

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

const items = [
  { url: "/", title: "Dashboard", icon: Home },
  { url: "/data-pegawai", title: "Data Pegawai", icon: Users },
  { url: "/pengajuan-cuti", title: "Pengajuan Cuti", icon: FileText },
  { url: "/persetujuan-cuti", title: "Persetujuan Cuti", icon: CheckCircle },
  { url: "/riwayat-cuti", title: "Riwayat Cuti", icon: ClipboardList },
  { url: "/pengaturan", title: "Pengaturan", icon: Settings },
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

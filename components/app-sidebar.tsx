import {
  ChartArea,
  CheckCircle,
  ClipboardList,
  Home,
  LogOut,
  Settings,
  Users,
  Warehouse,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const path = "dashboard";

const items = [
  { url: `/${path}`, title: "Dashboard", icon: Home },
  { url: `/${path}/data-pegawai`, title: "Data Pegawai", icon: Users },
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
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Warehouse className="size-5" />
                <span className="text-base font-semibold">PPSU</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pegawai</SidebarGroupLabel>
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

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/api/auth/signout"}>
                    <Button
                      variant={"link"}
                      className="w-full flex items-center justify-start gap-4"
                    >
                      <LogOut />
                      <span>Sign Out</span>
                    </Button>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}

import {
  ArrowUpNarrowWide,
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
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavMain from "./nav-main";
import { auth } from "@/auth";
import { Role } from "@prisma/client";

const path = "dashboard";

const data = {
  navAdmin: [
    { url: `/${path}`, title: "Dashboard", icon: Home },
    { url: `/${path}/data-pegawai`, title: "Data Pegawai", icon: Users },
    {
      url: `/${path}/persetujuan-cuti`,
      title: "Persetujuan Cuti",
      icon: CheckCircle,
    },
    {
      url: `/${path}/riwayat-cuti`,
      title: "Riwayat Cuti",
      icon: ClipboardList,
    },
    { url: `/${path}/pengaturan`, title: "Pengaturan", icon: Settings },
    { url: `/${path}/laporan`, title: "Laporan", icon: ChartArea },
  ],

  navPegawai: [
    { url: `/`, title: "Dashboard", icon: Home },
    { url: `/pengajuan-cuti`, title: "Pengajuan Cuti", icon: ArrowUpNarrowWide },
    {
      url: `/riwayat-cuti`,
      title: "Riwayat Cuti",
      icon: ClipboardList,
    },
    { url: `/pengaturan`, title: "Pengaturan", icon: Settings },
  ],
};

export async function AppSidebar() {
  const session = await auth();
  const isAdmin = session?.user.role === Role.ADMIN;

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
        <NavMain
          title={isAdmin ? "Administrator" : "Pegawai"}
          data={isAdmin ? data.navAdmin : data.navPegawai}
        />
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

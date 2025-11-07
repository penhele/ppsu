import {
  Users,
  CheckCircle,
  Home,
  ClipboardList,
  LogOut,
  FileText,
  User,
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
} from "./ui/sidebar";
import { Separator } from "./ui/separator";
import Link from "next/link";

const items = [
  { url: `/`, title: "Dashboard", icon: Home },
  {
    url: `/pengajuan-cuti`,
    title: "Persetujuan Cuti",
    icon: CheckCircle,
  },
  { url: `/riwayat-cuti`, title: "Riwayat Cuti", icon: ClipboardList },
  { url: `/profile`, title: "Profile", icon: Users },
];
const AppSidebarPegawai = () => {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <FileText />
          </div>

          <div>
            <div className="text-xl font-bold">Sistem Cuti</div>
            <p>Pegawai</p>
          </div>
        </div>
        <Separator className="mt-5" />
      </SidebarHeader>

      <SidebarContent>
        <div className="flex items-center space-x-3 p-3">
          <div className="p-2 bg-gray-300 rounded-full">
            <User className="h-6 w-6 text-gray-700" />
          </div>

          <div>
            <div className="font-semibold">siti</div>
            <div className="text-sm text-gray-500">Staff IT</div>
          </div>
        </div>

        {/* Garis Pemisah (opsional, jika Anda ingin memisahkan header/profil dari menu) */}
        <Separator className="" />
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
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
      <SidebarFooter className="p-4 border-t">
        <SidebarMenuItem>
          <Link
            href="/api/auth/signout"
            className="flex items-center space-x-2 text-red-500 hover:text-red-700"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebarPegawai;

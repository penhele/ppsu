"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  ClipboardList,
  FileText,
  Settings,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/data-pegawai", label: "Data Pegawai", icon: Users },
  { href: "/pengajuan-cuti", label: "Pengajuan Cuti", icon: FileText },
  { href: "/riwayat-cuti", label: "Riwayat Cuti", icon: ClipboardList },
  { href: "/pengaturan", label: "Pengaturan", icon: Settings },
];

export default function SidebarShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMobile, setOpenMobile] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-gray-900">
      {/* TOP NAV BAR */}
      <header className="sticky top-0 z-20 flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3">
        {/* KIRI: hamburger + brand */}
        <div className="flex items-start gap-3">
          {/* Hamburger (hanya tampil di mobile) */}
          <Button
            size="icon"
            variant="primary"
            className="md:hidden"
            onClick={() => setOpenMobile(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gray-900">
              PPSU Kelurahan
            </span>
            <span className="text-[11px] text-gray-500">
              Sistem Cuti Pegawai
            </span>
          </div>
        </div>

        {/* KANAN: user profile */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col leading-tight text-right">
            <span className="text-sm font-semibold text-gray-900">
              Budi Santoso
            </span>
            <span className="text-[11px] text-gray-500">Admin</span>
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-ppsu text-white text-[11px] font-semibold">
            BS
          </div>
        </div>
      </header>

      <div className="flex flex-1 w-full">
        {/* SIDEBAR DESKTOP */}
        <aside className="hidden md:flex flex-col w-60 bg-ppsu text-white min-h-[calc(100vh-56px)]">
          {/* Brand block */}
          <div className="p-4 border-b border-white/20">
            <div className="text-white text-sm font-semibold leading-tight">
              PPSU Kelurahan
            </div>
            <div className="text-white/80 text-[11px] leading-tight">
              Sistem Cuti Pegawai
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex-1 p-3 flex flex-col gap-1 text-sm font-medium">
            {links.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "flex items-center gap-2 rounded-lg bg-white text-ppsu px-3 py-2 shadow-sm font-semibold"
                      : "flex items-center gap-2 rounded-lg text-white hover:bg-ppsu-dark/90 hover:text-white px-3 py-2"
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer version */}
          <div className="p-4 border-t border-white/20 text-[11px] text-white/80">
            v1.0 PPSU
          </div>
        </aside>

        {/* DRAWER MOBILE */}
        {openMobile && (
          <div className="fixed inset-0 z-40 flex md:hidden">
            {/* overlay gelap */}
            <div
              className="fixed inset-0 bg-black/40"
              onClick={() => setOpenMobile(false)}
            />

            {/* panel drawer */}
            <div className="relative z-50 w-64 bg-ppsu text-white flex flex-col shadow-xl rounded-r-xl overflow-hidden">
              {/* header drawer */}
              <div className="flex items-start justify-between p-4 border-b border-white/20">
                <div>
                  <div className="text-white text-base font-semibold leading-tight">
                    PPSU Kelurahan
                  </div>
                  <div className="text-white/80 text-[12px] leading-tight">
                    Sistem Cuti Pegawai
                  </div>
                </div>

                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-ppsu-dark/50 hover:text-white focus-visible:ring-white focus-visible:ring-offset-ppsu focus-visible:ring-2 focus-visible:ring-offset-2"
                  onClick={() => setOpenMobile(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* link nav mobile */}
              <nav className="flex-1 p-4 flex flex-col gap-2 text-base font-semibold">
                {links.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        active
                          ? "flex items-center gap-3 rounded-lg bg-white text-ppsu px-4 py-2 shadow-sm"
                          : "flex items-center gap-3 rounded-lg text-white hover:bg-ppsu-dark/90 hover:text-white px-4 py-2"
                      }
                      onClick={() => setOpenMobile(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* footer drawer */}
              <div className="p-4 border-t border-white/20 text-[11px] text-white/80">
                v1.0 PPSU
              </div>
            </div>
          </div>
        )}

        {/* KONTEN HALAMAN */}
        <main className="flex-1 w-full p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}

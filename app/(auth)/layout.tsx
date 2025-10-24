import "../globals.css";

export const metadata = {
  title: "PPSU Kelurahan | Akses",
  description: "Sistem Cuti Pegawai PPSU - Login / Register",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-gray-900">
      <header className="w-full px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-gray-900">
            PPSU Kelurahan
          </span>
          <span className="text-[11px] text-gray-500">Sistem Cuti Pegawai</span>
        </div>

        <div className="hidden sm:flex flex-col items-end text-right leading-tight">
          <span className="text-[11px] text-gray-400">v1.0 PPSU Internal</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 pb-16">
        {children}
      </main>

      <footer className="text-center text-[11px] text-gray-400 pb-6">
        © {new Date().getFullYear()} PPSU Kelurahan
      </footer>
    </div>
  );
}

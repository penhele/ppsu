export default function HeaderBar() {
    return (
      <header className="h-14 bg-white border-b flex items-center justify-between px-4">
        <div className="font-semibold text-gray-700 text-sm">
          Sistem Cuti Pegawai PPSU
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right leading-tight text-xs">
            <div className="font-semibold text-gray-800">Budi Santoso</div>
            <div className="text-gray-500">Admin</div>
          </div>
          <div className="h-8 w-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-[11px] font-bold">
            BS
          </div>
        </div>
      </header>
    );
  }
  
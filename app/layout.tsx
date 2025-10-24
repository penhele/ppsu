import "./globals.css";

export const metadata = {
  title: "PPSU Kelurahan",
  description: "Sistem Cuti Pegawai PPSU",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[var(--bg-page)] text-gray-900">{children}</body>
    </html>
  );
}

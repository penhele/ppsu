import "@/app/globals.css";

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
      <body>{children}</body>
    </html>
  );
}

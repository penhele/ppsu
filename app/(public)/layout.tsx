import Navbar from "@/components/navbar/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full px-2 md:px-4">
      <Navbar />
      {children}
    </div>
  );
}

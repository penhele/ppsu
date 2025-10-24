import { cn } from "@/lib/utils";

export function Badge({
  className,
  color,
  children,
}: {
  className?: string;
  color?: "pending" | "approved" | "rejected" | "role-admin" | "role-employee";
  children: React.ReactNode;
}) {
  const styles: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    approved: "bg-green-100 text-green-800 border border-green-300",
    rejected: "bg-red-100 text-red-800 border border-red-300",
    "role-admin": "bg-ppsu-soft text-ppsu border border-ppsu/30",
    "role-employee":
      "bg-gray-100 text-gray-700 border border-gray-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-[11px] font-medium leading-none",
        styles[color || "pending"],
        className
      )}
    >
      {children}
    </span>
  );
}

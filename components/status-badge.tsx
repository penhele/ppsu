// StatusBadge.tsx
export function StatusBadge({ status }: { status: string }) {
    const color = {
      PENDING: "bg-yellow-100 text-yellow-700",
      APPROVED: "bg-green-100 text-green-700",
      REJECTED: "bg-red-100 text-red-700",
      CANCELED: "bg-gray-200 text-gray-600",
      ADMIN: "bg-orange-100 text-orange-700",
      EMPLOYEE: "bg-gray-100 text-gray-700",
    }[status] || "bg-gray-100 text-gray-700";
  
    return (
      <span className={`px-2 py-1 rounded-md text-xs font-medium ${color}`}>
        {status}
      </span>
    );
  }
  
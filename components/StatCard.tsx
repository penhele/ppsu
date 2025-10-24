// StatCard.tsx
export function StatCard({ label, value }: { label: string; value: string | number }) {
    return (
      <div className="card text-center">
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-2xl font-bold text-gray-800 mt-1">{value}</div>
      </div>
    );
  }
  
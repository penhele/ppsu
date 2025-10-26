import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PencilLine } from "lucide-react";

export const UpdateButton = ({ id }: { id: string }) => {
  return (
    <Button
      variant={"outline"}
      className="w-8 h-8 border-gray-200 hover:border-gray-500"
    >
      <Link href={`/data-pegawai/edit/${id}`}>
        <PencilLine className="size-4" />
      </Link>
    </Button>
  );
};

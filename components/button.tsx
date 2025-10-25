import { Button } from "@/components/ui/button";
import { deletePegawaiById } from "@/lib/action";
import { PencilLine, Trash } from "lucide-react";
import Link from "next/link";

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteById = deletePegawaiById.bind(null, id);

  return (
    <form action={deleteById}>
      <Button
        variant="outline"
        className="border-red-100 hover:border-red-500 w-8 h-8"
      >
        <Trash className="text-red-500" />
      </Button>
    </form>
  );
};

export const UpdateButton = () => {
  return (
    <Button
      variant={"outline"}
      className="w-8 h-8 border-gray-200 hover:border-gray-500"
    >
      <Link href={"/"}>
        <PencilLine className="size-4" />
      </Link>
    </Button>
  );
};

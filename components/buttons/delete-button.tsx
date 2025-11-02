import { Button } from "@/components/ui/button";
import { deletePegawaiById } from "@/lib/action/pegawai";
import { Trash } from "lucide-react";

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

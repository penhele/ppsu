import { Button } from "@/components/ui/button";
import { deletePegawaiById } from "@/lib/action";
import { Trash } from "lucide-react";

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteById = deletePegawaiById.bind(null, id);

  return (
    <form action={deleteById}>
      <Button
        variant={"outline"}
        className="border-red-100 hover:border-red-500"
      >
        <Trash className="text-red-500" />
      </Button>
    </form>
  );
};

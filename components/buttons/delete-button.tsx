import { Button } from "@/components/ui/button";
import { deletePegawaiById } from "@/lib/action/pegawai";
import { Trash } from "lucide-react";
import { FormEvent, useTransition } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

export const DeleteButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      const result = await deletePegawaiById(id);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  }

  return (
    <Button
      onClick={handleDelete}
      variant="outline"
      className="border-red-100 hover:border-red-500 w-8 h-8 flex gap-2 items-center justify-center"
    >
      {isPending ? (
        <Spinner className="text-red-500" />
      ) : (
        <Trash className="text-red-500" />
      )}
    </Button>
  );
};

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export const DeleteButton = () => {
  return (
    <Button variant={"outline"} className="border-red-100 hover:border-red-500">
      <Trash className="text-red-500" />
    </Button>
  );
};

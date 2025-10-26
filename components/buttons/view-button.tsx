import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ViewButton = () => {
  return (
    <Button
      variant={"outline"}
      className="w-8 h-8 border-gray-200 hover:border-gray-500"
    >
      <Eye />
    </Button>
  );
};

"use client";

import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { approveCutiById } from "@/lib/action";

const AcceptButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();

  const handleApprove = () => {
    startTransition(async () => {
      try {
        await approveCutiById(id);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <Button
      variant="outline"
      onClick={handleApprove}
      className="text-green-700 hover:text-green-800 border-green-200 hover:border-green-500 w-8 h-8"
    >
      <CircleCheck className={isPending ? "animate-spin" : ""} />
    </Button>
  );
};

export default AcceptButton;

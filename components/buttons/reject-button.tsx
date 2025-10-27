"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import { rejectCutiById } from "@/lib/action";

const RejectButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();

  const handleReject = () => {
    startTransition(async () => {
      try {
        await rejectCutiById(id);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <Button
      variant="outline"
      onClick={handleReject}
      className="text-red-700 hover:text-red-800 border-red-200 hover:border-red-500 w-8 h-8"
    >
      <CircleX />
    </Button>
  );
};

export default RejectButton;

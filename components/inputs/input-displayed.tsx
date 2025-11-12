import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const InputDisplayed = ({
  title,
  value,
  isBold = false,
}: {
  title: string;
  value?: string;
  isBold?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-gray-500">{title}</Label>
      <span className={cn("text-sm", { "font-medium": isBold })}>{value}</span>
    </div>
  );
};

export default InputDisplayed;

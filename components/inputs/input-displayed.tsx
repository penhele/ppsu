import { Label } from "@/components/ui/label";

const InputDisplayed = ({
  title,
  value,
}: {
  title: string;
  value?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-gray-500">{title}</Label>
      <span className="text-sm">{value}</span>
    </div>
  );
};

export default InputDisplayed;

import { LucideIcon } from "lucide-react";

const Tableheader = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description?: string;
  Icon?: LucideIcon;
}) => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex gap-2 items-center">
        {Icon ? <Icon className="size-5" /> : null}
        <h1 className="font-medium text-base">{title}</h1>
      </div>

      <span className="text-sm text-gray-500">{description}</span>
    </div>
  );
};

export default Tableheader;

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputText = ({
  title,
  name,
  placeholder,
  type = "text",
  message = [],
  defaultValue,
  readOnly = false,
}: {
  title: string;
  name: string;
  placeholder?: string;
  type?: string;
  message?: string[];
  defaultValue?: string;
  readOnly?: boolean;
}) => {
  const errorMessage = message.length > 0 ? message[0] : "";

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{title}</Label>
      <Input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        readOnly={readOnly}
        className={
          errorMessage ? "border-red-500 focus-visible:ring-red-500" : ""
        }
      />
      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputText;

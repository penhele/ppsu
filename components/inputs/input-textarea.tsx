import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const InputTextarea = ({
  title,
  name,
  placeholder,
  message = [],
  defaultValue,
  readOnly = false,
}: {
  title: string;
  name: string;
  placeholder?: string;
  message?: string[];
  defaultValue?: string;
  readOnly?: boolean;
}) => {
  const errorMessage = message.length > 0 ? message[0] : "";

  return (
    <div className="flex flex-col gap-2">
      <Label>{title}</Label>
      <Textarea
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        defaultValue={defaultValue}
        className="bg-white"
      />
      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputTextarea;

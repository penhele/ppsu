import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
// import { formatCapital } from "@/lib/utils";

export const InputText = ({
  title,
  name,
  type = "text",
  message = [],
}: {
  title: string;
  name: string;
  type?: string;
  message: string[];
}) => {
  const errorMessage = message.length > 0 ? message[0] : "";

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{title}</Label>
      <Input
        id={name}
        type={type}
        name={name}
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

export const SelectOption = ({
  title,
  name,
  placeholder = "Pilih",
  options,
  onChange,
  message = [],
}: {
  title: string;
  name: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  onChange?: (value: string) => void;
  message: string[];
}) => {
  const [selected, setSelected] = useState("");
  const errorMessage = message.length > 0 ? message[0] : "";

  const handleChange = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label>{title}</Label>
      <Select onValueChange={handleChange} value={selected}>
        <SelectTrigger
          className={`w-full ${
            errorMessage ? "border-red-500 focus-visible:ring-red-500" : ""
          }`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <input type="hidden" name={name} value={selected} />
      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

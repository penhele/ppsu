"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InputOption = ({
  title,
  name,
  placeholder = "Pilih",
  options,
  onChange,
  message = [],
  defaultValue,
}: {
  title: string;
  name: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  onChange?: (value: string) => void;
  message?: string[];
  defaultValue?: string;
}) => {
  const [selected, setSelected] = useState(defaultValue ?? "");
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

export default InputOption;

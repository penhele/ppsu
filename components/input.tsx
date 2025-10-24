import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { formatCapital } from "@/lib/utils";

export const InputText = ({
  title,
  name,
  type = "text",
}: {
  title: string;
  name: string;
  type?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>{title}</Label>
      <Input type={type} name={name} />
    </div>
  );
};

export const SelectOption = ({
  title,
  placeholder = "Pilih",
  options,
  onChange,
}: {
  title: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  onChange?: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>{title}</Label>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {formatCapital(item.label)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

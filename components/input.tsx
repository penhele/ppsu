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
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Textarea } from "./ui/textarea";
// import { formatCapital } from "@/lib/utils";

export const InputText = ({
  title,
  name,
  placeholder,
  type = "text",
  message = [],
}: {
  title: string;
  name: string;
  placeholder?: string;
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
        placeholder={placeholder}
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

export const InputTextarea = ({
  title,
  name,
  placeholder,
  message = [],
}: {
  title: string;
  name: string;
  placeholder?: string;
  message: string[];
}) => {
  const errorMessage = message.length > 0 ? message[0] : "";

  return (
    <div className="flex flex-col gap-2">
      <Label>{title}</Label>
      <Textarea name={name} placeholder={placeholder} />
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
  message?: string[];
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

export const SelectDate = ({
  title,
  name,
  message = [],
}: {
  title: string;
  name: string;
  message?: string[];
}) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const errorMessage = message.length > 0 ? message[0] : "";

  return (
    <div className="flex flex-col gap-2">
      <Label>{title}</Label>
      <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className="flex justify-between">
            <span
              className={clsx("font-normal", {
                "text-gray-500": !date,
              })}
            >
              {date
                ? date.toLocaleDateString("en-CA", {
                    timeZone: "Asia/Jakarta",
                  })
                : "Pilih Tanggal"}
            </span>
            <span
              className={`transition-transform duration-200 ${
                openCalendar ? "rotate-90" : "rotate-0"
              }`}
            >
              <ChevronRight className="h-4 w-4" />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpenCalendar(false);
            }}
          />
        </PopoverContent>
      </Popover>
      <input
        name={name}
        type="hidden"
        value={
          date
            ? date.toLocaleDateString("en-CA", {
                timeZone: "Asia/Jakarta",
              })
            : ""
        }
      />
      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

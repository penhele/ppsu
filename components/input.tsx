"use client";

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ChevronDownIcon, ChevronRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { DateRange } from "react-day-picker";
import { formatDate } from "@/lib/utils";

export const InputText = ({
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

export const InputDisplayed = ({
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

export const InputTextarea = ({
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

export const SelectOption = ({
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

export const SelectDate = ({
  title,
  name,
  message = [],
  defaultValue,
}: {
  title: string;
  name: string;
  message?: string[];
  defaultValue?: string;
}) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : undefined,
  );

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

export function SelectRangeDate({
  title,
  placeholder,
  tanggal_mulai,
  tanggal_selesai,
}: {
  title: string;
  placeholder: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
}) {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  return (
    <div className="flex flex-col gap-2">
      <Label>{title}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="dates"
            className="w-56 justify-between font-normal"
          >
            {range?.from && range?.to
              ? `${formatDate(
                  range.from.toLocaleDateString("en-CA", {
                    timeZone: "Asia/Jakarta",
                  }),
                )} - ${formatDate(
                  range.to.toLocaleDateString("en-CA", {
                    timeZone: "Asia/Jakarta",
                  }),
                )}`
              : `${placeholder}`}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="range"
            selected={range}
            captionLayout="label"
            max={5}
            disabled={{
              before: new Date(new Date().setHours(0, 0, 0, 0)),
            }}
            onSelect={(range) => {
              setRange(range);
            }}
          />
        </PopoverContent>
      </Popover>
      <input
        name={tanggal_mulai}
        type="hidden"
        value={
          range?.from
            ? range.from.toLocaleDateString("en-CA", {
                timeZone: "Asia/Jakarta",
              })
            : ""
        }
      />
      <input
        name={tanggal_selesai}
        type="hidden"
        value={
          range?.to
            ? range.to.toLocaleDateString("en-CA", {
                timeZone: "Asia/Jakarta",
              })
            : ""
        }
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const InputSingleDate = ({
  title,
  name,
  message = [],
  defaultValue,
}: {
  title: string;
  name: string;
  message?: string[];
  defaultValue?: Date;
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
            className="bg-white"
          />
        </PopoverContent>
      </Popover>
      <input name={name} type="hidden" value={date ? date.toISOString() : ""} />
      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputSingleDate;

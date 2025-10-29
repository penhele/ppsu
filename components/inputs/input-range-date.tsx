"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const InputRangeDate = ({
  title,
  placeholder,
  tanggal_mulai,
  tanggal_selesai,
}: {
  title: string;
  placeholder: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
}) => {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  return (
    <div className="flex flex-col gap-2">
      <Label>{title}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="dates"
            className="w-full justify-between font-normal"
          >
            {range?.from && range?.to
              ? `${formatDate(range.from)} - ${formatDate(range.to)}`
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
            className="bg-white"
          />
        </PopoverContent>
      </Popover>
      <input
        name={tanggal_mulai}
        type="hidden"
        value={range?.from ? range.from.toISOString() : ""}
      />
      <input
        name={tanggal_selesai}
        type="hidden"
        value={range?.from ? range.from.toISOString() : ""}
      />
    </div>
  );
};

export default InputRangeDate;

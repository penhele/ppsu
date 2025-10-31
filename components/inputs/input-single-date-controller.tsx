"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import clsx from "clsx";
import { formatDate } from "@/lib/utils";

const InputSingleDateController = <T extends FieldValues>({
  title,
  name,
  control,
  defaultValue,
}: {
  title: string;
  name: Path<T>;
  control: Control<T>;
  defaultValue?: Date;
}) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : undefined,
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const dateValue = field.value ? new Date(field.value) : undefined;

        return (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>{title}</FieldLabel>
            <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="flex justify-between">
                  <span
                    className={clsx("font-normal", {
                      "text-gray-500": !date,
                    })}
                  >
                    {date ? formatDate(date) : "Pilih Tanggal"}
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
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpenCalendar(false);
                    field.onChange(date?.toISOString());
                  }}
                  className="bg-white"
                />
              </PopoverContent>
            </Popover>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        );
      }}
    />
  );
};

export default InputSingleDateController;

"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const InputRangeDateComtroller = <T extends FieldValues>({
  title,
  tanggal_mulai,
  tanggal_selesai,
  control,
}: {
  title: string;
  tanggal_mulai: Path<T>;
  tanggal_selesai: Path<T>;
  control: Control<T>;
}) => {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  return (
    <Controller
      name={tanggal_mulai}
      control={control}
      render={({ field: startField }) => (
        <Controller
          name={tanggal_selesai}
          control={control}
          render={({ field: endField, fieldState }) => (
            <Field aria-invalid={fieldState.invalid}>
              <FieldLabel>{title}</FieldLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between font-normal"
                  >
                    {range?.from && range?.to
                      ? `${formatDate(range.from)} - ${formatDate(range.to)}`
                      : "Pilih Tanggal"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="range"
                    selected={range}
                    onSelect={(newRange) => {
                      setRange(newRange);
                      startField.onChange(newRange?.from?.toISOString() || "");
                      endField.onChange(newRange?.to?.toISOString() || "");
                    }}
                    disabled={{
                      before: new Date(new Date().setHours(0, 0, 0, 0)),
                      after: new Date(
                        new Date().setDate(new Date().getDate() + 2),
                      ),
                    }}
                    className="bg-white"
                  />
                </PopoverContent>
              </Popover>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      )}
    />
  );
};

export default InputRangeDateComtroller;

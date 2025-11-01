import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const InputTextController = <T extends FieldValues>({
  title,
  name,
  placeholder = "",
  control,
  isNumeric,
}: {
  title: string;
  name: Path<T>;
  placeholder?: string;
  control: Control<T>;
  isNumeric?: boolean;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{title}</FieldLabel>
          <Input
            {...field}
            value={field.value}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            type={isNumeric ? "number" : "text"}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default InputTextController;

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

const InputTextareaController = <T extends FieldValues>({
  title,
  name,
  placeholder,
  control,
}: {
  title: string;
  name: Path<T>;
  placeholder: string;
  control: Control<T>;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{title}</FieldLabel>
          <Textarea
            {...field}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default InputTextareaController;

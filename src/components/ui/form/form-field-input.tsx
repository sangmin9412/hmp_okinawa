import { Path, type FieldValues, type UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";

type FormFieldInputProps<T extends FieldValues, U> = Omit<InputHTMLAttributes<HTMLInputElement>, "form"> & {
  form: UseFormReturn<T, U, FieldValues | undefined>;
  name: Path<T>;
  label?: string;
  type?: string;
  placeholder?: string;
};

export default function FormFieldInput<T extends FieldValues, U>({
  form,
  name,
  label,
  type,
  placeholder,
  ...props
}: FormFieldInputProps<T, U>) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          return (
            <FormItem>
              {label && <FormLabel>{label}</FormLabel>}
              <FormControl>
                <Input
                  {...field}
                  type={type || "text"}
                  placeholder={placeholder || (label ? label + "..." : "")}
                  {...props}
                />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          );
        }}
      />
    </>
  );
}

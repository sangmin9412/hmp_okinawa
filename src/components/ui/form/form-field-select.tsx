import { ControllerRenderProps, FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label: string;
}

type FormFieldSelectProps<T extends FieldValues, U> = Omit<SelectHTMLAttributes<HTMLSelectElement>, "form"> & {
  form: UseFormReturn<T, U, FieldValues | undefined>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  options: Option[];
  className?: string;
  onValueChange?: (value: string) => void;
};

export default function FormFieldSelect<T extends FieldValues, U>({
  form,
  name,
  label,
  placeholder,
  options,
  className = "",
  onValueChange
}: FormFieldSelectProps<T, U>) {
  const handleChange = (field: ControllerRenderProps<T, (string | undefined) & Path<T>>) => (value: string) => {
    if (value === "none") {
      field.onChange("");
      return;
    }

    field.onChange(value);

    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <Select onValueChange={handleChange(field)} value={field.value}>
              <SelectTrigger
                className={cn(
                  "h-[4rem] px-0 border-0 border-b border-input rounded-none text-[1.3rem] leading-[2rem] lg:text-[1.4rem] lg:leading-[2.2rem]",
                  className
                )}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map(option => (
                  <SelectItem key={`${name}-${option.value}`} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* <FormMessage /> */}
          </FormItem>
        );
      }}
    />
  );
}

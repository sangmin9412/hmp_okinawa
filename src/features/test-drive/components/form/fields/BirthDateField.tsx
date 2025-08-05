import { TestDriveFormData, Option } from "@/features/test-drive/types";
import FormRow from "@/components/ui/form/form-row";
import FormFieldSelect from "@/components/ui/form/form-field-select";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { useWatch } from "react-hook-form";
import { useEffect } from "react";

interface BirthDateFieldProps {
  form: UseFormReturn<TestDriveFormData>;
  birthYearOptions: Option[];
  birthMonthOptions: Option[];
  birthDayOptions: Option[];
}

export default function BirthDateField({
  form,
  birthYearOptions,
  birthMonthOptions,
  birthDayOptions
}: BirthDateFieldProps) {
  const t = useTranslations("form");

  const birthYear = useWatch({
    control: form.control,
    name: "birthYear"
  });
  const birthMonth = useWatch({
    control: form.control,
    name: "birthMonth"
  });
  const birthDay = useWatch({
    control: form.control,
    name: "birthDay"
  });

  useEffect(() => {
    if (birthYear && birthMonth && birthDay) {
      form.setValue("birthDate", `${birthYear}${birthMonth}${birthDay}`, {
        shouldValidate: true
      });
    }
  }, [birthYear, birthMonth, birthDay, form]);

  return (
    <FormRow label={t("label.birth")} required names={["birthDate", "birthYear", "birthMonth", "birthDay"]}>
      <div className='grid grid-cols-3 gap-[1.6rem]'>
        <FormFieldSelect form={form} name='birthYear' placeholder={t("placeholder.year")} options={birthYearOptions} />
        <FormFieldSelect
          form={form}
          name='birthMonth'
          placeholder={t("placeholder.month")}
          options={birthMonthOptions}
        />
        <FormFieldSelect form={form} name='birthDay' placeholder={t("placeholder.day")} options={birthDayOptions} />
      </div>
    </FormRow>
  );
}

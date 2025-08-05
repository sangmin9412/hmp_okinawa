import FormFieldRadioGroup from "@/components/ui/form/form-field-radio-group";
import FormRow from "@/components/ui/form/form-row";
import { ResidenceOption, TestDriveFormData } from "@/features/test-drive/types";
import { UseFormReturn } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";

interface ResidenceFieldProps {
  form: UseFormReturn<TestDriveFormData>;
  residenceTypeOptions: ResidenceOption[];
}

export default function ResidenceField({ form, residenceTypeOptions }: ResidenceFieldProps) {
  const locale = useLocale();
  const t = useTranslations("form");

  if (locale === "jp") {
    return (
      <>
        <FormRow label={t("label.residence")} required names={["residenceType"]}>
          <FormFieldRadioGroup form={form} name='residenceType' options={residenceTypeOptions} />
        </FormRow>
      </>
    );
  }

  return null;
}

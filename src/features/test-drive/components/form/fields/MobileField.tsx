import { TestDriveFormData, Option } from "@/features/test-drive/types";
import FormRow from "@/components/ui/form/form-row";
import FormFieldInput from "@/components/ui/form/form-field-input";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { handleNumericInput, handleNumericPaste } from "@/lib/utils";

interface MobileFieldProps {
  form: UseFormReturn<TestDriveFormData>;
  mobileOptions: Option[];
}

export default function MobileField({ form }: MobileFieldProps) {
  const t = useTranslations("form");

  return (
    <FormRow label={t("label.mobile")} required names={["mobile"]}>
      <FormFieldInput
        form={form}
        name='mobile'
        placeholder={t("placeholder.mobile")}
        minLength={11}
        maxLength={11}
        type='tel'
        pattern='[0-9]*'
        inputMode='numeric'
        onInput={e => {
          const input = e.target as HTMLInputElement;
          const value = handleNumericInput(input.value, 11);
          input.value = value;
          form.setValue("mobile", value, {
            shouldValidate: true
          });
        }}
        onPaste={e => {
          const value = handleNumericPaste(e, 11);
          form.setValue("mobile", value, {
            shouldValidate: true
          });
        }}
      />
    </FormRow>
  );
}

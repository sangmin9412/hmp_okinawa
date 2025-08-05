import FormFieldInput from "@/components/ui/form/form-field-input";
import FormRow from "@/components/ui/form/form-row";
import { TestDriveFormData } from "@/features/test-drive/types";
import { handleEnglishOnlyInput, handleEnglishOnlyPaste, handleTextOnlyInput, handleTextOnlyPaste } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";

interface NameFieldProps {
  form: UseFormReturn<TestDriveFormData>;
}

export default function NameFieldKO({ form }: NameFieldProps) {
  const t = useTranslations("form");

  return (
    <>
      <FormRow label={t("label.name")} required names={["lastNameHurigana", "firstNameHurigana"]}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[1.6rem]'>
          <FormFieldInput
            form={form}
            name='lastNameHurigana'
            placeholder={t("label.last_name_hurigana")}
            onInput={e => {
              const input = e.target as HTMLInputElement;
              const value = handleTextOnlyInput(input.value);
              input.value = value;
              form.setValue("lastNameHurigana", value, {
                shouldValidate: true
              });
            }}
            onPaste={e => {
              const value = handleTextOnlyPaste(e);
              form.setValue("lastNameHurigana", value, {
                shouldValidate: true
              });
            }}
          />
          <FormFieldInput
            form={form}
            name='firstNameHurigana'
            placeholder={t("label.first_name_hurigana")}
            onInput={e => {
              const input = e.target as HTMLInputElement;
              const value = handleTextOnlyInput(input.value);
              input.value = value;
              form.setValue("firstNameHurigana", value, {
                shouldValidate: true
              });
            }}
            onPaste={e => {
              const value = handleTextOnlyPaste(e);
              form.setValue("firstNameHurigana", value, {
                shouldValidate: true
              });
            }}
          />
        </div>
      </FormRow>
      <FormRow label={t("label.name_passport")} required names={["lastName", "firstName"]}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[1.6rem]'>
          <FormFieldInput
            form={form}
            name='lastName'
            placeholder={t("label.last_name")}
            onInput={e => {
              const input = e.target as HTMLInputElement;
              const value = handleEnglishOnlyInput(input.value).toUpperCase();
              input.value = value;
              form.setValue("lastName", value, {
                shouldValidate: true
              });
            }}
            onPaste={e => {
              const value = handleEnglishOnlyPaste(e).toUpperCase();
              form.setValue("lastName", value, {
                shouldValidate: true
              });
            }}
          />
          <FormFieldInput
            form={form}
            name='firstName'
            placeholder={t("label.first_name")}
            onInput={e => {
              const input = e.target as HTMLInputElement;
              const value = handleEnglishOnlyInput(input.value).toUpperCase();
              input.value = value;
              form.setValue("firstName", value, {
                shouldValidate: true
              });
            }}
            onPaste={e => {
              const value = handleEnglishOnlyPaste(e).toUpperCase();
              form.setValue("firstName", value, {
                shouldValidate: true
              });
            }}
          />
        </div>
      </FormRow>
    </>
  );
}

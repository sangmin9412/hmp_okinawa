import FormFieldSelect from "@/components/ui/form/form-field-select";

import FormRow from "@/components/ui/form/form-row";
import { Option, TestDriveFormData } from "@/features/test-drive/types";
import { useLocale, useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";

interface FamilyFieldProps {
  form: UseFormReturn<TestDriveFormData>;
  familyAdultsOptions: Option[];
  familyChildrenOptions: Option[];
}

export default function FamilyField({ form, familyAdultsOptions, familyChildrenOptions }: FamilyFieldProps) {
  const t = useTranslations("form");
  const locale = useLocale();

  if (locale === "ko") {
    return <></>;
  }

  return (
    <>
      <FormRow label={t("family.title")} required names={["family", "togetherAdults", "togetherChildren"]}>
        <div className='flex items-start flex-col lg:items-center lg:flex-row'>
          <p className='lg:flex-[0_0_24rem] text-[1.3rem] lg:text-md'>{t("family.adults")}</p>
          <div className='mt-[1rem] lg:mt-0 flex-1 w-full'>
            <FormFieldSelect
              className='px-[.8rem] border rounded-[.4rem]'
              form={form}
              name='togetherAdults'
              placeholder={t("placeholder.none")}
              options={familyAdultsOptions}
              onValueChange={value => {
                const adults = value;
                const children = form.getValues("togetherChildren") || "0";
                form.setValue("family", `${adults};${children}`, {
                  shouldValidate: true
                });
              }}
            />
          </div>
        </div>
        <div className='mt-[1.6rem] flex items-start flex-col lg:items-center lg:flex-row'>
          <p className='lg:flex-[0_0_24rem] text-[1.3rem] lg:text-md'>{t("family.children")}</p>
          <div className='mt-[1rem] lg:mt-0 flex-1 w-full'>
            <FormFieldSelect
              className='px-[.8rem] border rounded-[.4rem]'
              form={form}
              name='togetherChildren'
              placeholder={t("placeholder.none")}
              options={familyChildrenOptions}
              onValueChange={value => {
                const children = value;
                const adults = form.getValues("togetherAdults") || "1";
                form.setValue("family", `${adults};${children}`, {
                  shouldValidate: true
                });
              }}
            />
          </div>
        </div>
        <input type='hidden' {...form.register("family")} />
      </FormRow>
    </>
  );
}

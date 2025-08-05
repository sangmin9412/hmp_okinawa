import { TestDriveFormData, Option } from "@/features/test-drive/types";
import FormRow from "@/components/ui/form/form-row";
import FormFieldSelect from "@/components/ui/form/form-field-select";
import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { useWatch } from "react-hook-form";
import { useEffect } from "react";
import DotText from "@/components/ui/text/dot-text";

interface TestDrivePeriodFieldProps {
  form: UseFormReturn<TestDriveFormData>;
  testDriveYearOptions: Option[];
  testDriveMonthOptions: Option[];
}

export default function TestDrivePeriodField({
  form,
  testDriveYearOptions,
  testDriveMonthOptions
}: TestDrivePeriodFieldProps) {
  const t = useTranslations("form");

  const testDriveYear = useWatch({
    control: form.control,
    name: "testDriveYear"
  });
  const testDriveMonth = useWatch({
    control: form.control,
    name: "testDriveMonth"
  });

  useEffect(() => {
    if (testDriveYear && testDriveMonth) {
      form.setValue("testDrivePeriod", `${testDriveYear}-${testDriveMonth}`, {
        shouldValidate: true
      });
    }
  }, [testDriveYear, testDriveMonth, form]);

  return (
    <FormRow
      label={t("label.test_drive_period")}
      required
      names={["testDrivePeriod", "testDriveYear", "testDriveMonth"]}
    >
      <div className='grid grid-cols-2 gap-[1.6rem]'>
        <FormFieldSelect
          form={form}
          name='testDriveYear'
          placeholder={t("placeholder.year")}
          options={testDriveYearOptions}
        />
        <FormFieldSelect
          form={form}
          name='testDriveMonth'
          placeholder={t("placeholder.month")}
          options={testDriveMonthOptions}
        />
      </div>
      <DotText className='mt-[1.6rem]'>
        <p>{t("label.test_drive_period_notice")}</p>
      </DotText>
    </FormRow>
  );
}

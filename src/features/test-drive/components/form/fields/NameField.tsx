import NameFieldJP from "@/features/test-drive/components/form/jp/fields/NameField";
import NameFieldKO from "@/features/test-drive/components/form/ko/fields/NameField";
import { TestDriveFormData } from "@/features/test-drive/types";
import { useLocale } from "next-intl";
import { UseFormReturn } from "react-hook-form";

interface NameFieldProps {
  form: UseFormReturn<TestDriveFormData>;
}

const NameFieldMap = {
  ko: NameFieldKO,
  jp: NameFieldJP
};

export default function NameField({ form }: NameFieldProps) {
  const locale = useLocale();

  const NameField = NameFieldMap[locale as keyof typeof NameFieldMap];

  return <NameField form={form} />;
}

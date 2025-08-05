import { UseFormReturn } from "react-hook-form";
import { TestDriveFormData } from "@/features/test-drive/types";
import { useLocale } from "next-intl";
import TermsAgreementFieldKO from "@/features/test-drive/components/form/ko/fields/TermsAgreementField";
import TermsAgreementFieldJP from "@/features/test-drive/components/form/jp/fields/TermsAgreementField";

interface TermsAgreementFieldProps {
  form: UseFormReturn<TestDriveFormData>;
}

const TermsAgreementFieldMap = {
  jp: TermsAgreementFieldJP,
  ko: TermsAgreementFieldKO
};

export default function TermsAgreementField({ form }: TermsAgreementFieldProps) {
  const locale = useLocale();

  const TermsAgreementFieldComponent = TermsAgreementFieldMap[locale as keyof typeof TermsAgreementFieldMap];

  return <TermsAgreementFieldComponent form={form} />;
}

import TestDriveFormJP from "@/features/test-drive/components/form/jp";
import TestDriveFormKO from "@/features/test-drive/components/form/ko";
import { LocaleType } from "@/types";
import { useLocale } from "next-intl";

const TestDriveFormMap = {
  jp: TestDriveFormJP,
  ko: TestDriveFormKO
};

export default function TestDriveForm() {
  const locale = useLocale() as LocaleType;
  const TestDriveForm = TestDriveFormMap[locale];
  return <TestDriveForm />;
}

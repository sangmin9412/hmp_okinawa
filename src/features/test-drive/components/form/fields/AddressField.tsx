import { UseFormReturn } from "react-hook-form";
import { TestDriveFormData } from "@/features/test-drive/types";
import { useTranslations } from "next-intl";
import FormRow from "@/components/ui/form/form-row";
import FormFieldInput from "@/components/ui/form/form-field-input";
import PostalCodeSearchDialog from "@/features/test-drive/components/form/jp/dialogs/PostalCodeSearchDialog";

interface AddressFieldProps {
  form: UseFormReturn<TestDriveFormData>;
}

export default function AddressField({ form }: AddressFieldProps) {
  const t = useTranslations("form");

  return (
    <FormRow label={t("label.address")} required names={["postcode", "address"]}>
      <div className='space-y-4'>
        <div className='flex items-start gap-4'>
          <div className='flex-1'>
            <FormFieldInput form={form} name='postcode' placeholder={t("label.postal_code")} readOnly />
          </div>
          <PostalCodeSearchDialog form={form} />
        </div>
        <FormFieldInput form={form} name='address' placeholder={t("label.address")} readOnly />
      </div>
    </FormRow>
  );
}

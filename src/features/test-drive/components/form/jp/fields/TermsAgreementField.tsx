import { UseFormReturn } from "react-hook-form";
import { TestDriveFormData } from "@/features/test-drive/types";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import PrivacyPolicyDialog, {
  PrivacyPolicyDialogRef
} from "@/features/test-drive/components/form/jp/dialogs/PrivacyPolicyDialog";
import MarketingConsentDialog, {
  MarketingConsentDialogRef
} from "@/features/test-drive/components/form/jp/dialogs/MarketingConsentDialog";

interface TermsAgreementFieldProps {
  form: UseFormReturn<TestDriveFormData>;
}

const MarketingConsentDialogMap = {
  jp: MarketingConsentDialog
};

const PrivacyPolicyDialogMap = {
  jp: PrivacyPolicyDialog
};

export default function TermsAgreementFieldJP({ form }: TermsAgreementFieldProps) {
  const t = useTranslations("form");
  const privacyPolicyDialogRef = useRef<PrivacyPolicyDialogRef>(null);
  const marketingConsentDialogRef = useRef<MarketingConsentDialogRef>(null);

  const PrivacyPolicyDialogComponent = PrivacyPolicyDialogMap["jp"];
  const MarketingConsentDialogComponent = MarketingConsentDialogMap["jp"];

  return (
    <div className='mt-[2.4rem] lg:mt-[5rem] pt-[4rem] border-t border-[#999999]'>
      <div className='flex flex-col gap-[.8rem] lg:gap-[1rem]'>
        <div className='flex items-start lg:items-center justify-between'>
          <div className='flex flex-row items-start'>
            <Checkbox
              id='ccpd'
              className={`${form.formState.errors.cppd ? "border-destructive" : ""}`}
              checked={form.getValues("ccpd") === "True"}
              onCheckedChange={checked => {
                form.setValue("ccpd", checked ? "True" : "False", {
                  shouldValidate: true
                });
              }}
              onClick={e => {
                const isChecked = form.getValues("ccpd") === "True";
                if (!isChecked) {
                  e.preventDefault();
                  privacyPolicyDialogRef.current?.open();
                }
              }}
            />
            <label
              htmlFor='ccpd'
              className={`ml-[.8rem] lg:ml-[1.6rem] my-auto text-[1.2rem] lg:text-[1.6rem] leading-[2rem] lg:leading-[2.4rem] font-normal cursor-pointer`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("label.privacy_required")
                }}
              />
            </label>
          </div>
          <PrivacyPolicyDialogComponent
            trggerRender={() => (
              <button
                type='button'
                className='flex-[0_0_auto] text-[1.3rem] lg:text-[1.6rem] leading-[2.4rem] font-normal cursor-pointer text-[#999] underline'
              >
                {t("label.terms_view")}
              </button>
            )}
            ref={privacyPolicyDialogRef}
            form={form}
          />
        </div>
        <div className='flex items-start lg:items-center justify-between'>
          <div className='flex flex-row items-start'>
            <Checkbox
              id='cppd'
              className={`${form.formState.errors.cppd ? "border-destructive" : ""}`}
              checked={form.getValues("cppd") === "True"}
              onCheckedChange={checked => {
                form.setValue("cppd", checked ? "True" : "False", {
                  shouldValidate: true
                });
              }}
              onClick={e => {
                const isChecked = form.getValues("cppd") === "True";
                if (!isChecked) {
                  e.preventDefault();
                  marketingConsentDialogRef.current?.open();
                }
              }}
            />
            <label
              htmlFor='cppd'
              className={`ml-[.8rem] lg:ml-[1.6rem] my-auto text-[1.2rem] lg:text-[1.6rem] leading-[2rem] lg:leading-[2.4rem] font-normal cursor-pointer`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("label.marketing_required")
                }}
              />
            </label>
          </div>
          <MarketingConsentDialogComponent
            trggerRender={() => (
              <button
                type='button'
                className='flex-[0_0_auto] text-[1.3rem] lg:text-[1.6rem] leading-[2.4rem] font-normal cursor-pointer text-[#999] underline'
              >
                {t("label.terms_view")}
              </button>
            )}
            ref={marketingConsentDialogRef}
            form={form}
          />
        </div>
      </div>
    </div>
  );
}

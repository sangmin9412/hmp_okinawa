import { UseFormReturn } from "react-hook-form";
import { TestDriveFormData } from "@/features/test-drive/types";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { PrivacyPolicyDialogRef } from "@/features/test-drive/components/form/jp/dialogs/PrivacyPolicyDialog";
import { MarketingConsentDialogRef } from "@/features/test-drive/components/form/jp/dialogs/MarketingConsentDialog";
import MarketingConsentDialogKO from "@/features/test-drive/components/form/ko/dialogs/MarketingConsentDialogKO";
import PrivacyPolicyDialogKO from "@/features/test-drive/components/form/ko/dialogs/PrivacyPolicyDialogKO";
import MarketingNoticeDialogKO, {
  MarketingNoticeDialogRef
} from "@/features/test-drive/components/form/ko/dialogs/MarketingNoticeDialogKO";
import EventNoticeDialogKO, {
  EventNoticeDialogRef
} from "@/features/test-drive/components/form/ko/dialogs/EventNoticeDialogKO";

interface TermsAgreementFieldProps {
  form: UseFormReturn<TestDriveFormData>;
}

const MarketingConsentDialogMap = {
  ko: MarketingConsentDialogKO
};

const PrivacyPolicyDialogMap = {
  ko: PrivacyPolicyDialogKO
};

const MarketingNoticeDialogMap = {
  ko: MarketingNoticeDialogKO
};

const EventNoticeDialogMap = {
  ko: EventNoticeDialogKO
};

export default function TermsAgreementFieldKO({ form }: TermsAgreementFieldProps) {
  const t = useTranslations("form");
  const privacyPolicyDialogRef = useRef<PrivacyPolicyDialogRef>(null);
  const marketingConsentDialogRef = useRef<MarketingConsentDialogRef>(null);
  const marketingNoticeDialogRef = useRef<MarketingNoticeDialogRef>(null);
  const eventNoticeDialogRef = useRef<EventNoticeDialogRef>(null);

  const PrivacyPolicyDialogComponent = PrivacyPolicyDialogMap["ko"];
  const MarketingConsentDialogComponent = MarketingConsentDialogMap["ko"];
  const MarketingNoticeDialogComponent = MarketingNoticeDialogMap["ko"];
  const EventNoticeDialogComponent = EventNoticeDialogMap["ko"];

  return (
    <div className='mt-[2.4rem] lg:mt-[5rem] pt-[4rem] border-t border-[#999999]'>
      <div className='flex flex-col gap-[.8rem] lg:gap-[1rem]'>
        <div className='flex items-start lg:items-center justify-between'>
          <div className='flex flex-row items-start space-x-[.8rem] lg:space-x-[1.6rem] space-y-0'>
            <Checkbox
              id='eventConsent'
              className={`${form.formState.errors.eventConsent ? "border-destructive" : ""}`}
              checked={form.getValues("eventConsent") === "True"}
              onCheckedChange={checked => {
                form.setValue("eventConsent", checked ? "True" : "False", {
                  shouldValidate: true
                });
              }}
              onClick={e => {
                const isChecked = form.getValues("eventConsent") === "True";
                if (!isChecked) {
                  e.preventDefault();
                  eventNoticeDialogRef.current?.open();
                }
              }}
            />
            <label
              htmlFor='eventConsent'
              className='text-[1.3rem] lg:text-[1.6rem] leading-[2rem] lg:leading-[2.4rem] font-normal cursor-pointer'
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("label.event_required")
                }}
              />
            </label>
          </div>
          <EventNoticeDialogComponent
            trggerRender={() => (
              <button
                type='button'
                className='ml-[1.6rem] flex-[0_0_auto] text-[1.3rem] lg:text-[1.6rem] leading-[2rem] lg:leading-[2.4rem] font-normal cursor-pointer text-[#999] underline'
              >
                {t("label.terms_view")}
              </button>
            )}
            ref={eventNoticeDialogRef}
            form={form}
          />
        </div>
        <div className='flex items-start lg:items-center justify-between'>
          <div className='flex flex-row items-start space-x-[.8rem] lg:space-x-[1.6rem] space-y-0'>
            <Checkbox
              id='ccpd'
              className={`${form.formState.errors.ccpd ? "border-destructive" : ""}`}
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
              className='text-[1.3rem] lg:text-[1.6rem] leading-[2rem] lg:leading-[2.4rem] font-normal cursor-pointer'
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
                className='ml-[1.6rem] flex-[0_0_auto] text-[1.3rem] lg:text-[1.6rem] leading-[2rem] lg:leading-[2.4rem] font-normal cursor-pointer text-[#999] underline'
              >
                {t("label.terms_view")}
              </button>
            )}
            ref={privacyPolicyDialogRef}
            form={form}
          />
        </div>
        <div className='flex items-start lg:items-center justify-between'>
          <div className='flex flex-row items-start space-x-[.8rem] lg:space-x-[1.6rem] space-y-0'>
            <Checkbox
              id='cppd'
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
              className='text-[1.3rem] lg:text-[1.6rem] leading-[2rem] lg:leading-[2.4rem] font-normal cursor-pointer'
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("label.marketing_optional")
                }}
              />
            </label>
          </div>
          <MarketingConsentDialogComponent
            trggerRender={() => (
              <button
                type='button'
                className='ml-[1.6rem] flex-[0_0_auto] text-[1.3rem] lg:text-[1.6rem] leading-[2rem] lg:leading-[2.4rem] font-normal cursor-pointer text-[#999] underline'
              >
                {t("label.terms_view")}
              </button>
            )}
            ref={marketingConsentDialogRef}
            form={form}
          />
        </div>
        <div className='flex items-start lg:items-center justify-between'>
          <div className='flex flex-row items-start space-x-[.8rem] lg:space-x-[1.6rem] space-y-0'>
            <Checkbox
              id='marketingConsent'
              checked={form.getValues("marketingConsent") === "True"}
              onCheckedChange={checked => {
                form.setValue("marketingConsent", checked ? "True" : "False", {
                  shouldValidate: true
                });
              }}
              onClick={e => {
                const isChecked = form.getValues("marketingConsent") === "True";
                if (!isChecked) {
                  e.preventDefault();
                  marketingNoticeDialogRef.current?.open();
                }
              }}
            />
            <label
              htmlFor='marketingConsent'
              className='text-[1.3rem] lg:text-[1.6rem] leading-[2rem] lg:leading-[2.4rem] font-normal cursor-pointer'
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("label.marketing_consent_optional")
                }}
              />
            </label>
          </div>
          <MarketingNoticeDialogComponent
            trggerRender={() => (
              <button
                type='button'
                className='ml-[1.6rem] flex-[0_0_auto] text-[1.3rem] lg:text-[1.6rem] leading-[2rem] lg:leading-[2.4rem] font-normal cursor-pointer text-[#999] underline'
              >
                {t("label.terms_view")}
              </button>
            )}
            ref={marketingNoticeDialogRef}
            form={form}
          />
        </div>
      </div>
    </div>
  );
}

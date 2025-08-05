import { TestDriveFormData, Option, EmailDomainType } from "@/features/test-drive/types";
import FormRow from "@/components/ui/form/form-row";
import FormFieldInput from "@/components/ui/form/form-field-input";
import FormFieldSelect from "@/components/ui/form/form-field-select";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { Path, UseFormReturn, useWatch } from "react-hook-form";
import DotText from "@/components/ui/text/dot-text";
import { handleDeleteKoreanOnlyInput, handleSpaceOnlyInput } from "@/lib/utils";

interface EmailFieldProps {
  form: UseFormReturn<TestDriveFormData>;
  emailDomainOptions: Option[];
}

export default function EmailField({ form, emailDomainOptions }: EmailFieldProps) {
  const t = useTranslations("form");

  // Watch all email-related fields
  const emailFields = useWatch({
    control: form.control,
    name: [
      "emailId",
      "emailDomain",
      "emailCustomDomain",
      "emailIdConfirm",
      "emailDomainConfirm",
      "emailCustomDomainConfirm"
    ]
  });

  const [emailId, emailDomain, emailCustomDomain, emailIdConfirm, emailDomainConfirm, emailCustomDomainConfirm] =
    emailFields;

  const prevEmailDomain = useRef(emailDomain);
  const prevEmailDomainConfirm = useRef(emailDomainConfirm);

  // Handle email validation and updates
  useEffect(() => {
    // Helper function to update email value
    const updateEmailValue = (
      id: string | undefined,
      domain: EmailDomainType | undefined,
      field: "email" | "emailConfirm"
    ) => {
      if (!id || !domain) return;
      form.setValue(field, `${id}@${domain}`, { shouldValidate: true });
    };

    // Helper function to update custom domain
    const updateCustomDomain = (
      domain: EmailDomainType | undefined,
      field: "emailCustomDomain" | "emailCustomDomainConfirm"
    ) => {
      if (!domain) return;
      // Always set the value: empty for custom, domain value otherwise
      form.setValue(field, domain === "直接入力" ? "" : domain, {
        shouldValidate: true
      });
    };

    // Update primary email
    const currentEmailDomain = emailDomain === "直接入力" ? emailCustomDomain : emailDomain;
    updateEmailValue(emailId, currentEmailDomain as EmailDomainType, "email");

    // Update custom domain when domain selection changes
    if (prevEmailDomain.current !== emailDomain) {
      updateCustomDomain(emailDomain as EmailDomainType, "emailCustomDomain");
      prevEmailDomain.current = emailDomain;
    }

    // Update confirmation email
    const currentEmailDomainConfirm = emailDomainConfirm === "直接入力" ? emailCustomDomainConfirm : emailDomainConfirm;
    updateEmailValue(emailIdConfirm, currentEmailDomainConfirm as EmailDomainType, "emailConfirm");

    // Update custom domain confirm when domain selection changes
    if (prevEmailDomainConfirm.current !== emailDomainConfirm) {
      updateCustomDomain(emailDomainConfirm as EmailDomainType, "emailCustomDomainConfirm");
      prevEmailDomainConfirm.current = emailDomainConfirm;
    }

    // Trigger validation for matching fields
    if (emailId && emailIdConfirm) {
      form.trigger(["emailId", "emailIdConfirm"]);
    }
    if (emailCustomDomain && emailCustomDomainConfirm) {
      form.trigger(["emailCustomDomain", "emailCustomDomainConfirm"]);
    }
  }, [emailId, emailDomain, emailCustomDomain, emailIdConfirm, emailDomainConfirm, emailCustomDomainConfirm, form]);

  const isEmailIdEmpty = Boolean(emailId === "" || emailIdConfirm === "");
  const isEmailCustomDomainEmpty = Boolean(emailCustomDomain === "" || emailCustomDomainConfirm === "");
  const isEmailIdInvalid = Boolean(emailId === emailIdConfirm);
  const isEmailCustomDomainInvalid = Boolean(emailCustomDomain === emailCustomDomainConfirm);

  const isEmailInvalid =
    isEmailIdEmpty || isEmailCustomDomainEmpty || !(isEmailIdInvalid && isEmailCustomDomainInvalid);

  const handleChangeEmailValue = (e: React.ChangeEvent<HTMLInputElement>, name: Path<TestDriveFormData>) => {
    const value = handleSpaceOnlyInput(handleDeleteKoreanOnlyInput(e.target.value));
    form.setValue(name, value.trim(), {
      shouldValidate: true
    });
  };

  return (
    <>
      <FormRow label={t("label.email")} required names={["email", "emailId", "emailCustomDomain", "emailDomain"]}>
        <div className='flex flex-row flex-wrap gap-[1rem] lg:gap-[1.6rem] items-center'>
          <div className='flex-[0_0_100%] lg:flex-1'>
            <FormFieldInput
              form={form}
              name='emailId'
              placeholder={t("placeholder.email_id")}
              onChange={e => handleChangeEmailValue(e, "emailId")}
            />
          </div>
          <span className='flex-[0_0_auto] text-[1.6rem]'>@</span>
          <div className='flex-[0_0_calc(50%-2rem)] lg:flex-1'>
            <FormFieldInput
              form={form}
              name='emailCustomDomain'
              placeholder={t("placeholder.email_domain_custom")}
              readOnly={emailDomain !== "直接入力"}
              onChange={e => handleChangeEmailValue(e, "emailCustomDomain")}
            />
          </div>
          <div className='flex-[0_0_calc(50%-2rem)] lg:flex-1'>
            <FormFieldSelect
              className='px-[.8rem] border rounded-[.4rem]'
              form={form}
              name='emailDomain'
              placeholder={t("placeholder.none")}
              options={emailDomainOptions}
            />
          </div>
        </div>
        <DotText className='mt-[1.6rem]'>
          <p dangerouslySetInnerHTML={{ __html: t.raw("email_notice") }} />
        </DotText>
      </FormRow>
      <FormRow
        label={t("label.email_confirm")}
        required
        names={["emailConfirm", "emailIdConfirm", "emailCustomDomainConfirm", "emailDomainConfirm"]}
      >
        <div className='flex flex-row flex-wrap gap-[1rem] lg:gap-[1.6rem] items-center'>
          <div className='flex-[0_0_100%] lg:flex-1'>
            <FormFieldInput
              form={form}
              name='emailIdConfirm'
              placeholder={t("placeholder.email_id")}
              onChange={e => handleChangeEmailValue(e, "emailIdConfirm")}
            />
          </div>
          <span className='flex-[0_0_auto] text-[1.6rem]'>@</span>
          <div className='flex-[0_0_calc(50%-2rem)] lg:flex-1'>
            <FormFieldInput
              form={form}
              name='emailCustomDomainConfirm'
              placeholder={t("placeholder.email_domain_custom")}
              readOnly={emailDomainConfirm !== "直接入力"}
              onChange={e => handleChangeEmailValue(e, "emailCustomDomainConfirm")}
            />
          </div>
          <div className='flex-[0_0_calc(50%-2rem)] lg:flex-1'>
            <FormFieldSelect
              className='px-[.8rem] border rounded-[.4rem]'
              form={form}
              name='emailDomainConfirm'
              placeholder={t("placeholder.none")}
              options={emailDomainOptions}
            />
          </div>
        </div>
        {isEmailInvalid && (
          <DotText className='mt-[1.6rem] text-destructive after:bg-destructive'>{t("email_confirm_notice")}</DotText>
        )}
      </FormRow>
    </>
  );
}

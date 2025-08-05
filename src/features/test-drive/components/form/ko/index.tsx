"use client";

import { useAlertDialog } from "@/contexts/AlertContext";
import { useCallback, useEffect } from "react";
import { useTestDrive } from "@/features/test-drive/hooks/useTestDrive/ko";
import { useTranslations } from "next-intl";
import { Form } from "@/components/ui/form";
import FormRow from "@/components/ui/form/form-row";
import FormFieldInput from "@/components/ui/form/form-field-input";
import FormFieldSelect from "@/components/ui/form/form-field-select";
import FormFieldRadioGroup from "@/components/ui/form/form-field-radio-group";

import BirthDateField from "@/features/test-drive/components/form/fields/BirthDateField";
import TestDrivePeriodField from "@/features/test-drive/components/form/fields/TestDrivePeriodField";
import EmailField from "@/features/test-drive/components/form/fields/EmailField";
import MobileField from "@/features/test-drive/components/form/fields/MobileField";
import AddressField from "@/features/test-drive/components/form/fields/AddressField";
import TermsAgreementField from "@/features/test-drive/components/form/fields/TermsAgreementField";
import NameField from "@/features/test-drive/components/form/fields/NameField";
import ResidenceField from "@/features/test-drive/components/form/fields/ResidenceField";
import FamilyField from "@/features/test-drive/components/form/fields/FamilyField";
import SubmitButton from "@/features/test-drive/components/form/ko/buttons/SubmitButton";
import IsUsedCarField from "@/features/test-drive/components/form/fields/IsUsedCarField";
import { TestDriveFormData } from "@/features/test-drive/types";
import { FieldErrors } from "react-hook-form";

export default function TestDriveFormKO() {
  const t = useTranslations("form");
  const { open } = useAlertDialog();
  const {
    form,
    formState: { isSubmitting, error },
    isValid,
    onSubmit,
    genderOptions,
    jobOptions,
    residenceTypeOptions,
    isUsedCarOptions,
    plannedCarOptions,
    booleanOptions,
    mobileOptions,
    emailDomainOptions,
    birthYearOptions,
    birthMonthOptions,
    birthDayOptions,
    testDriveYearOptions,
    testDriveMonthOptions,
    carMakerOptions,
    inspectionYearOptions,
    inspectionMonthOptions1,
    inspectionMonthOptions2,
    inspectionMonthOptions3,
    familyAdultsOptions,
    familyChildrenOptions
  } = useTestDrive();

  console.log(form.formState.errors);

  const showAlert = useCallback(
    (description: string) => {
      open({
        description: description,
        onConfirm: () => {}
      });
    },
    [open]
  );

  useEffect(() => {
    if (error) {
      showAlert(error);
    }
  }, [error, showAlert]);

  const handleFormError = useCallback((errors: FieldErrors<TestDriveFormData>) => {
    console.log("errors - ", Object.keys(errors));
    // 첫 번째 에러가 있는 필드로 focus
    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField) {
      const field = document.querySelector(`[data-field^="${firstErrorField}"]`) as HTMLElement;
      if (field) {
        field.setAttribute("tabindex", "0");
        field.scrollIntoView({ behavior: "auto", block: "center" });
        field.focus();
        field.onblur = () => {
          field.removeAttribute("tabindex");
        };
      }
    }
  }, []);

  const handleSubmit = form.handleSubmit(
    data => {
      onSubmit(data);
    },
    errors => handleFormError(errors)
  );

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} translate='no'>
        <div className='flex flex-col gap-[4rem] lg:gap-[4.8rem]'>
          <NameField form={form} />

          <MobileField form={form} mobileOptions={mobileOptions} />

          <EmailField form={form} emailDomainOptions={emailDomainOptions} />

          <AddressField form={form} />

          <BirthDateField
            form={form}
            birthYearOptions={birthYearOptions}
            birthMonthOptions={birthMonthOptions}
            birthDayOptions={birthDayOptions}
          />

          <FormRow label={t("label.gender")} required names={["gender"]}>
            <FormFieldRadioGroup form={form} name='gender' options={genderOptions} />
          </FormRow>

          <FormRow label={t("label.job")} required names={["job", "jobEtc"]}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[1.6rem]'>
              <FormFieldSelect
                className='px-[.8rem] border rounded-[.4rem]'
                form={form}
                name='job'
                placeholder={t("placeholder.none")}
                options={jobOptions}
                onValueChange={value => {
                  if (value !== "その他") {
                    form.setValue("jobEtc", "", { shouldValidate: true });
                  }
                }}
              />
              <FormFieldInput
                form={form}
                name='jobEtc'
                placeholder={t("label.job_etc")}
                disabled={form.watch("job") !== "その他"}
              />
            </div>
          </FormRow>

          <TestDrivePeriodField
            form={form}
            testDriveYearOptions={testDriveYearOptions}
            testDriveMonthOptions={testDriveMonthOptions}
          />

          <ResidenceField form={form} residenceTypeOptions={residenceTypeOptions} />

          <FamilyField
            form={form}
            familyAdultsOptions={familyAdultsOptions}
            familyChildrenOptions={familyChildrenOptions}
          />

          <IsUsedCarField
            form={form}
            isUsedCarOptions={isUsedCarOptions}
            carMakerOptions={carMakerOptions}
            inspectionYearOptions={inspectionYearOptions}
            inspectionMonthOptions1={inspectionMonthOptions1}
            inspectionMonthOptions2={inspectionMonthOptions2}
            inspectionMonthOptions3={inspectionMonthOptions3}
          />

          <FormRow
            labelClassName='[&_br]:hidden lg:[&_br]:block lg:pt-0'
            label={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("label.planned_car")
                }}
              />
            }
            required
            names={["plannedCar"]}
          >
            <FormFieldRadioGroup form={form} name='plannedCar' options={plannedCarOptions} />
          </FormRow>

          <FormRow
            labelClassName='[&_br]:hidden lg:[&_br]:block lg:pt-0'
            label={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("label.planned_car_ev")
                }}
              />
            }
            required
            names={["plannedCarEV"]}
          >
            <FormFieldRadioGroup form={form} name='plannedCarEV' options={booleanOptions} />
          </FormRow>
        </div>

        <TermsAgreementField form={form} />

        <p className='lg:mt-[5.6rem] mt-[4rem] lg:text-[1.6rem] text-[1.4rem] lg:leading-[2.6rem] leading-[2.2rem] font-[500] text-[#002b5f] text-center'>
          현대 모빌리티 패스포트 in 오키나와 혜택과
          <br className='mo-only' /> 주요 안내 사항 확인을 위해
          <br className='mo-only' /> <span className='underline underline-offset-4'>카카오톡 채널을 꼭 추가</span>해
          주세요!
        </p>

        <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
      </form>
    </Form>
  );
}

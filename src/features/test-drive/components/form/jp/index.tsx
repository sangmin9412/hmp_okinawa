"use client";

import { useAlertDialog } from "@/contexts/AlertContext";
import { useCallback, useEffect } from "react";
import { useTestDrive } from "@/features/test-drive/hooks/useTestDrive/jp";
import { useTranslations } from "next-intl";
import { Form } from "@/components/ui/form";
import FormRow from "@/components/ui/form/form-row";
import FormFieldRadioGroup from "@/components/ui/form/form-field-radio-group";

import TestDrivePeriodField from "@/features/test-drive/components/form/fields/TestDrivePeriodField";
import EmailField from "@/features/test-drive/components/form/fields/EmailField";
import MobileField from "@/features/test-drive/components/form/fields/MobileField";
import AddressField from "@/features/test-drive/components/form/fields/AddressField";
import TermsAgreementField from "@/features/test-drive/components/form/fields/TermsAgreementField";
import NameField from "@/features/test-drive/components/form/fields/NameField";
import ResidenceField from "@/features/test-drive/components/form/fields/ResidenceField";
import FamilyField from "@/features/test-drive/components/form/fields/FamilyField";
import SubmitButton from "@/features/test-drive/components/form/jp/buttons/SubmitButton";

import IsUsedCarField from "@/features/test-drive/components/form/fields/IsUsedCarField";
import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";
import { useScrollToContent } from "@/hooks/useScrollToContent";
import { TestDriveFormData } from "@/features/test-drive/types";
import { FieldErrors } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import BirthDateField from "@/features/test-drive/components/form/fields/BirthDateField";
import FormFieldSelect from "@/components/ui/form/form-field-select";
import FormFieldInput from "@/components/ui/form/form-field-input";

export default function TestDriveFormJP() {
  const { step } = useMultiStepFormContext();

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currentPath = pathname;
    router.replace(`${currentPath}?step=${step}`);
  }, [step, pathname, router]);

  return (
    <>
      {step === 1 && <StepOneSection />}
      {step === 2 && <StepTwoSection />}
      {step === 3 && <StepThreeSection />}
    </>
  );
}

const StepOneSection = () => {
  const { nextStep, updateFormData } = useMultiStepFormContext();
  const { open } = useAlertDialog();
  const scrollToContent = useScrollToContent();
  const {
    step: {
      "1": { form, isValid }
    },
    formState: { isSubmitting, error },
    mobileOptions,
    emailDomainOptions,
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

  const handleFormError = useCallback((errors: FieldErrors<TestDriveFormData>) => {
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

  useEffect(() => {
    if (error) {
      showAlert(error);
    }
  }, [error, showAlert]);

  const onSubmit = form.handleSubmit(
    data => {
      console.log(data);
      updateFormData(data);
      nextStep();
      scrollToContent();
    },
    errors => handleFormError(errors)
  );

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} translate='no'>
        <div className='flex flex-col gap-[4rem] lg:gap-[4.8rem]'>
          <NameField form={form} />

          <MobileField form={form} mobileOptions={mobileOptions} />

          <EmailField form={form} emailDomainOptions={emailDomainOptions} />
        </div>

        <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
      </form>
    </Form>
  );
};

const StepTwoSection = () => {
  const { nextStep, updateFormData } = useMultiStepFormContext();
  const { open } = useAlertDialog();
  const scrollToContent = useScrollToContent();
  const {
    step: {
      "2": { form, isValid }
    },
    formState: { isSubmitting, error },
    familyAdultsOptions,
    familyChildrenOptions,
    residenceTypeOptions
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

  const handleFormError = useCallback((errors: FieldErrors<TestDriveFormData>) => {
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

  useEffect(() => {
    if (error) {
      showAlert(error);
    }
  }, [error, showAlert]);

  const onSubmit = form.handleSubmit(
    data => {
      console.log(data);
      updateFormData(data);
      nextStep();
      scrollToContent();
    },
    errors => handleFormError(errors)
  );

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} translate='no'>
        <div className='flex flex-col gap-[4rem] lg:gap-[4.8rem]'>
          <AddressField form={form} />

          <ResidenceField form={form} residenceTypeOptions={residenceTypeOptions} />

          <FamilyField
            form={form}
            familyAdultsOptions={familyAdultsOptions}
            familyChildrenOptions={familyChildrenOptions}
          />
        </div>

        <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
      </form>
    </Form>
  );
};

const StepThreeSection = () => {
  const { formData } = useMultiStepFormContext();
  const commonT = useTranslations("common");
  const t = useTranslations("form");
  const { open } = useAlertDialog();

  const {
    step: {
      "3": { form, isValid }
    },
    formState: { isSubmitting, error },
    testDriveYearOptions,
    testDriveMonthOptions,
    isUsedCarOptions,
    carMakerOptions,
    inspectionYearOptions,
    inspectionMonthOptions1,
    inspectionMonthOptions2,
    inspectionMonthOptions3,
    plannedCarOptions,
    booleanOptions,
    birthYearOptions,
    birthMonthOptions,
    birthDayOptions,
    genderOptions,
    jobOptions,
    onSubmit: onSubmitTestDrive,
    onSubmitCheck: onSubmitTestDriveCheck
  } = useTestDrive();

  console.log(form.formState.errors);

  const showAlert = useCallback(
    (description: string, onConfirm: () => void = () => {}) => {
      open({
        description: description,
        onConfirm: onConfirm
      });
    },
    [open]
  );

  const handleFormError = useCallback((errors: FieldErrors<TestDriveFormData>) => {
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

  useEffect(() => {
    if (error) {
      showAlert(error);
    }
  }, [error, showAlert]);

  const onSubmit = form.handleSubmit(
    async data => {
      try {

        console.log({
          ...formData,
          ...data
        })

        const check = await onSubmitTestDriveCheck({
          ...formData,
          ...data
        });

        if (check?.success) {
          showAlert(commonT.raw("message.test_drive_complete"), () => {
            onSubmitTestDrive({
              ...formData,
              ...data
            });
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    errors => handleFormError(errors)
  );

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} translate='no'>
        <div className='flex flex-col gap-[4rem] lg:gap-[4.8rem]'>
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

        <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
      </form>
    </Form>
  );
};

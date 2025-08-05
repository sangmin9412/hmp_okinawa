import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { getTestDriveSchema } from "@/features/test-drive/components/form/validation";
import { submitTestDrive } from "@/features/test-drive/api/testDriveApi";
import type { TestDriveFormData, TestDriveFormRequest } from "@/features/test-drive/types";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { LocaleType } from "@/types";
import { useLocale } from "next-intl";
import { useTestDriveOptions } from "@/features/test-drive/hooks/useTestDrive/options";

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  couponCode?: string;
}

export function useTestDrive() {
  const router = useRouter();
  const commonT = useTranslations("common");
  const locale = useLocale() as LocaleType;
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const form = useForm<TestDriveFormData>({
    resolver: zodResolver(getTestDriveSchema(locale).fullSchema),
    defaultValues: {
      emailId: "",
      emailIdConfirm: "",
      emailDomain: "",
      emailDomainConfirm: "",
      emailCustomDomain: "",
      emailCustomDomainConfirm: "",
      currentVehicleBrand1: "",
      currentVehicleModel1: "",
      inspectionExpirationYear1: "",
      inspectionExpirationMonth1: "",
      currentVehicleBrand2: "",
      currentVehicleModel2: "",
      inspectionExpirationYear2: "",
      inspectionExpirationMonth2: "",
      currentVehicleBrand3: "",
      currentVehicleModel3: "",
      inspectionExpirationYear3: "",
      inspectionExpirationMonth3: "",
      togetherAdults: "",
      togetherChildren: "",
      country: locale
    },
    mode: "onChange"
  });

  const { isValid } = form.formState;

  const options = useTestDriveOptions({ form });

  const onSubmit = async (data: TestDriveFormData) => {
    try {
      setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));

      // Concatenate mobile number parts
      // const mobileNumber = `${data.mobilePrefix}${data.mobileMiddle}${data.mobileLast}`;
      const mobileNumber = data.mobile;
      // Combine email parts
      const emailDomain = data.emailDomain === "直接入力" ? data.emailCustomDomain : data.emailDomain;
      const email = `${data.emailId}@${emailDomain}`;

      // Combine birth date parts
      const birthDate = `${data.birthYear}${data.birthMonth}${data.birthDay}`;

      // Combine test drive period parts
      const testDrivePeriod = `${data.testDriveYear}-${data.testDriveMonth}`;

      // Combine inspection expiration dates
      const inspectionExpirationDate1 =
        data.inspectionExpirationYear1 && data.inspectionExpirationMonth1
          ? `${data.inspectionExpirationYear1}${data.inspectionExpirationMonth1}`
          : "";
      const inspectionExpirationDate2 =
        data.inspectionExpirationYear2 && data.inspectionExpirationMonth2
          ? `${data.inspectionExpirationYear2}${data.inspectionExpirationMonth2}`
          : "";
      const inspectionExpirationDate3 =
        data.inspectionExpirationYear3 && data.inspectionExpirationMonth3
          ? `${data.inspectionExpirationYear3}${data.inspectionExpirationMonth3}`
          : "";

      const togetherAdults = Number(data.togetherAdults);
      const togetherChildren = Number(data.togetherChildren);

      const submissionData = {
        ...data,
        mobile: mobileNumber,
        email,
        birthDate,
        testDrivePeriod,
        inspectionExpirationDate1,
        inspectionExpirationDate2,
        inspectionExpirationDate3,
        togetherAdults,
        togetherChildren
      };

      const response = await submitTestDrive(submissionData as TestDriveFormRequest, commonT);

      if (!response.success) {
        setFormState(prev => ({
          ...prev,
          error: response.message,
          isSubmitting: false
        }));
        return;
      }

      // Redirect immediately after successful submission
      const queryParams = new URLSearchParams();
      if (response.couponCode) {
        queryParams.append("couponCode", response.couponCode);
        if (response.couponStartDt) {
          queryParams.append("couponStartDt", encodeURIComponent(response.couponStartDt));
        }
        if (response.couponEndDt) {
          queryParams.append("couponEndDt", encodeURIComponent(response.couponEndDt));
        }
      }
      const queryString = queryParams.toString();
      router.push(`/${locale}/complete${queryString ? `?${queryString}` : ""}`);
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : "An error occurred"
      }));
    }
  };

  return {
    form,
    formState,
    isValid,
    resetFormState: () => setFormState({ isSubmitting: false, isSuccess: false, error: null }),
    onSubmit: onSubmit,
    ...options
  };
}

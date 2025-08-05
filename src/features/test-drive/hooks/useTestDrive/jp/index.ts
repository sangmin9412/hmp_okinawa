import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { getTestDriveSchema } from "@/features/test-drive/components/form/validation";
import type { TestDriveFormData } from "@/features/test-drive/types";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { LocaleType } from "@/types";
import { useLocale } from "next-intl";
import { useTestDriveOptions } from "@/features/test-drive/hooks/useTestDrive/options";
import { decodeEventUserId } from "@/lib/crypto";
interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  couponCode?: string;
}

export function useTestDrive() {
  const params = useParams();
  const router = useRouter();
  const commonT = useTranslations("common");
  const locale = useLocale() as LocaleType;
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const userInfo: Record<string, string> = {};

  if (params?.user) {
    try {
      const _userInfo = decodeEventUserId(decodeURIComponent(params?.user as string), process.env.CRYPTO_KEY || '') as Record<string, string>;
      userInfo.userId = _userInfo.userId;
    } catch (error) {
      console.log('[useTestDrive decodeEventUserId error]', error);
    }
  }

  const { stepOneSchema, stepTwoSchema, stepThreeSchema } = getTestDriveSchema(locale);

  const stepOneForm = useForm<TestDriveFormData>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      firstNameHurigana: "",
      lastNameHurigana: "",
      mobile: "",
      email: "",
      emailConfirm: "",
      emailId: "",
      emailIdConfirm: "",
      emailDomain: "",
      emailDomainConfirm: "",
      emailCustomDomain: "",
      emailCustomDomainConfirm: "",
      country: locale
    },
    mode: "onChange",
    criteriaMode: "all"
  });

  const stepTwoForm = useForm<TestDriveFormData>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      address: "",
      postcode: "",
      state: "",
      city: "",
      street: "",
      residenceType: "",
      family: "",
      togetherAdults: "",
      togetherChildren: "",
      country: locale
    },
    mode: "onChange",
    criteriaMode: "all"
  });

  const stepThreeForm = useForm<TestDriveFormData>({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: {
      testDrivePeriod: "",
      testDriveYear: "",
      testDriveMonth: "",
      isUsedCar: "",
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
      job: "",
      jobEtc: "",
      country: locale,
      userId: userInfo?.userId || ""
    },
    mode: "onChange",
    criteriaMode: "all"
  });

  const options = useTestDriveOptions({ form: stepThreeForm });

  const onSubmitCheck = async (data: TestDriveFormData) => {
    try {
      setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));

      console.log('onSubmitCheck data - ', data);

      // 1. 중복 참여 검증
      // const duplicationCheck = await checkDuplicateParticipation({
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      //   email: data.email,
      //   mobile: data.mobile
      // });

      // if (duplicationCheck.data[0].dupl >= 1) {
      //   setFormState(prev => ({
      //     ...prev,
      //     isSubmitting: false,
      //     error: commonT.raw("message.duplicate_participation")
      //   }));
      //   return {
      //     success: false
      //   };
      // }

      // 2. 쿠폰 수량 확인
      // const remainCount = await getCouponRemainCount(data.country as LocaleType);
      // if (remainCount.data[0].count <= 0) {
      //   setFormState(prev => ({
      //     ...prev,
      //     isSubmitting: false,
      //     error: commonT.raw("message.coupon_sold_out")
      //   }));
      //   return {
      //     success: false
      //   };
      // }

      return {
        success: true
      };
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        error: error instanceof Error ? error.message : commonT.raw("message.api_error")
      }));
    }
  };

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

      console.log('onSubmit submissionData - ', submissionData);

      // const response = await submitTestDrive(submissionData as TestDriveFormRequest, commonT);

      // if (!response.success) {
      //   setFormState(prev => ({
      //     ...prev,
      //     error: response.message,
      //     isSubmitting: false
      //   }));
      //   return;
      // }

      // Redirect immediately after successful submission
      const queryParams = new URLSearchParams();
      // if (response.couponCode) {
      //   queryParams.append("couponCode", response.couponCode);
      //   if (response.couponStartDt) {
      //     queryParams.append("couponStartDt", encodeURIComponent(response.couponStartDt));
      //   }
      //   if (response.couponEndDt) {
      //     queryParams.append("couponEndDt", encodeURIComponent(response.couponEndDt));
      //   }
      // }

      queryParams.append("couponCode", "1234567890");
      queryParams.append("couponStartDt", encodeURIComponent("2025-01-01"));
      queryParams.append("couponEndDt", encodeURIComponent("2025-12-31"));

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
    step: {
      "1": {
        form: stepOneForm,
        isValid: stepOneForm.formState.isValid
      },
      "2": {
        form: stepTwoForm,
        isValid: stepTwoForm.formState.isValid
      },
      "3": {
        form: stepThreeForm,
        isValid: stepThreeForm.formState.isValid
      }
    },
    formState,
    resetFormState: () => setFormState({ isSubmitting: false, isSuccess: false, error: null }),
    onSubmit,
    onSubmitCheck,
    ...options
  };
}

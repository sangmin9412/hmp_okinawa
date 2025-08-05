import { z } from "zod";
import {
  BooleanTypes,
  CarMakerTypes,
  EmailDomainTypes,
  GenderTypes,
  IsUsedCarTypes,
  JobTypes,
  PlannedCarTypes,
  ResidenceTypes
} from "@/features/test-drive/types";
import { LocaleType } from "@/types";

// 기본 스키마 정의
const baseSchema = {
  firstName: z.string().min(1, "성을 입력해주세요"),
  lastName: z.string().min(1, "이름을 입력해주세요"),
  firstNameHurigana: z.string().min(1),
  lastNameHurigana: z.string().min(1),
  mobile: z.string().min(11, "전화번호를 입력해주세요"),
  email: z.string().min(1, "이메일을 입력해주세요").email("올바른 이메일 형식이 아닙니다"),
  emailConfirm: z.string().min(1, "이메일 확인을 입력해주세요").email("올바른 이메일 형식이 아닙니다"),
  emailId: z.string().min(1, "이메일 아이디를 입력해주세요"),
  emailIdConfirm: z.string().min(1, "이메일 아이디 확인을 입력해주세요"),
  emailDomain: z.enum(EmailDomainTypes, { message: "이메일 도메인을 선택해주세요" }),
  emailDomainConfirm: z.enum(EmailDomainTypes, { message: "이메일 도메인 확인을 선택해주세요" }),
  emailCustomDomain: z.string().optional(),
  emailCustomDomainConfirm: z.string().optional(),
  address: z.string().min(1, "주소를 입력해주세요"),
  postcode: z.string().min(1, "우편번호를 입력해주세요"),
  state: z.string().min(1, "주를 선택해주세요"),
  city: z.string().min(1, "시를 선택해주세요"),
  street: z.string().min(1, "도로명을 입력해주세요"),
  birthDate: z.string().min(1, "생년월일을 입력해주세요"),
  birthYear: z.string().min(1, "출생년도를 선택해주세요"),
  birthMonth: z.string().min(1, "출생월을 선택해주세요"),
  birthDay: z.string().min(1, "출생일을 선택해주세요"),
  gender: z.enum(GenderTypes, { message: "성별을 선택해주세요" }),
  job: z.enum(JobTypes, { message: "직업을 선택해주세요" }),
  jobEtc: z.string().optional(),
  testDrivePeriod: z.string().min(1, "시승 희망 시기를 선택해주세요"),
  testDriveYear: z.string().min(1, "시승 희망 년도를 선택해주세요"),
  testDriveMonth: z.string().min(1, "시승 희망 월을 선택해주세요"),
  residenceType: z.enum(ResidenceTypes).optional(),
  family: z.string().optional(),
  togetherAdults: z.string().optional(),
  togetherChildren: z.string().optional(),
  isUsedCar: z.enum(IsUsedCarTypes, { message: "보유 차량 여부를 선택해주세요" }),
  currentVehicleBrand1: z.enum([...CarMakerTypes, ""], { message: "제조사를 선택해주세요" }).optional(),
  currentVehicleModel1: z.string().optional(),
  inspectionExpirationYear1: z.string().optional(),
  inspectionExpirationMonth1: z.string().optional(),
  currentVehicleBrand2: z.enum([...CarMakerTypes, ""], { message: "제조사를 선택해주세요" }).optional(),
  currentVehicleModel2: z.string().optional(),
  inspectionExpirationYear2: z.string().optional(),
  inspectionExpirationMonth2: z.string().optional(),
  currentVehicleBrand3: z.enum([...CarMakerTypes, ""], { message: "제조사를 선택해주세요" }).optional(),
  currentVehicleModel3: z.string().optional(),
  inspectionExpirationYear3: z.string().optional(),
  inspectionExpirationMonth3: z.string().optional(),
  plannedCar: z.enum(PlannedCarTypes, { message: "구매 예정 시기를 선택해주세요" }),
  plannedCarEV: z.enum(BooleanTypes, { message: "전기차 구매 의향을 선택해주세요" }),
  ccpd: z.string().refine(val => val === "True", {
    message: "개인정보 수집 및 이용에 동의해주세요"
  }),
  cppd: z.string().optional(),
  eventConsent: z.string().optional(),
  marketingConsent: z.string().optional(),
  country: z.string(),
  userId: z.string().optional()
};

// 이메일 도메인 형식 검증을 위한 정규식
const emailDomainRegex = /^[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

// 국가별 필수 필드 정의
const countrySpecificFields = {
  ko: {
    eventConsent: z.string().refine(val => val === "True", {
      message: "이벤트 참여에 동의해주세요"
    })
    // marketingConsent: z.string().refine(val => val === "True", {
    //   message: "광고성 정보 수신에 동의해주세요"
    // }),
  },
  jp: {
    residenceType: z.enum(ResidenceTypes, { message: "거주 형태를 선택해주세요" }),
    family: z.string().min(1, "가족 구성원을 선택해주세요"),
    togetherAdults: z.string().min(1, "성인 인원수를 선택해주세요"),
    togetherChildren: z.string().min(1, "어린이 인원수를 선택해주세요"),
    cppd: z.string().refine(val => val === "True", {
      message: "마케팅 정보 수신에 동의해주세요"
    })
  }
};

// 스키마 생성 함수
const createTestDriveSchema = (country: LocaleType) => {
  // 기본 스키마에 국가별 필수 필드 추가
  const schemaFields = baseSchema;

  // 국가별 필수 필드 추가
  if (country === "ko" && countrySpecificFields.ko) {
    Object.assign(schemaFields, countrySpecificFields.ko);
  } else if (country === "jp" && countrySpecificFields.jp) {
    Object.assign(schemaFields, countrySpecificFields.jp);
  }

  // 기본 스키마 객체 생성
  const baseSchemaObject = z.object(schemaFields);

  return createTestDriveSchemaValidation(baseSchemaObject);
};

const createTestDriveSchemaValidation = (baseSchemaObject: z.ZodObject<typeof baseSchema>) => {
  const stepOneSchema = baseSchemaObject
    .pick({
      firstName: true,
      lastName: true,
      firstNameHurigana: true,
      lastNameHurigana: true,
      mobile: true,
      email: true,
      emailConfirm: true,
      emailId: true,
      emailIdConfirm: true,
      emailDomain: true,
      emailDomainConfirm: true,
      emailCustomDomain: true,
      emailCustomDomainConfirm: true,
      country: true
    })
    .superRefine((data, ctx) => {
      // Email custom domain validation
      if (data.emailDomain === "直接入力") {
        if (!data.emailCustomDomain) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "이메일 도메인을 입력해주세요",
            path: ["emailCustomDomain"]
          });
        } else if (!emailDomainRegex.test(data.emailCustomDomain)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "올바른 도메인 형식이 아닙니다 (예: example.com)",
            path: ["emailCustomDomain"]
          });
        }
      }

      if (data.emailDomainConfirm === "直接入力") {
        if (!data.emailCustomDomainConfirm) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "이메일 도메인 확인을 입력해주세요",
            path: ["emailCustomDomainConfirm"]
          });
        } else if (!emailDomainRegex.test(data.emailCustomDomainConfirm)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "올바른 도메인 형식이 아닙니다 (예: example.com)",
            path: ["emailCustomDomainConfirm"]
          });
        }
      }

      // Email confirmation validation
      if (data.emailId && data.emailIdConfirm) {
        if (data.emailId !== data.emailIdConfirm) {
          ["emailId", "emailIdConfirm"].forEach(path => {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "이메일이 일치하지 않습니다",
              path: [path]
            });
          });
        }
      }

      // Email domain confirmation validation
      if (data.emailCustomDomain && data.emailCustomDomainConfirm) {
        if (data.emailCustomDomain !== data.emailCustomDomainConfirm) {
          ["emailCustomDomain", "emailCustomDomainConfirm"].forEach(path => {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "이메일이 일치하지 않습니다",
              path: [path]
            });
          });
        }
      }
    });

  const stepTwoSchema = baseSchemaObject.pick({
    address: true,
    postcode: true,
    state: true,
    city: true,
    street: true,
    residenceType: true,
    family: true,
    togetherAdults: true,
    togetherChildren: true,
    country: true
  });

  const stepThreeSchema = baseSchemaObject
    .pick({
      birthDate: true,
      birthYear: true,
      birthMonth: true,
      birthDay: true,
      gender: true,
      job: true,
      jobEtc: true,
      testDrivePeriod: true,
      testDriveYear: true,
      testDriveMonth: true,
      isUsedCar: true,
      currentVehicleBrand1: true,
      currentVehicleModel1: true,
      inspectionExpirationYear1: true,
      inspectionExpirationMonth1: true,
      currentVehicleBrand2: true,
      currentVehicleModel2: true,
      inspectionExpirationYear2: true,
      inspectionExpirationMonth2: true,
      currentVehicleBrand3: true,
      currentVehicleModel3: true,
      inspectionExpirationYear3: true,
      inspectionExpirationMonth3: true,
      plannedCar: true,
      plannedCarEV: true,
      ccpd: true,
      cppd: true,
      country: true,
      userId: true
    })
    .superRefine((data, ctx) => {
      // Job etc validation
      if (data.job === "その他") {
        if (!data.jobEtc) {
          console.log("jobEtc error", data.jobEtc);
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "기타 직업을 입력해주세요",
            path: ["jobEtc"]
          });
        }
      }

      // No car case - no validation needed
      if (data.isUsedCar === "No") {
        return;
      }

      // Single car case
      if (data.isUsedCar === "Yes_Single") {
        if (!data.currentVehicleBrand1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "제조사를 선택해주세요",
            path: ["currentVehicleBrand1"]
          });
        }
        if (!data.currentVehicleModel1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "모델명을 입력해주세요",
            path: ["currentVehicleModel1"]
          });
        }

        // 일본 정기점검 필수 필드 검증
        if (data.country === "jp") {
          if (!data.inspectionExpirationYear1) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "년도를 선택해주세요",
              path: ["inspectionExpirationYear1"]
            });
          }
          if (!data.inspectionExpirationMonth1) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "월을 선택해주세요",
              path: ["inspectionExpirationMonth1"]
            });
          }
        }
      }

      // Multiple cars case
      if (data.isUsedCar === "Yes_Multi") {
        // First car validation
        if (!data.currentVehicleBrand1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "제조사를 선택해주세요",
            path: ["currentVehicleBrand1"]
          });
        }
        if (!data.currentVehicleModel1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "모델명을 입력해주세요",
            path: ["currentVehicleModel1"]
          });
        }
        if (!data.inspectionExpirationYear1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "년도를 선택해주세요",
            path: ["inspectionExpirationYear1"]
          });
        }
        if (!data.inspectionExpirationMonth1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "월을 선택해주세요",
            path: ["inspectionExpirationMonth1"]
          });
        }

        // Second car validation
        if (!data.currentVehicleBrand2) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "제조사를 선택해주세요",
            path: ["currentVehicleBrand2"]
          });
        }
        if (!data.currentVehicleModel2) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "모델명을 입력해주세요",
            path: ["currentVehicleModel2"]
          });
        }
        if (!data.inspectionExpirationYear2) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "년도를 선택해주세요",
            path: ["inspectionExpirationYear2"]
          });
        }
        if (!data.inspectionExpirationMonth2) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "월을 선택해주세요",
            path: ["inspectionExpirationMonth2"]
          });
        }

        // Third car validation - only validate if any field is filled
        const hasAnyThirdCarInfo =
          data.currentVehicleBrand3 ||
          data.currentVehicleModel3 ||
          data.inspectionExpirationYear3 ||
          data.inspectionExpirationMonth3;

        if (hasAnyThirdCarInfo) {
          console.log("hasAnyThirdCarInfo", hasAnyThirdCarInfo);
          if (!data.currentVehicleBrand3) {
            console.log("data.currentVehicleBrand3", data.currentVehicleBrand3);
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "제조사를 선택해주세요",
              path: ["currentVehicleBrand3"]
            });
          }
          if (!data.currentVehicleModel3) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "모델명을 입력해주세요",
              path: ["currentVehicleModel3"]
            });
          }
          if (!data.inspectionExpirationYear3) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "년도를 선택해주세요",
              path: ["inspectionExpirationYear3"]
            });
          }
          if (!data.inspectionExpirationMonth3) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "월을 선택해주세요",
              path: ["inspectionExpirationMonth3"]
            });
          }
        }
      }
    });

  // 전체 스키마 검증
  const fullSchema = baseSchemaObject.superRefine((data, ctx) => {
    // Job etc validation
    if (data.job === "その他") {
      if (!data.jobEtc) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "기타 직업을 입력해주세요",
          path: ["jobEtc"]
        });
      }
    }

    // Email custom domain validation
    if (data.emailDomain === "直接入力") {
      if (!data.emailCustomDomain) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "이메일 도메인을 입력해주세요",
          path: ["emailCustomDomain"]
        });
      } else if (!emailDomainRegex.test(data.emailCustomDomain)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "올바른 도메인 형식이 아닙니다 (예: example.com)",
          path: ["emailCustomDomain"]
        });
      }
    }

    if (data.emailDomainConfirm === "直接入力") {
      if (!data.emailCustomDomainConfirm) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "이메일 도메인 확인을 입력해주세요",
          path: ["emailCustomDomainConfirm"]
        });
      } else if (!emailDomainRegex.test(data.emailCustomDomainConfirm)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "올바른 도메인 형식이 아닙니다 (예: example.com)",
          path: ["emailCustomDomainConfirm"]
        });
      }
    }

    // Email confirmation validation
    if (data.emailId && data.emailIdConfirm) {
      if (data.emailId !== data.emailIdConfirm) {
        ["emailId", "emailIdConfirm"].forEach(path => {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "이메일이 일치하지 않습니다",
            path: [path]
          });
        });
      }
    }

    // Email domain confirmation validation
    if (data.emailCustomDomain && data.emailCustomDomainConfirm) {
      if (data.emailCustomDomain !== data.emailCustomDomainConfirm) {
        ["emailCustomDomain", "emailCustomDomainConfirm"].forEach(path => {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "이메일이 일치하지 않습니다",
            path: [path]
          });
        });
      }
    }

    // No car case - no validation needed
    if (data.isUsedCar === "No") {
      return;
    }

    // Single car case
    if (data.isUsedCar === "Yes_Single") {
      if (!data.currentVehicleBrand1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "제조사를 선택해주세요",
          path: ["currentVehicleBrand1"]
        });
      }
      if (!data.currentVehicleModel1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "모델명을 입력해주세요",
          path: ["currentVehicleModel1"]
        });
      }

      // 일본 정기점검 필수 필드 검증
      if (data.country === "jp") {
        if (!data.inspectionExpirationYear1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "년도를 선택해주세요",
            path: ["inspectionExpirationYear1"]
          });
        }
        if (!data.inspectionExpirationMonth1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "월을 선택해주세요",
            path: ["inspectionExpirationMonth1"]
          });
        }
      }
    }

    // Multiple cars case
    if (data.isUsedCar === "Yes_Multi") {
      // First car validation
      if (!data.currentVehicleBrand1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "제조사를 선택해주세요",
          path: ["currentVehicleBrand1"]
        });
      }
      if (!data.currentVehicleModel1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "모델명을 입력해주세요",
          path: ["currentVehicleModel1"]
        });
      }
      if (!data.inspectionExpirationYear1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "년도를 선택해주세요",
          path: ["inspectionExpirationYear1"]
        });
      }
      if (!data.inspectionExpirationMonth1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "월을 선택해주세요",
          path: ["inspectionExpirationMonth1"]
        });
      }

      // Second car validation
      if (!data.currentVehicleBrand2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "제조사를 선택해주세요",
          path: ["currentVehicleBrand2"]
        });
      }
      if (!data.currentVehicleModel2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "모델명을 입력해주세요",
          path: ["currentVehicleModel2"]
        });
      }
      if (!data.inspectionExpirationYear2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "년도를 선택해주세요",
          path: ["inspectionExpirationYear2"]
        });
      }
      if (!data.inspectionExpirationMonth2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "월을 선택해주세요",
          path: ["inspectionExpirationMonth2"]
        });
      }

      // Third car validation - only validate if any field is filled
      const hasAnyThirdCarInfo =
        data.currentVehicleBrand3 ||
        data.currentVehicleModel3 ||
        data.inspectionExpirationYear3 ||
        data.inspectionExpirationMonth3;

      if (hasAnyThirdCarInfo) {
        console.log("hasAnyThirdCarInfo", hasAnyThirdCarInfo);
        if (!data.currentVehicleBrand3) {
          console.log("data.currentVehicleBrand3", data.currentVehicleBrand3);
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "제조사를 선택해주세요",
            path: ["currentVehicleBrand3"]
          });
        }
        if (!data.currentVehicleModel3) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "모델명을 입력해주세요",
            path: ["currentVehicleModel3"]
          });
        }
        if (!data.inspectionExpirationYear3) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "년도를 선택해주세요",
            path: ["inspectionExpirationYear3"]
          });
        }
        if (!data.inspectionExpirationMonth3) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "월을 선택해주세요",
            path: ["inspectionExpirationMonth3"]
          });
        }
      }
    }
  });

  return {
    stepOneSchema,
    stepTwoSchema,
    stepThreeSchema,
    fullSchema
  };
};

// 국가별 스키마 생성 함수
export const getTestDriveSchema = (country: LocaleType) => {
  if (country === "ko" || country === "jp") {
    return createTestDriveSchema(country);
  }
  return createTestDriveSchema("jp");
};

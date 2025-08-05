import { TestDriveFormRequest, TestDriveResponse } from "@/features/test-drive/types";
import httpClient from "@/lib/http";
import { LocaleType } from "@/types";
import { isAxiosError } from "axios";
import { useTranslations } from "next-intl";

interface DuplicateCheckResponse {
  resultCode: number;
  message: string;
  data: Array<{
    dupl: number;
  }>;
}

interface CouponRemainResponse {
  resultCode: number;
  message: string;
  data: Array<{
    count: number;
  }>;
}

interface CouponIssuanceResponse {
  resultCode: number;
  message: string;
  data: {
    coupon_code: string;
    coupon_start_dt: string;
    coupon_end_dt: string;
    cpn_idx: number;
  };
}

export async function checkDuplicateParticipation(data: {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}): Promise<DuplicateCheckResponse> {
  return await httpClient.get<DuplicateCheckResponse>("/api/event/check", data);
}

export async function getCouponRemainCount(locale: LocaleType = "jp"): Promise<CouponRemainResponse> {
  return await httpClient.get<CouponRemainResponse>("/api/coupon/remain", {
    country: locale
  });
}

export async function issueCoupon(data: TestDriveFormRequest): Promise<CouponIssuanceResponse> {
  return await httpClient.post<CouponIssuanceResponse>("/api/coupon/issuance", data);
}

export async function submitTestDrive(
  data: TestDriveFormRequest,
  t: ReturnType<typeof useTranslations>
): Promise<TestDriveResponse> {
  try {
    console.log("request submit data - ", data);

    // return {
    //   success: false,
    //   message: "test"
    // };

    // 1. 중복 참여 검증
    // const duplicationCheck = await checkDuplicateParticipation({
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   email: data.email,
    //   mobile: data.mobile
    // });

    // if (duplicationCheck.data[0].dupl >= 1) {
    //   return {
    //     success: false,
    //     message: t.raw("message.duplicate_participation")
    //   };
    // }

    // 2. 쿠폰 수량 확인
    // const remainCount = await getCouponRemainCount(data.country as LocaleType);
    // if (remainCount.data[0].count <= 0) {
    //   return {
    //     success: false,
    //     message: t.raw("message.coupon_sold_out")
    //   };
    // }

    // 3. 쿠폰 발급
    // const couponResponse = await issueCoupon(data);

    return {
      success: true,
      message: t.raw("message.test_drive_complete"),
      couponCode: "1234567890",
      couponStartDt: "2025-01-01",
      couponEndDt: "2025-12-31"
    };

    // if (couponResponse.resultCode === 200) {
    //   return {
    //     success: true,
    //     message: t.raw("message.test_drive_complete"),
    //     couponCode: couponResponse.data.coupon_code,
    //     couponStartDt: couponResponse.data.coupon_start_dt,
    //     couponEndDt: couponResponse.data.coupon_end_dt
    //   };
    // } else {
    //   throw new Error(couponResponse.message);
    // }
  } catch (error) {
    console.error("API Error:", error);
    const errorMessage = isAxiosError(error) || error instanceof Error ? error.message : t.raw("message.api_error");
    return {
      success: false,
      message: errorMessage
    };
  }
}

/**
 1. 이벤트 중복 참여 검증
 URL /api/event/check
  API 명 이벤트 중복참여 검사
  description 요청한 정보로 이벤트 중복참여 검사를 한다
  request method GET
  content-type application/json
  
    depth name type
  request
    0 firstName string
    0 lastName string
    0 email string

  response
    0 resultCode string
    0 message string
    0 data object
    1 dupl string

  Sample data
  request: {
    "firstName": "홍",
    "lastName": "길동",
    "email": "test@test.com"
  }
  response: {
    resultCode: 200,
    message: 'success',
    data: {
      dupl: 0
    }
  }

  2. 쿠폰 수량 확인
  URL /api/coupon/remain
  API 명 쿠폰 수량 확인
  description 발급가능한 쿠폰 잔여수량을 조회한다
  request method GET
  content-type application/json

    depth name type
  response
    0 resultCode string
    0 message string
    0 data object
    1 count integer

  Sample data
  response
  {
    resultCode: 200,
    message: 'success',
    data: {
      count: 100
    }
  }

  3. 쿠폰 발급
  URL /api/coupon/issuance
  API 명 쿠폰 발행
  description 요청한 정보로 쿠폰 발행한다
  request method POST
  content-type application/json

    depth name type
  request
    0 firstName string
    0 lastName string
    0 firstNameHurigana string
    0 lastNameHurigana string
    0 gender string
    0 email string
    0 mobile string
    0 birthDate string
    0 job string
    0 jobEtc string
    0 residenceType string
    0 prefectures string
    0 testDrivePeriod string
    0 isUsedCar string
    0 currentVehicleBrand1 string
    0 currentVehicleModel1 string
    0 inspectionExpirationDate1 string
    0 currentVehicleBrand2 string
    0 currentVehicleModel2 string
    0 inspectionExpirationDate2 string
    0 currentVehicleBrand3 string
    0 currentVehicleModel3 string
    0 inspectionExpirationDate3 string
    0 plannedCar string
    0 plannedCarEV string
    0 ccpd string
    0 cppd string
    0 country string

  response
    0 resultCode string
    0 message string
    0 data object
    1 coupon_code string

  Sample data
  request
  {
    "firstName": "hong",
    "lastName": "gildong",
    "firstNameHurigana": "",
    "lastNameHurigana": "",
    "gender": "M",
    "email": "test@test.com",
    "mobile": "+821012341234",
    "birthDate": "20200101",
    "job": "学生",
    "jobEtc": "",
    "residenceType": "P",
    "prefectures": "tokyo",
    "testDrivePeriod": "2025-05",
    "isUsedCar": "Yes_Single",
    "currentVehicleBrand1": "hyundai",
    "currentVehicleModel1": "kona",
    "inspectionExpirationDate1": "202505",
    "currentVehicleBrand2": "",
    "currentVehicleModel2": "",
    "inspectionExpirationDate2": "",
    "currentVehicleBrand3": "",
    "currentVehicleModel3": "",
    "inspectionExpirationDate3": "",
    "plannedCar": "1month",
    "plannedCarEV": "True",
    "ccpd": "True",
    "cppd": "True",
    "country": "ko"
  }

  response
  {
    resultCode: 200,
    message: 'success',
    data: {
      coupon_code: 'AA00CC11E'
    }
  }
 */

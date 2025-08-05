import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import type {
  GenderOption,
  JobOption,
  ResidenceOption,
  IsUsedCarOption,
  PlannedCarOption,
  BooleanOption,
  MobilePrefixOption,
  EmailDomainOption,
  CarMakerOption,
  PrefectureOption,
  TestDriveFormData
} from "@/features/test-drive/types";
import { UseFormReturn } from "react-hook-form";
import { LocaleType } from "@/types";

export const useTestDriveOptions = ({ form }: { form: UseFormReturn<TestDriveFormData> }) => {
  const locale = useLocale() as LocaleType;
  const t = useTranslations("form");

  // Gender selection options (Male, Female, None)
  const genderOptions: GenderOption[] = [
    { value: "M", label: t("gender.male") },
    { value: "F", label: t("gender.female") },
    { value: "N", label: t("gender.none") }
  ];

  // Job category selection options
  const jobOptionsMap: Record<LocaleType, JobOption[]> = {
    jp: [
      { value: "学生", label: t("job.student") },
      { value: "経営者（企業オーナー）", label: t("job.company_owner") },
      { value: "経営者（非企業オーナー）", label: t("job.company_executive") },
      { value: "会社役員", label: t("job.company_manager") },
      { value: "会社員（管理職）", label: t("job.company_employee") },
      {
        value: "会社員（非管理職）",
        label: t("job.company_employee_non_manager")
      },
      { value: "医師", label: t("job.doctor") },
      { value: "医師以外の医療関係者", label: t("job.medical_worker") },
      {
        value: "士業（公認会計士/弁護士/税理士/司法書士）",
        label: t("job.professional")
      },
      { value: "契約社員・派遣社員", label: t("job.contract_worker") },
      { value: "公務員（教職員除く）", label: t("job.civil_servant") },
      { value: "教職員", label: t("job.teacher") },
      { value: "自営業・自由業", label: t("job.self_employed") },
      { value: "パート・アルバイト", label: t("job.part_time") },
      { value: "無職・専業主婦・主夫", label: t("job.unemployed") },
      { value: "定年退職", label: t("job.retired") },
      { value: "その他", label: t("job.other") }
    ],
    ko: [
      { value: "학생", label: t("job.student") },
      { value: "기업 소유주", label: t("job.company_owner") },
      { value: "회사 임원", label: t("job.company_executive") },
      { value: "회사 관리직", label: t("job.company_manager") },
      { value: "회사원", label: t("job.company_employee") },
      {
        value: "회사원(비관리직)",
        label: t("job.company_employee_non_manager")
      },
      { value: "의사", label: t("job.doctor") },
      { value: "의료 종사자", label: t("job.medical_worker") },
      {
        value: "전문직",
        label: t("job.professional")
      },
      { value: "계약직/파견직", label: t("job.contract_worker") },
      { value: "공무원", label: t("job.civil_servant") },
      { value: "교직원", label: t("job.teacher") },
      { value: "자영업", label: t("job.self_employed") },
      { value: "파트타임/아르바이트", label: t("job.part_time") },
      { value: "무직/전업주부", label: t("job.unemployed") },
      { value: "은퇴", label: t("job.retired") },
      { value: "기타", label: t("job.other") }
    ]
  };

  const jobOptions: JobOption[] = jobOptionsMap[locale];

  // Residence type options (Apartment/House, Own/Rent)
  const residenceTypeOptions: ResidenceOption[] = [
    { value: "P", label: t("residence.apartment_own") },
    { value: "T", label: t("residence.apartment_rent") },
    { value: "H", label: t("residence.house_own") },
    { value: "O", label: t("residence.house_rent") }
  ];

  // 테스트 드라이브 년도 옵션 (현재 년도와 다음 년도)
  const testDriveYearOptions = (() => {
    if (locale === "jp") {
      return [
        { value: "2025", label: `2025${t("date.year")}` },
        { value: "2026", label: `2026${t("date.year")}` }
      ];
    }

    const startDate = new Date();
    const startMonth = startDate.getMonth() + 1; // 현재 달
    const endMonth = (startMonth + 2) % 12 || 12; // 3개월 후의 달

    // 만약 끝 달이 시작 달보다 작으면 두 년도 필요
    const needsNextYear = endMonth < startMonth;
    const years = needsNextYear ? 2 : 1;

    return Array.from({ length: years }, (_, i) => {
      const year = startDate.getFullYear() + i;
      return { value: year.toString(), label: `${year}${t("date.year")}` };
    });
  })();

  // 테스트 드라이브 기간 옵션
  const testDriveMonthOptions = (selectedYear?: string) => {
    if (locale === "jp") {
      if (selectedYear === "2026") {
        return Array.from({ length: 3 }, (_, i) => {
          const month = i + 1;
          return {
            value: month.toString().padStart(2, "0"),
            label: `${month}${t("date.month")}`,
            month: month
          };
        });
      }
    }

    const startMonth = new Date().getMonth() + 1;
    const monthsCount = 12 - startMonth + 1;
    return Array.from({ length: monthsCount }, (_, i) => {
      const month = startMonth + i;
      return {
        value: month.toString().padStart(2, "0"),
        label: `${month}${t("date.month")}`,
        month: month
      };
    });
  };

  // Current vehicle ownership status options
  const isUsedCarOptionsMap: Record<LocaleType, IsUsedCarOption[]> = {
    jp: [
      { value: "Yes_Single", label: t("used_car.single") },
      { value: "Yes_Multi", label: t("used_car.multiple") },
      { value: "No", label: t("used_car.no") }
    ],
    ko: [
      { value: "Yes_Single", label: t("used_car.single") },
      // { value: "Yes_Multi", label: t("used_car.multiple") },
      { value: "No", label: t("used_car.no") }
    ]
  };

  const isUsedCarOptions: IsUsedCarOption[] = isUsedCarOptionsMap[locale];

  // Planned car purchase timing options
  const plannedCarOptions: PlannedCarOption[] = [
    { value: "1month", label: t("planned_car.1month") },
    { value: "6month", label: t("planned_car.6months") },
    { value: "1year", label: t("planned_car.1year") },
    { value: "no plan", label: t("planned_car.none") }
  ];

  // Yes/No selection options
  const booleanOptions: BooleanOption[] = [
    { value: "True", label: t("boolean.true") },
    { value: "False", label: t("boolean.false") }
  ];

  // 성인 인원수 옵션 (1-10)
  const familyAdultsOptions = Array.from({ length: 10 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1)
  }));

  // 어린이 인원수 옵션 (0-10)
  const familyChildrenOptions = Array.from({ length: 11 }, (_, i) => ({
    value: String(i),
    label: String(i)
  }));

  // Mobile phone prefix options
  const mobileOptions: MobilePrefixOption[] = [
    { value: "010", label: "010" },
    { value: "011", label: "011" },
    { value: "016", label: "016" },
    { value: "017", label: "017" },
    { value: "018", label: "018" },
    { value: "019", label: "019" }
  ];

  // Email domain selection
  const emailDomainOptionsMap: Record<LocaleType, EmailDomainOption[]> = {
    jp: [
      { value: "yahoo.co.jp", label: t("email_domain.yahoo") },
      { value: "gmail.com", label: t("email_domain.gmail") },
      { value: "icloud.com", label: t("email_domain.icloud") },
      { value: "niffy.com", label: t("email_domain.niffy") },
      { value: "直接入力", label: t("email_domain.custom") }
    ],
    ko: [
      { value: "naver.com", label: t("email_domain.naver") },
      { value: "gmail.com", label: t("email_domain.gmail") },
      { value: "daum.net", label: t("email_domain.daum") },
      { value: "hanmail.net", label: t("email_domain.hanmail") },
      { value: "nate.com", label: t("email_domain.nate") },
      { value: "icloud.com", label: t("email_domain.icloud") },
      { value: "直接入力", label: t("email_domain.custom") }
    ]
  };

  const emailDomainOptions = emailDomainOptionsMap[locale];

  // Car manufacturer selection options
  const carMakerOptionsMap: Record<LocaleType, CarMakerOption[]> = {
    jp: [
      { value: "none", label: t("car_maker.none") },
      { value: "Hyundai", label: t("car_maker.hyundai") },
      { value: "Toyota", label: t("car_maker.toyota") },
      { value: "Honda", label: t("car_maker.honda") },
      { value: "Nissan", label: t("car_maker.nissan") },
      { value: "Mazda", label: t("car_maker.mazda") },
      { value: "Lexus", label: t("car_maker.lexus") },
      { value: "Mitsubishi", label: t("car_maker.mitsubishi") },
      { value: "Mercedes-benz", label: t("car_maker.mercedes-benz") },
      { value: "Audi", label: t("car_maker.audi") },
      { value: "BMW", label: t("car_maker.bmw") },
      { value: "Volkswagen", label: t("car_maker.volkswagen") },
      { value: "Volvo", label: t("car_maker.volvo") },
      { value: "Tesla", label: t("car_maker.tesla") },
      { value: "BYD", label: t("car_maker.byd") },
      { value: "Citroen", label: t("car_maker.Citroen") },
      { value: "Fiat", label: t("car_maker.Fiat") },
      { value: "Jaguar", label: t("car_maker.Jaguar") },
      { value: "Jeep", label: t("car_maker.Jeep") },
      { value: "MINI", label: t("car_maker.MINI") },
      { value: "Peugeot", label: t("car_maker.Peugeot") },
      { value: "Porsche", label: t("car_maker.Porsche") },
      { value: "Renault", label: t("car_maker.Renault") },
      { value: "Suzuki", label: t("car_maker.Suzuki") },
      { value: "SUBARU", label: t("car_maker.SUBARU") },
      { value: "Daihatsu", label: t("car_maker.Daihatsu") },
      { value: "Others", label: t("car_maker.Others") }
    ],
    ko: [
      { value: "none", label: t("car_maker.none") },
      { value: "Hyundai", label: t("car_maker.hyundai") },
      { value: "Kia", label: t("car_maker.kia") },
      { value: "GENESIS", label: t("car_maker.genesis") },
      { value: "Toyota", label: t("car_maker.toyota") },
      { value: "Honda", label: t("car_maker.honda") },
      { value: "Nissan", label: t("car_maker.nissan") },
      { value: "Mazda", label: t("car_maker.mazda") },
      { value: "Lexus", label: t("car_maker.lexus") },
      { value: "Mitsubishi", label: t("car_maker.mitsubishi") },
      { value: "Mercedes-benz", label: t("car_maker.mercedes-benz") },
      { value: "Audi", label: t("car_maker.audi") },
      { value: "BMW", label: t("car_maker.bmw") },
      { value: "Volkswagen", label: t("car_maker.volkswagen") },
      { value: "Volvo", label: t("car_maker.volvo") },
      { value: "Tesla", label: t("car_maker.tesla") },
      { value: "BYD", label: t("car_maker.byd") },
      { value: "Citroen", label: t("car_maker.Citroen") },
      { value: "Fiat", label: t("car_maker.Fiat") },
      { value: "Jaguar", label: t("car_maker.Jaguar") },
      { value: "Jeep", label: t("car_maker.Jeep") },
      { value: "MINI", label: t("car_maker.MINI") },
      { value: "Peugeot", label: t("car_maker.Peugeot") },
      { value: "Porsche", label: t("car_maker.Porsche") },
      { value: "Renault", label: t("car_maker.Renault") },
      { value: "Suzuki", label: t("car_maker.Suzuki") },
      { value: "SUBARU", label: t("car_maker.SUBARU") },
      { value: "Daihatsu", label: t("car_maker.Daihatsu") },
      { value: "Others", label: t("car_maker.Others") }
    ]
  };

  const carMakerOptions: CarMakerOption[] = carMakerOptionsMap[locale];

  // 차량 점검 년도 옵션 (현재 년도 + 4년)
  const inspectionYearOptions = [
    { value: "none", label: t("placeholder.none") },
    ...Array.from({ length: 5 }, (_, i) => {
      const year = new Date().getFullYear() + i;
      return { value: year.toString(), label: `${year}${t("date.year")}` };
    })
  ];

  // 차량 점검 월 옵션 (현재 월부터)
  const inspectionMonthOptions = (selectedYear?: string) => {
    const baseOptions = [{ value: "none", label: t("placeholder.none") }];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString();
    const currentMonth = currentDate.getMonth() + 1;

    const monthOptions = Array.from({ length: 12 }, (_, i) => {
      const month = i + 1;
      return {
        value: month.toString().padStart(2, "0"),
        label: `${month}${t("date.month")}`,
        month: month
      };
    });

    // 현재 년도가 선택된 경우에만 현재 월부터 필터링
    if (selectedYear === currentYear) {
      return [...baseOptions, ...monthOptions.filter(option => option.month >= currentMonth)];
    }

    // 다른 년도가 선택된 경우 모든 월 표시
    return [...baseOptions, ...monthOptions];
  };

  // Birth year options (From 1920 to 2007)
  const birthYearOptions = Array.from({ length: 2007 - 1920 + 1 }, (_, i) => {
    const year = 2007 - i;
    return { value: year.toString(), label: `${year}${t("date.year")}` };
  });

  // Generate month options
  const birthMonthOptions = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return {
      value: month.toString().padStart(2, "0"),
      label: `${month}${t("date.month")}`
    };
  });

  // Generate day options
  const birthDayOptions = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    return {
      value: day.toString().padStart(2, "0"),
      label: `${day}${t("date.day")}`
    };
  });

  const prefecturesOptions: PrefectureOption[] = [
    { value: "Hokkaido", label: "北海道" },
    { value: "Aomori", label: "青森県" },
    { value: "Iwate", label: "岩手県" },
    { value: "Miyagi", label: "宮城県" },
    { value: "Akita", label: "秋田県" },
    { value: "Yamagata", label: "山形県" },
    { value: "Fukushima", label: "福島県" },
    { value: "Ibaraki", label: "茨城県" },
    { value: "Tochigi", label: "栃木県" },
    { value: "Gunma", label: "群馬県" },
    { value: "Saitama", label: "埼玉県" },
    { value: "Chiba", label: "千葉県" },
    { value: "Tokyo", label: "東京都" },
    { value: "Kanagawa", label: "神奈川県" },
    { value: "niigata", label: "新潟県" },
    { value: "Toyama", label: "富山県" },
    { value: "Ishikawa", label: "石川県" },
    { value: "Fukui", label: "福井県" },
    { value: "Yamanashi", label: "山梨県" },
    { value: "Nagano", label: "長野県" },
    { value: "Gifu", label: "岐阜県" },
    { value: "Shizuoka", label: "静岡県" },
    { value: "Aichi", label: "愛知県" },
    { value: "Mie", label: "三重県" },
    { value: "Shiga", label: "滋賀県" },
    { value: "Kyoto", label: "京都府" },
    { value: "Osaka", label: "大阪府" },
    { value: "Hyogo", label: "兵庫県" },
    { value: "Nara", label: "奈良県" },
    { value: "Wakayama", label: "和歌山県" },
    { value: "Tottori", label: "鳥取県" },
    { value: "Shimane", label: "島根県" },
    { value: "Okayama", label: "岡山県" },
    { value: "Hiroshima", label: "広島県" },
    { value: "Yamaguchi", label: "山口県" },
    { value: "Tokushima", label: "徳島県" },
    { value: "Kagawa", label: "香川県" },
    { value: "Ehime", label: "愛媛県" },
    { value: "Kochi", label: "高知県" },
    { value: "Fukuoka", label: "福岡県" },
    { value: "Saga", label: "佐賀県" },
    { value: "Nagasaki", label: "長崎県" },
    { value: "Kumamoto", label: "熊本県" },
    { value: "Oita", label: "大分県" },
    { value: "Miyazaki", label: "宮崎県" },
    { value: "Kagoshima", label: "鹿児島県" },
    { value: "Okinawa", label: "沖縄県" }
  ];

  return {
    // Form options
    genderOptions,
    jobOptions,
    residenceTypeOptions,
    testDriveYearOptions,
    testDriveMonthOptions: testDriveMonthOptions(form.watch("testDriveYear")),
    isUsedCarOptions,
    plannedCarOptions,
    booleanOptions,
    prefecturesOptions,
    mobileOptions,
    emailDomainOptions,
    birthYearOptions,
    birthMonthOptions,
    birthDayOptions,
    carMakerOptions,
    inspectionYearOptions,
    inspectionMonthOptions1: inspectionMonthOptions(form.watch("inspectionExpirationYear1")),
    inspectionMonthOptions2: inspectionMonthOptions(form.watch("inspectionExpirationYear2")),
    inspectionMonthOptions3: inspectionMonthOptions(form.watch("inspectionExpirationYear3")),
    familyAdultsOptions,
    familyChildrenOptions
  };
};

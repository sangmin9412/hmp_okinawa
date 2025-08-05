export const GenderTypes = ["M", "F", "N"] as const;
export type GenderType = (typeof GenderTypes)[number];

export const JobTypes = [
  "学生",
  "経営者（企業オーナー）",
  "経営者（非企業オーナー）",
  "会社役員",
  "会社員（管理職）",
  "会社員（非管理職）",
  "医師",
  "医師以外の医療関係者",
  "士業（公認会計士/弁護士/税理士/司法書士）",
  "契約社員・派遣社員",
  "公務員（教職員除く）",
  "教職員",
  "自営業・自由業",
  "パート・アルバイト",
  "無職・専業主婦・主夫",
  "定年退職",
  "その他",
  "학생",
  "기업 소유주",
  "회사 임원",
  "회사 관리직",
  "회사원",
  "회사원(비관리직)",
  "의사",
  "의료 종사자",
  "전문직",
  "계약직/파견직",
  "공무원",
  "교직원",
  "자영업",
  "파트타임/아르바이트",
  "무직/전업주부",
  "은퇴",
  "기타"
] as const;
export type JobType = (typeof JobTypes)[number];

export const ResidenceTypes = ["P", "T", "H", "O"] as const;
export type ResidenceType = (typeof ResidenceTypes)[number];

export const IsUsedCarTypes = ["Yes_Single", "Yes_Multi", "No"] as const;
export type IsUsedCarType = (typeof IsUsedCarTypes)[number];

export const PlannedCarTypes = ["1month", "6month", "1year", "no plan"] as const;
export type PlannedCarType = (typeof PlannedCarTypes)[number];

export const BooleanTypes = ["True", "False"] as const;
export type BooleanType = (typeof BooleanTypes)[number];

export const MobilePrefixTypes = ["010", "011", "016", "017", "018", "019"] as const;
export type MobilePrefixType = (typeof MobilePrefixTypes)[number];

export const EmailDomainTypes = [
  "yahoo.co.jp",
  "gmail.com",
  "icloud.com",
  "niffy.com",
  "直接入力",
  "naver.com",
  "daum.net",
  "hanmail.net",
  "nate.com"
] as const;
export type EmailDomainType = (typeof EmailDomainTypes)[number];

export const CarMakerTypes = [
  "none",
  "Hyundai",
  "Kia",
  "GENESIS",
  "Toyota",
  "Honda",
  "Nissan",
  "Mazda",
  "Lexus",
  "Mitsubishi",
  "Mercedes-benz",
  "Audi",
  "BMW",
  "Volkswagen",
  "Volvo",
  "Tesla",
  "BYD",
  "Citroen",
  "Fiat",
  "Jaguar",
  "Jeep",
  "MINI",
  "Peugeot",
  "Porsche",
  "Renault",
  "Suzuki",
  "SUBARU",
  "Daihatsu",
  "Others"
] as const;
export type CarMakerType = (typeof CarMakerTypes)[number];

export const PrefectureTypes = [
  "Hokkaido",
  "Aomori",
  "Iwate",
  "Miyagi",
  "Akita",
  "Yamagata",
  "Fukushima",
  "Ibaraki",
  "Tochigi",
  "Gunma",
  "Saitama",
  "Chiba",
  "Tokyo",
  "Kanagawa",
  "niigata",
  "Toyama",
  "Ishikawa",
  "Fukui",
  "Yamanashi",
  "Nagano",
  "Gifu",
  "Shizuoka",
  "Aichi",
  "Mie",
  "Shiga",
  "Kyoto",
  "Osaka",
  "Hyogo",
  "Nara",
  "Wakayama",
  "Tottori",
  "Shimane",
  "Okayama",
  "Hiroshima",
  "Yamaguchi",
  "Tokushima",
  "Kagawa",
  "Ehime",
  "Kochi",
  "Fukuoka",
  "Saga",
  "Nagasaki",
  "Kumamoto",
  "Oita",
  "Miyazaki",
  "Kagoshima",
  "Okinawa"
] as const;
export type PrefectureType = (typeof PrefectureTypes)[number];

export interface TestDriveFormData {
  firstName: string;
  lastName: string;
  firstNameHurigana: string;
  lastNameHurigana: string;
  gender: GenderType | "";
  email: string;
  emailConfirm: string;
  emailId: string;
  emailIdConfirm: string;
  emailDomain: EmailDomainType | "";
  emailDomainConfirm: EmailDomainType | "";
  emailCustomDomain?: string;
  emailCustomDomainConfirm?: string;
  mobile: string;
  mobilePrefix: MobilePrefixType | "";
  mobileMiddle: string;
  mobileLast: string;
  birthDate: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  job: JobType | "";
  jobEtc: string;
  residenceType: ResidenceType | "";
  family: string;
  togetherAdults: string;
  togetherChildren: string;
  prefectures?: PrefectureType | "";
  testDrivePeriod: string;
  testDriveYear: string;
  testDriveMonth: string;
  isUsedCar: IsUsedCarType | "";
  currentVehicleBrand1: CarMakerType | "";
  currentVehicleModel1: string;
  inspectionExpirationYear1: string;
  inspectionExpirationMonth1: string;
  inspectionExpirationDate1: string;
  currentVehicleBrand2: CarMakerType | "";
  currentVehicleModel2: string;
  inspectionExpirationYear2: string;
  inspectionExpirationMonth2: string;
  inspectionExpirationDate2: string;
  currentVehicleBrand3: CarMakerType | "";
  currentVehicleModel3: string;
  inspectionExpirationYear3: string;
  inspectionExpirationMonth3: string;
  inspectionExpirationDate3: string;
  plannedCar: PlannedCarType | "";
  plannedCarEV: BooleanType | "";
  ccpd: BooleanType | "";
  cppd: BooleanType | "";
  eventConsent: string;
  marketingConsent: string;
  country: string;
  postcode: string;
  address: string;
  addressDetail?: string;
  city: string;
  state: string;
  street: string;
  userId?: string;
}

export type TestDriveFormRequest = Omit<TestDriveFormData, "togetherAdults" | "togetherChildren"> & {
  togetherAdults: number;
  togetherChildren: number;
};

export interface Option<T extends string = string> {
  value: T;
  label: string;
}

export type GenderOption = Option<GenderType>;
export type JobOption = Option<JobType>;
export type ResidenceOption = Option<ResidenceType>;
export type IsUsedCarOption = Option<IsUsedCarType>;
export type PlannedCarOption = Option<PlannedCarType>;
export type BooleanOption = Option<BooleanType>;
export type MobilePrefixOption = Option<MobilePrefixType>;
export type EmailDomainOption = Option<EmailDomainType>;
export type CarMakerOption = Option<CarMakerType>;
export type PrefectureOption = Option<PrefectureType>;

export interface TestDriveResponse {
  success: boolean;
  message: string;
  couponCode?: string;
  couponStartDt?: string;
  couponEndDt?: string;
}

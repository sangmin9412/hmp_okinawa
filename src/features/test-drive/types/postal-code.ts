export interface PostalCode {
  region_code: string;
  old_postal_code: string;
  postal_code: string;
  prefecture_kana: string;
  city_kana: string;
  town_kana: string;
  prefecture: string;
  city: string;
  town: string;
}

export interface PostalCodeResponse {
  success: boolean;
  data: PostalCode[];
}

export interface PostalCodeErrorResponse {
  success: false;
  error: string;
}

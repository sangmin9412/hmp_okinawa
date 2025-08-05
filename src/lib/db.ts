import { RowDataPacket } from "mysql2";

// Interface for postal code data
export interface JpPostalCode extends RowDataPacket {
  region_code: string; // 전국지자체코드
  old_postal_code: string; // 구 우편번호
  postal_code: string; // 신 우편번호
  prefecture_kana: string; // 도도부현명 카나
  city_kana: string; // 시/구/정/촌명 카나
  town_kana: string; // 읍/면/동/지역명 카나
  prefecture: string; // 도도부현명 한자
  city: string; // 시/구/정/촌명 한자
  town: string; // 읍/면/동/지역명 한자
}
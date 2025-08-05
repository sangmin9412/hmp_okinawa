import { PostalCodeResponse } from "@/features/test-drive/types/postal-code";
import { frontHttp } from "@/lib/front-http";

// 우편번호로 주소 검색
export const searchAddressByPostalCode = async (postalCode: string) => {
  try {
    return await frontHttp?.get<PostalCodeResponse>(
      `/api/postal-codes?code=${encodeURIComponent(postalCode)}`
    );
  } catch (error) {
    if (error && typeof error === "object" && "message" in error) {
      throw new Error(error.message as string);
    }
    throw new Error("Failed to fetch address data");
  }
};

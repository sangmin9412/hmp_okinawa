import { NextResponse } from "next/server";
import axios from "axios";
import { JpPostalCode } from "@/lib/db";

type Locale = "jp" | "ko";

const isValidLocale = (locale: string): locale is Locale => {
  return ["jp", "ko"].includes(locale);
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  try {
    const { locale } = await params;
    const { searchParams } = new URL(request.url);
    const postalCode = searchParams.get("code");

    // locale 유효성 검사
    if (!isValidLocale(locale)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid locale"
        },
        { status: 400 }
      );
    }

    // 우편번호 필수값 검사
    if (!postalCode) {
      return NextResponse.json(
        {
          success: false,
          error: "Postal code is required"
        },
        { status: 400 }
      );
    }

    const postalCodes = await axios.get<JpPostalCode[]>(`https://test.hmjpromotion.com/okinawa/jp/api/postal-codes?code=${postalCode}`);
    
    return NextResponse.json(postalCodes.data);

  } catch (error) {
    console.error("Failed to fetch postal codes:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch postal codes"
      },
      { status: 500 }
    );
  }
}

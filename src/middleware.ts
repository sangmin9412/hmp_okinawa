import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { basePath } from "@/config";
// import { decodeEventUserId } from "@/lib/crypto";

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale = pathname.split("/")[1] || "jp";

  // Handle image paths
  if (pathname.includes("/images/") || pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "public, max-age=86400, must-revalidate");
    return response;
  }

  // complete 페이지 리다이렉트 처리
  if (pathname.includes("/complete")) {
    const couponCode = request.nextUrl.searchParams.get("couponCode");
    if (!couponCode) {
      return Response.redirect(new URL(`${basePath}/${locale}`, request.url));
    }
  }

  if (locale === "ko" && pathname.includes("/thankyoupresent/agreements")) {
    return Response.error();
  }

  // 일본 페이지에서 이벤트 페이지 접근 시 암호화된 id 복호화
  // if (locale === "jp" && pathname.includes("/form")) {
  //   const params = decodeURIComponent(pathname.split("/form/")[1]);

  //   if (params) {
  //     try {
  //       // const decryptedParams = decodeEventUserId(params, process.env.CRYPTO_KEY || '') as Record<string, string>;
  //       // console.log('[middleware] decryptedParams', decryptedParams);
  //       decodeEventUserId(params, process.env.CRYPTO_KEY || '');
  //     } catch (e) {
  //       console.log('[middleware] decrypt error', e);
  //       return Response.redirect(new URL(`${basePath}/${locale}`, request.url));
  //     }
  //   } else {
  //     return Response.redirect(new URL(`${basePath}/${locale}`, request.url));
  //   }
  // }

  let response;

  // 폰트 파일에 대한 처리
  if (pathname.match(/\.(woff|woff2|ttf|otf|eot)$/i) || pathname.startsWith("/_next/image")) {
    response = NextResponse.next();
    response.headers.set("Cache-Control", "public, max-age=86400, must-revalidate");
  } else {
    // 다국어 미들웨어 실행
    response = createMiddleware({
      locales: routing.locales,
      defaultLocale: routing.defaultLocale,
      localePrefix: routing.localePrefix,
      localeDetection: false
    })(request);
  }

  // 응답에 커스텀 헤더 추가
  response.headers.set("x-locale", locale);
  response.headers.set("x-current-path", pathname);

  return response;
}

export const config = {
  matcher: [
    // Static assets and images
    "/:locale?/images/:path*",
    "/:path*.jpg",
    "/:path*.jpeg",
    "/:path*.png",
    "/:path*.gif",
    "/:path*.webp",
    "/:path*.svg",
    // 폰트 파일 매칭
    "/:path*.woff",
    "/:path*.woff2",
    "/:path*.ttf",
    "/:path*.otf",
    "/:path*.eot",
    // Next.js 이미지 최적화 경로
    "/_next/image:path*",
    // 기존 라우팅
    "/",
    "/(jp|ko)/:path*",
    // API 라우트 제외
    "/((?!api|_next/static|favicon.ico).*)"
  ]
};

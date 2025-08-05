"use client";

import KakaoCheckDialog, { KakaoCheckDialogRef } from "@/app/[locale]/complete/(components)/KakaoCheckDialog";
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

export default function CompleteButton() {
  const locale = useLocale();
  const t = useTranslations("complete");
  const kakaoCheckDialogRef = useRef<KakaoCheckDialogRef>(null);

  if (locale === "jp") {
    return (
      <div className='mt-[5.6rem] flex justify-center gap-[1.6rem]'>
        <Button asChild className='w-[28rem]'>
          <a
            href='https://www.otsinternational.jp/otsrentacar/okinawa/campaign/hyundaijp-otsrc-specialplan/'
            rel='noopener noreferrer'
            target='_blank'
          >
            {t("btn")}
          </a>
        </Button>
      </div>
    );
  }

  if (locale === "ko") {
    return (
      <div className='mt-[5.6rem] flex justify-center items-center flex-col gap-[1.6rem]'>
        <Button variant='kakao' asChild className='w-full lg:w-[48rem] gap-[.8rem] lg:text-[1.8rem] font-[600]'>
          <a href='http://pf.kakao.com/_FQkPn/friend' rel='noopener noreferrer' target='_blank'>
            <Image
              src={getImagePath("/images/complete/ico_kakao_ch.svg")}
              alt={"Copy Icon"}
              width={34}
              height={24}
              unoptimized={true}
            />
            <span className='text-black'>채널 추가</span>
          </a>
        </Button>
        <KakaoCheckDialog
          ref={kakaoCheckDialogRef}
          trggerRender={() => <Button className='w-full lg:w-[48rem] lg:text-[1.8rem] font-[500]'>{t("btn")}</Button>}
        />
      </div>
    );
  }

  return <></>;
}

"use client";

import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { TopImageMapType, VisualImage } from "@/app/[locale]/(components)/top-banner";

const TopBannerJP = () => {
  const pathname = usePathname() as TopImageMapType;

  return (
    <div className='top-banner relative overflow-hidden' suppressHydrationWarning={true}>
      <div className='flex flex-col lg:h-[47.6rem] 2xl:h-auto'>
        <div className='relative w-full lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[192rem] lg:h-[47.6rem] 2xl:relative 2xl:w-full 2xl:h-auto 2xl:top-0 2xl:left-0 2xl:translate-x-0 2xl:translate-y-0'>
          <VisualImage pathname={pathname} />
        </div>
        <div className='container absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 z-10'>
          <VisualText pathname={pathname} />
        </div>
      </div>
    </div>
  );
};

const VisualText = ({ pathname }: { pathname: TopImageMapType }) => {
  const t = useTranslations("common");

  if (pathname === "/jp" || pathname.includes("/jp/form")) {
    return (
      <div className='pt-[2.4rem] lg:pt-[5.6rem]'>
        <div>
          <h1
            className='lg:mb-[.8rem] mb-[.4rem] lg:text-[1.8rem] lg:leading-[3rem] text-[1.3rem] leading-[2rem] tracking-[0.01em] font-[500] text-white [text-shadow:0px_0px_5px_rgba(0,0,0,0.2),0px_0px_96px_rgba(1,110,175,0.8)] [&_br]:hidden'
            dangerouslySetInnerHTML={{ __html: t.raw("topBanner.title") }}
          />
          <p className='lg:mb-0 lg:text-[5.6rem] lg:leading-[8.6rem] text-[2rem] leading-[3.2rem] tracking-[0.01em] font-[500] text-white [text-shadow:0px_0px_5px_rgba(0,0,0,0.2),0px_0px_96px_rgba(1,110,175,0.8)]'>
            今すぐレンタカー料金が
          </p>
          <div className='lg:mb-0 mb-0'>
            <div className='lg:my-[-.5rem]'>
              <p className='inline box-decoration-clone [-webkit-box-decoration-break:clone] bg-navy lg:px-[1.6rem] px-[.6rem] lg:py-[.6rem] py-[.4rem] lg:text-[5.6rem] text-[2rem] tracking-[0.01em] text-white font-[500] shadow-[0px_0px_5px_rgba(0,0,0,0.3),0px_0px_12px_rgba(1,110,175,0.8)]'>
                最大 15,000円 OFFになる
              </p>
            </div>
          </div>
          <p className='lg:mb-0 lg:text-[5.6rem] lg:leading-[8.6rem] text-[2rem] leading-[3.2rem] tracking-[0.01em] font-[500] text-white [text-shadow:0px_0px_5px_rgba(0,0,0,0.2),0px_0px_96px_rgba(1,110,175,0.8)]'>
            クーポンで予約しよう！
          </p>

          <div className='lg:mt-[3.2rem] mt-[1.6rem] w-[22.8rem] lg:w-[31.7rem] h-auto pointer-events-none'>
            <Image
              className='w-full h-auto'
              src={getImagePath("/images/common/top-banner/top_visual_logo_02.webp")}
              alt={t("topBanner.alt")}
              width={317}
              height={20}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='pt-[3.2rem] lg:pt-[8.4rem]'>
      <div>
        <h1
          className='text-[2.4rem] leading-[3.8rem] lg:text-[4rem] lg:leading-[1.6] font-[500] text-white [text-shadow:0px_0px_5px_rgba(0,0,0,0.3),0px_0px_96px_rgba(1,110,175,0.8)]'
          dangerouslySetInnerHTML={{ __html: t.raw("topBanner.title") }}
        ></h1>

        <div className='w-[32.7rem] translate-x-[-5rem] translate-y-[-4rem] lg:w-[61.4rem] lg:h-[21.8rem] lg:translate-x-[-9.5rem] lg:translate-y-[-9rem] pointer-events-none'>
          <Image
            className='w-full h-full'
            src={getImagePath("/images/common/top-banner/top_visual_logo.webp")}
            alt={t("topBanner.alt")}
            width={614}
            height={218}
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBannerJP;

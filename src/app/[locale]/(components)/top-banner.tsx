"use client";

import TopBannerJP from "@/app/[locale]/(components)/jp/top-banner";
import TopBannerKO from "@/app/[locale]/(components)/ko/top-banner";
import { useLocale } from "next-intl";
import { LocaleType } from "@/types";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";

export const TopImageMap = {
  "/ko": {
    pc: getImagePath("/images/common/top-banner/top_visual_01_pc.webp"),
    mo: getImagePath("/images/common/top-banner/top_visual_01_mo.webp")
  },
  "/ko/form": {
    pc: getImagePath("/images/common/top-banner/top_visual_02_pc.webp"),
    mo: getImagePath("/images/common/top-banner/top_visual_02_mo.webp")
  },
  "/ko/complete": {
    pc: getImagePath("/images/common/top-banner/top_visual_03_pc.webp"),
    mo: getImagePath("/images/common/top-banner/top_visual_03_mo.webp")
  },
  "/jp": {
    pc: getImagePath("/images/common/top-banner/top_visual_01_pc.webp"),
    mo: getImagePath("/images/common/top-banner/top_visual_01_mo.webp")
  },
  "/jp/form": {
    pc: getImagePath("/images/common/top-banner/top_visual_01_pc.webp"),
    mo: getImagePath("/images/common/top-banner/top_visual_01_mo.webp")
  },
  "/jp/complete": {
    pc: getImagePath("/images/common/top-banner/top_visual_03_pc.webp"),
    mo: getImagePath("/images/common/top-banner/top_visual_03_mo.webp")
  },
  "/jp/thankyoupresent/agreements": {
    pc: getImagePath("/images/common/top-banner/top_visual_03_pc.webp"),
    mo: getImagePath("/images/common/top-banner/top_visual_03_mo.webp")
  }
} as const;

const TopBannerMap: Record<LocaleType, typeof TopBannerJP | typeof TopBannerKO> = {
  ko: TopBannerKO,
  jp: TopBannerJP
};

const TopBanner = () => {
  const locale = useLocale() as LocaleType;

  const TopBannerComponent = TopBannerMap[locale];

  return <TopBannerComponent />;
};

export type TopImageMapType = keyof typeof TopImageMap;

export const VisualImage = ({ pathname }: { pathname: TopImageMapType }) => {
  const srcPc = TopImageMap?.[pathname]?.pc || TopImageMap["/jp"].pc;
  const srcMo = TopImageMap?.[pathname]?.mo || TopImageMap["/jp"].mo;

  return (
    <>
      {srcPc && (
        <Image
          className='max-w-none w-full h-full object-cover pc-only'
          src={srcPc}
          alt={"Key Visual Image"}
          width={1920}
          height={476}
          unoptimized={true}
          loading='eager'
        />
      )}
      {srcMo && (
        <Image
          className='max-w-none w-full h-full object-cover mo-only'
          src={srcMo}
          alt={"Key Visual Image"}
          width={360}
          height={275}
          unoptimized={true}
          loading='eager'
        />
      )}
    </>
  );
};

export default TopBanner;

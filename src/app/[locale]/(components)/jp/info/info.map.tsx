"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";

export const InfoMap = () => {
  const t = useTranslations("intro.info");
  const mapRef = useRef<HTMLIFrameElement>(null);

  return <iframe ref={mapRef} className='absolute w-full h-full' src={t("item_05.OnTheWay")}></iframe>;
};

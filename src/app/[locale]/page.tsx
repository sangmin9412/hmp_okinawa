import { LanguageSelectContainer } from "./(containers)/language-select-container";
import { getLocale } from "next-intl/server";
import { InfoContainerJP } from "@/app/[locale]/(components)/jp/info/info-container";
import { FaqContainerJP } from "@/app/[locale]/(components)/jp/faq/faq-container";
import { MapContainerJP } from "@/app/[locale]/(components)/jp/map/map-container";
import { InfoContainerKO } from "@/app/[locale]/(components)/ko/info/info-container";
import { FaqContainerKO } from "@/app/[locale]/(components)/ko/faq/faq-container";
import { MapContainerKO } from "@/app/[locale]/(components)/ko/map/map-container";

const infoContainerMap = {
  jp: InfoContainerJP,
  ko: InfoContainerKO
};

const mapContainerMap = {
  jp: MapContainerJP,
  ko: MapContainerKO
};

const faqContainerMap = {
  jp: FaqContainerJP,
  ko: FaqContainerKO
};

export default async function HomePage() {
  const locale = await getLocale();

  const MapContainer = mapContainerMap[locale as keyof typeof mapContainerMap];
  const InfoContainer = infoContainerMap[locale as keyof typeof infoContainerMap];
  const FaqContainer = faqContainerMap[locale as keyof typeof faqContainerMap];
  return (
    <div className='language-select-height'>
      <LanguageSelectContainer />
      <InfoContainer />
      <MapContainer />
      <FaqContainer />
    </div>
  );
}

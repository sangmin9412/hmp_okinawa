import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("common.footer");
  const locale = await getLocale();

  const snsMap = {
    jp: [
      {
        name: "line",
        href: "https://page.line.me/686awkeb?oat__id=615669&openQrModal=true"
      },
      {
        name: "youtube",
        href: "https://www.youtube.com/hyundaijapan"
      },
      {
        name: "twitter",
        href: "https://x.com/Hyundai_japan?mx=2"
      },
      {
        name: "instagram",
        href: "https://www.instagram.com/hyundai_japan/"
      }
    ],
    ko: [
      {
        name: "youtube",
        href: "https://www.youtube.com/@hyundai_kor"
      },
      {
        name: "twitter",
        href: "https://x.com/hyundai_kor"
      },
      {
        name: "instagram",
        href: "https://www.instagram.com/hyundai_kor"
      }
    ]
  };

  const snsList = snsMap[locale as keyof typeof snsMap];

  return (
    <footer className='bg-[#000]'>
      <div className='container'>
        <div className='py-[4rem] lg:py-[2rem] h-[21.4rem] flex items-start flex-col lg:items-center lg:flex-row justify-between'>
          <div className='flex items-start lg:items-center flex-col lg:flex-row'>
            <Image
              className='w-[4rem] lg:w-[5.3rem]'
              src={getImagePath("/images/logo_white.svg")}
              alt='logo'
              width={53}
              height={27}
            />
            <p
              className='mt-[2.4rem] lg:mt-0 lg:ml-[4.8rem] text-[1.2rem] leading-[2rem] text-[#666]'
              dangerouslySetInnerHTML={{
                __html: t.raw("copyright")
              }}
            />
          </div>
          <div>
            <ul className='flex items-center gap-[2.4rem]'>
              {snsList.map(item => (
                <li key={item.name}>
                  <a href={item.href}>
                    <Image
                      className='w-[2.4rem] h-[2.4rem]'
                      src={getImagePath(`/images/ico_sns_${item.name}.svg`)}
                      alt={item.name}
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

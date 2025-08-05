import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export const TitleContainer = async () => {
  const t = await getTranslations("form");
  const locale = await getLocale();

  return (
    locale === "jp" && (
      <section className='mb-[4rem] lg:mb-[5.6rem]'>
        <div className='container'>
          <div className='bg-[#fafafa] p-[2rem]'>
            <p className='relative pl-[1.4rem] lg:pl-[1.2rem] text-[1.2rem] leading-[2rem] before:content-[""] before:block before:absolute before:left-0 before:top-[.8rem] before:w-[.3rem] before:h-[.3rem] before:rounded-full before:bg-[#666]'>
              {t("title")}
            </p>
          </div>
        </div>
      </section>
    )
  );
};

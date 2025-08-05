import { getTranslations } from "next-intl/server";
import { FaqItem } from "./faq-item";

export const FaqContainerKO = async () => {
  const t = await getTranslations("intro.faq");

  return (
    <section className='faq-section bg-[#F5F5F5]'>
      <div className='container lg:pt-[12rem] lg:pb-[16rem] py-[5.6rem]'>
        <h2 className='mb-[4rem] lg:text-[3.2rem] text-[2rem] font-[500] leading-[1.6] lg:text-left text-center'>
          {t("title")}
        </h2>

        <div className='mb-[4rem] flex lg:flex-row flex-col lg:gap-[3.2rem] gap-[1.6rem]'>
          <FaqItem className='flex-1'>
            <p
              className='mb-[0.8rem] lg:text-[2.0rem] text-[1.6rem] font-[500] leading-[1.6]'
              dangerouslySetInnerHTML={{ __html: t.raw("faq_01") }}
            />
            <p
              className='lg:text-[1.8rem] text-[1.5rem] font-[400] leading-[1.6] [&>a]:text-[1.5rem] [&>a]:lg:text-[1.8rem]'
              dangerouslySetInnerHTML={{ __html: t.raw("faq_01_address") }}
            />
          </FaqItem>
          <FaqItem className='flex-1'>
            <p
              className='mb-[0.8rem] lg:text-[2.0rem] text-[1.6rem] font-[500] leading-[1.6]'
              dangerouslySetInnerHTML={{ __html: t.raw("faq_02") }}
            />
            <p
              className='lg:text-[1.8rem] text-[1.5rem] font-[400] leading-[1.6] [&>a]:text-[1.5rem] [&>a]:lg:text-[1.8rem]'
              dangerouslySetInnerHTML={{ __html: t.raw("faq_02_address") }}
            />
          </FaqItem>
        </div>
      </div>
    </section>
  );
};

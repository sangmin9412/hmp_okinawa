import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { cn, getImagePath } from "@/lib/utils";
import { DotList } from "@/app/[locale]/(components)/dot-list";
import { Button } from "@/components/ui/button";
import { InfoItem } from "@/app/[locale]/(components)/ko/info/info-item";
import Link from "next/link";
import { CautionText } from "@/components/ui/text/caution-text";

export const InfoContainerJP = async () => {
  const t = await getTranslations("intro.info");
  const locale = await getLocale();

  return (
    <section className='info-section'>
      <div className='container'>
        <h2
          className='lg:text-[4.0rem] text-[2.4rem] font-[500] lg:leading-[1.6] leading-[1.5]'
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        />

        <div className='lg:hidden mt-[4rem] flex justify-center align-middle'>
          <Button asChild className='w-full lg:w-[28rem]'>
            <Link href={`${locale}/form`}>{t("btn")}</Link>
          </Button>
        </div>

        <div className='lg:pt-[6.4rem] pt-[4rem] lg:pb-[8.0rem] pb-[5.6rem]'>
          {/* S: Item 01 */}
          <InfoItem className='pt-0'>
            <InfoItem.Title>{t("item_01.tit")}</InfoItem.Title>
            <InfoItem.SubTitle>
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("item_01.subTit")
                }}
              />
            </InfoItem.SubTitle>

            {/* S: Item 01 - Car Area */}
            <div className='mt-[1.6rem] mb-[2.4rem] lg:p-[4.0rem] px-[2rem] py-[4rem] bg-[#E5F1FB] rounded-lg'>
              <div className='lg:mb-[0.8rem] mb-[2.4rem] flex lg:flex-row flex-col justify-center items-center lg:gap-[1.6rem] gap-[0.4rem] font-[500]'>
                <p className='lg:text-[2.4rem] text-[1.8rem] lg:leading-[2.3] leading-[1.6]'>{t("item_01.carRent")}</p>
                <span className='lg:text-[3.0rem] text-[2.4rem] lg:leading-[1.8] leading-[1.5] text-[#0793EA]'>
                  {t("item_01.carRentPrice")}
                </span>
              </div>
              <div className='flex lg:flex-row flex-col flex-wrap justify-center items-center lg:gap-[1.2rem] text-[1.4rem] leading-[1.5]'>
                <p className='font-[500]'>{t("item_01.carRentPeriod")}</p>
                <p className='font-[400] lg:before:content-[""] lg:before:mr-[1.2rem] lg:before:inline-block lg:before:w-[0.1rem] lg:before:h-[1.2rem] lg:before:bg-[#333]'>
                  2025.03.01 ~ 2026.03.01
                </p>
              </div>

              <div className='lg:mb-[2.4rem] mb-[3.2rem] mt-[.4rem] flex justify-center'>
                <CautionText className='text-[1.2rem] leading-[inherit] text-[#666] font-[400]'>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("item_01.carRentNoti") }} />
                </CautionText>
              </div>

              <div className='flex lg:flex-row flex-col justify-center align-middle gap-[3.2rem]'>
                <div className='relative flex items-center justify-center flex-col lg:basis-[50.4rem] after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-[0.2rem] after:border-white after:rounded-[.8rem] after:pointer-events-none rounded-[.8rem]'>
                  <h4 className='py-[0.8rem] w-full text-center lg:text-[2.0rem] text-[1.2rem] font-[500] leading-[1.6] bg-white rounded-[.8rem_.8rem_0_0]'>
                    IONIQ 5
                  </h4>
                  <Image
                    className='hidden lg:block w-[32rem] py-[4rem]'
                    src={getImagePath("/images/intro_ioniq_pc.png")}
                    width={368}
                    height={199}
                    alt='IONIQ 5 PC'
                  />
                  <Image
                    className='w-full max-w-[21.9rem] h-auto block lg:hidden  py-[3rem]'
                    src={getImagePath("/images/intro_ioniq_mo.png")}
                    width={219}
                    height={118}
                    alt='IONIQ 5 MO'
                  />
                </div>
                <div className='relative flex items-center justify-center flex-col lg:basis-[50.4rem] after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-[0.2rem] after:border-white after:rounded-[.8rem] after:pointer-events-none rounded-[.8rem]'>
                  <h4 className='py-[0.8rem] w-full text-center lg:text-[2.0rem] text-[1.2rem] font-[500] leading-[1.6] bg-white rounded-[.8rem_.8rem_0_0]'>
                    KONA
                  </h4>
                  <Image
                    className='hidden lg:block w-[32rem] py-[4rem]'
                    src={getImagePath("/images/intro_kona_pc.png")}
                    width={368}
                    height={199}
                    alt='KONA PC'
                  />
                  <Image
                    className='w-full max-w-[21.9rem] h-auto block lg:hidden  py-[3rem]'
                    src={getImagePath("/images/intro_kona_mo.png")}
                    width={219}
                    height={118}
                    alt='KONA MO'
                  />
                </div>
              </div>
            </div>
            {/* E: Item 01 - Car Area */}

            <DotList
              className='info-dot-list'
              items={[
                t("item_01.list_01"),
                t("item_01.list_02"),
                t("item_01.list_03"),
                t("item_01.list_04"),
                t("item_01.list_05"),
                t("item_01.list_06"),
                t("item_01.list_07"),
                <p key={"p8"} dangerouslySetInnerHTML={{ __html: t.raw("item_01.list_08") }} />,
                <p key={"p9"} dangerouslySetInnerHTML={{ __html: t.raw("item_01.list_09") }} />
              ]}
            />

            <div className='mt-[4rem] flex justify-center align-middle'>
              <Button asChild className='w-full lg:w-[28rem]'>
                <Link href={`${locale}/form`}>{t("btn")}</Link>
              </Button>
            </div>
          </InfoItem>
          {/* E: Item 01 */}

          {/* S: Item 02 */}
          <InfoItem>
            <InfoItem.Title>{t("item_02.tit")}</InfoItem.Title>
            <InfoItem.SubTitle>{t("item_02.subTit")}</InfoItem.SubTitle>

            <DotList
              className='info-dot-list'
              items={[<p key='p1' dangerouslySetInnerHTML={{ __html: t.raw("item_02.list") }} />]}
            />
          </InfoItem>
          {/* E: Item 02 */}

          {/* S: Item 03 */}
          <InfoItem>
            <InfoItem.Title>{t("item_03.tit")}</InfoItem.Title>
            <InfoItem.SubTitle>2025. 03. 01 ~ 2026. 03. 01</InfoItem.SubTitle>

            <DotList className='info-dot-list' items={[t("item_03.list")]} />
          </InfoItem>
          {/* E: Item 03 */}

          {/* S: Item 04 */}
          <InfoItem>
            <InfoItem.Title className='mb-[3.0rem]'>{t("item_04.tit")}</InfoItem.Title>

            {/* S: Item 04 - Step Area */}
            <div className='flex lg:flex-row flex-col justify-center lg:gap-[3.2rem] gap-[2.4rem]'>
              <div className='relative lg:flex-[35.2rem] flex flex-col lg:overflow-visible overflow-hidden'>
                <div className='mo-only absolute top-0 bottom-0 left-0 w-[0.9rem]'>
                  <span className='absolute top-0 bottom-0 left-0 w-[0.1rem] bg-primary'></span>
                  <span className='absolute bottom-0 left-0 w-[0.1rem] h-[1.4rem] bg-primary origin-bottom rotate-[35deg]'></span>
                </div>
                <InfoItem.StepTitle>
                  <Image src={getImagePath("/images/intro_step_01_pc.png")} width={48} height={48} alt='STEP 01' />
                  <div>
                    <p className='lg:text-[1.3rem] text-[1.2rem] lg:leading-[2.0] leading-[1.6] font-[600] text-[#0793EA]'>
                      STEP 01
                    </p>
                    <p className='lg:text-[1.4rem] text-[1.2rem] lg:leading-[2.2rem] leading-[1.6] font-[500]'>
                      {t("item_04.step_01.tit")}
                    </p>
                  </div>
                </InfoItem.StepTitle>
                <div
                  className={cn(`lg:flex-1 lg:ml-0 ml-[1.6rem] px-[2.4rem] py-[2.4rem] bg-[#FAFAFA] rounded-[0.8rem]`)}
                >
                  <DotList
                    items={[t("item_04.step_01.list_01"), t("item_04.step_01.list_02"), t("item_04.step_01.list_03")]}
                  />
                </div>
              </div>

              <div className='relative lg:flex-[35.2rem] flex flex-col lg:overflow-visible overflow-hidden'>
                <div className='mo-only absolute top-0 bottom-0 left-0 w-[0.9rem]'>
                  <span className='absolute top-0 bottom-0 left-0 w-[0.1rem] bg-primary'></span>
                  <span className='absolute bottom-0 left-0 w-[0.1rem] h-[1.4rem] bg-primary origin-bottom rotate-[35deg]'></span>
                </div>
                <InfoItem.StepTitle>
                  <Image src={getImagePath("/images/intro_step_02_pc.png")} width={48} height={48} alt='STEP 02' />
                  <div>
                    <p className='lg:text-[1.3rem] text-[1.2rem] lg:leading-[2.0] leading-[1.6] font-[600] text-[#0793EA]'>
                      STEP 02
                    </p>
                    <p className='lg:text-[1.4rem] text-[1.2rem] lg:leading-[2.2rem] leading-[1.6] font-[500]'>
                      {t("item_04.step_02.tit")}
                    </p>
                  </div>
                </InfoItem.StepTitle>
                <div
                  className={cn(`lg:flex-1 lg:ml-0 ml-[1.6rem] px-[2.4rem] py-[2.4rem] bg-[#FAFAFA] rounded-[0.8rem]`)}
                >
                  <DotList
                    items={[
                      t("item_04.step_02.list_01"),
                      t("item_04.step_02.list_02"),
                      <p
                        key='p2'
                        dangerouslySetInnerHTML={{
                          __html: t.raw("item_04.step_02.list_03")
                        }}
                      />
                    ]}
                  />
                </div>
              </div>

              <div className='relative lg:flex-[35.2rem] flex flex-col lg:overflow-visible overflow-hidden'>
                <div className='mo-only absolute top-0 bottom-0 left-0 w-[0.9rem]'>
                  <span className='absolute top-0 bottom-0 left-0 w-[0.1rem] bg-primary'></span>
                  <span className='absolute bottom-0 left-0 w-[0.1rem] h-[1.4rem] bg-primary origin-bottom rotate-[35deg]'></span>
                </div>
                <InfoItem.StepTitle>
                  <Image src={getImagePath("/images/intro_step_03_pc.png")} width={48} height={48} alt='STEP 03' />
                  <div>
                    <p className='lg:text-[1.3rem] text-[1.2rem] lg:leading-[2.0] leading-[1.6] font-[600] text-[#0793EA]'>
                      STEP 03
                    </p>
                    <p className='lg:text-[1.4rem] text-[1.2rem] lg:leading-[2.2rem] leading-[1.6] font-[500]'>
                      {t("item_04.step_03.tit")}
                    </p>
                  </div>
                </InfoItem.StepTitle>
                <div
                  className={cn(`lg:flex-1 lg:ml-0 ml-[1.6rem] px-[2.4rem] py-[2.4rem] bg-[#FAFAFA] rounded-[0.8rem]`)}
                >
                  <DotList items={[t("item_04.step_03.list_01"), t("item_04.step_03.list_02")]} />
                </div>
              </div>
            </div>
            {/* E: Item 04 - Step Area */}
          </InfoItem>
          {/* E: Item 04 */}

          {/* S: Item 05 */}
          <InfoItem className='border-b-0'>
            <InfoItem.Title>{t("item_05.tit")}</InfoItem.Title>

            {/* <div className='lg:mt-[0] mt-[1.6rem] lg:mb-[2.5rem] mb-[2.4rem]'>
              <div className='relative w-full h-0 pb-[56.25%]'>
                <InfoMap />
              </div>
            </div> */}

            <div className='mb-[2.4rem] lg:flex items-center justify-start gap-[3.2rem]'>
              <Image
                className='hidden lg:block'
                src={getImagePath("/images/intro_img_02_pc.png")}
                width={560}
                height={280}
                alt={t("item_05.subTit")}
              />
              <Image
                className='block lg:hidden mb-[2.4rem] w-full'
                src={getImagePath("/images/intro_img_02_mo.png")}
                width={320}
                height={160}
                alt={t("item_05.subTit")}
              />
              <div>
                <p className='lg:text-[2.4rem] text-[1.8rem] lg:leading-[1.5] leading-[1.6] font-[500]'>
                  {t("item_05.subTit")}
                </p>
                <p className='mb-[2.4rem] lg:text-[1.4rem] text-[1.3rem] leading-[1.5] font-[400] text-[#999]'>
                  {t("item_05.txt")}
                </p>
                <div className='flex flex-col gap-[0.8rem]'>
                  <div className='flex items-start gap-[0.8rem]'>
                    <Image
                      className='relative lg:top-[0] top-[0.2rem] block w-[2.4rem] h-[2.4rem] object-contain'
                      src={getImagePath("/images/intro_ico_address.svg")}
                      width={24}
                      height={24}
                      alt='adress-icon'
                    />
                    <div>
                      <p className='lg:mb-[0] mb-[0.4rem] lg:text-[1.8rem] text-[1.5rem] leading-[1.6] font-[400]'>
                        {t("item_05.address.main")}
                        <span
                          className='ml-[0.8rem] align-middle text-[1.2rem] leading-[1.6] lg:font-[600] font-[500] text-[#0793EA] underline'
                          key='span1'
                          dangerouslySetInnerHTML={{
                            __html: t.raw("item_05.address.OTS_gooleMap")
                          }}
                        />
                      </p>
                      <p
                        className='lg:text-[1.4rem] text-[1.3rem] leading-[1.5] font-[400] text-[#999]'
                        key='p2'
                        dangerouslySetInnerHTML={{
                          __html: t.raw("item_05.address.detail")
                        }}
                      />
                    </div>
                  </div>
                  <div className='flex items-center gap-[0.8rem]'>
                    <Image
                      className='relative lg:top-[0] top-[0.2rem] block w-[2.4rem] h-[2.4rem] object-contain'
                      src={getImagePath("/images/intro_ico_clock.svg")}
                      width={24}
                      height={24}
                      alt='clock-icon'
                    />
                    <div>
                      <p className='lg:text-[1.8rem] text-[1.5rem] leading-[1.6] font-[400]'>08:00 ~ 19:00</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-[0.8rem]'>
                    <Image
                      className='relative lg:top-[0] top-[0.2rem] block w-[2.4rem] h-[2.4rem] object-contain'
                      src={getImagePath("/images/intro_ico_telephone.svg")}
                      width={24}
                      height={24}
                      alt='tel-icon'
                    />
                    <div>
                      <p className='lg:text-[1.8rem] text-[1.5rem] leading-[1.6] font-[400]'>{t("item_05.tel")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-[3.2rem] pt-[3.2rem] pb-[4rem] bg-[#FAFAFA] rounded-[0.8rem]'>
              <div className='lg:mb-[1.6rem] mb-[2.4rem] flex lg:flex-row flex-col gap-[1.6rem]'>
                <Image
                  className='w-[4.8rem] h-[4.8rem] object-contain'
                  src={getImagePath("/images/intro_ico_bus_stop.svg")}
                  width={48}
                  height={48}
                  alt='bus-stop-icon'
                />
                <div className='lg:block flex flex-col gap-[1.6rem]'>
                  <p className='lg:text-[1.8rem] text-[1.5rem] lg:leading-[1.6] leading-[1.5] font-[500]'>
                    {t("item_05.notice.head")}
                  </p>
                  <div className='flex lg:flex-row flex-col lg:gap-[1.2rem] gap-[0.4rem] lg:text-[1.6rem] text-[1.4rem] lg:leading-[1.6] leading-[1.5] text-[#666]'>
                    <p
                      className='font-[500]'
                      dangerouslySetInnerHTML={{
                        __html: t.raw("item_05.notice.sub_01")
                      }}
                    />
                    <p
                      className='font-[400] before:inline-flex before:content-[""] before:mr-[1.2rem] before:w-[0.1rem] before:h-[1.2rem] before:bg-[#666]'
                      dangerouslySetInnerHTML={{
                        __html: t.raw("item_05.notice.sub_01_des")
                      }}
                    />
                  </div>
                  <div className='flex lg:flex-row flex-col lg:gap-[1.2rem] gap-[0.4rem] lg:text-[1.6rem] text-[1.4rem] lg:leading-[1.6] leading-[1.5] text-[#666]'>
                    <p className='font-[500]'>{t("item_05.notice.sub_02")}</p>
                    <p className='font-[400] before:inline-flex before:content-[""] before:mr-[1.2rem] before:w-[0.1rem] before:h-[1.2rem] before:bg-[#666]'>
                      {t("item_05.notice.sub_02_des")}
                    </p>
                  </div>
                </div>
              </div>
              <DotList
                items={[
                  t("item_05.notice.list_01"),
                  t("item_05.notice.list_02"),
                  <p
                    key='p3'
                    dangerouslySetInnerHTML={{
                      __html: t.raw("item_05.notice.list_03")
                    }}
                  />
                ]}
              />
            </div>
          </InfoItem>
          {/* E: Item 05 */}
        </div>
      </div>
    </section>
  );
};

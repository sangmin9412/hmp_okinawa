"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { getImagePath } from "@/lib/utils";
import { MapPlaceText, MapPinActive, MapPinOff } from "./map-item";

import "swiper/css";
import { useTranslations } from "next-intl";

export const MapContainerJP = () => {
  const t = useTranslations("intro.map");

  return (
    <section className='map-section'>
      <div className='relative lg:py-[12rem] py-[5.6rem] bg-[#002C5F]'>
        <div className='container'>
          <div className='pb-[6.4rem] lg:text-[4rem] text-[2.4rem] lg:leading-[1.6] leading-[1.5] font-[600]'>
            <h2 className='text-[#0793EA] font-[500]'>{t("title")}</h2>
            <h2 className='mb-[1.6rem] text-[#fff] font-[500]'>{t("title_02")}</h2>
            <h3
              className='lg:text-[1.8rem] text-[1.5rem] leading-[1.6] font-[400] text-[#fff]'
              dangerouslySetInnerHTML={{
                __html: t.raw("subTit")
              }}
            />
          </div>
          <div className='relative w-100%'>
            <Image
              className='hidden lg:block ml-[17.5rem] mr-[1.5rem]'
              src={getImagePath("/images/map_bg_pc.png")}
              width={930}
              height={1200}
              alt='OKINAWA'
            />
            <Image
              className='block lg:hidden w-full'
              src={getImagePath("/images/map_bg_mo.png")}
              width={320}
              height={412}
              alt='OKINAWA'
            />
            {/* S: Place 01 */}
            <div className='hidden lg:block absolute left-[63.3%] top-[3rem] '>
              <Image src={getImagePath("/images/map_img_01_pc.png")} width={200} height={112} alt={t("place.p_01")} />
              <MapPlaceText>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t.raw("place.p_01")
                  }}
                />
                <p className='font-[400]'>{t("place.p_01_detail")}</p>
              </MapPlaceText>

              <Image
                className='absolute left-[-2.7rem] top-[5.6rem]'
                src={getImagePath("/images/map_img_line_01_pc.png")}
                width={27}
                height={155}
                alt='place_line'
              />
            </div>
            {/* E: Place 01 */}

            {/* S: Place 02 */}
            <div className='hidden lg:block absolute left-[24.28%] top-[8.3rem] '>
              <Image src={getImagePath("/images/map_img_02_pc.png")} width={200} height={112} alt={t("place.p_02")} />
              <MapPlaceText className='max-w-[20rem]'>
                <p>{t("place.p_02")}</p>
                <p
                  className='font-[400]'
                  dangerouslySetInnerHTML={{
                    __html: t.raw("place.p_02_detail")
                  }}
                />
              </MapPlaceText>

              <Image
                className='absolute right-[-3.9rem] top-[5.6rem]'
                src={getImagePath("/images/map_img_line_02_pc.png")}
                width={39}
                height={131}
                alt='place_line'
              />
            </div>
            {/* E: Place 02 */}

            {/* S: Place 03 */}
            <div className='hidden lg:block absolute left-[18.03%] top-[30.9rem] '>
              <Image src={getImagePath("/images/map_img_03_pc.png")} width={200} height={112} alt={t("place.p_03")} />
              <MapPlaceText>
                <p>{t("place.p_03")}</p>
                <p className='font-[400]'>{t("place.p_03_detail")}</p>
              </MapPlaceText>

              <Image
                className='absolute right-[-5.8rem] top-[5.6rem]'
                src={getImagePath("/images/map_img_line_03_pc.png")}
                width={58}
                height={204}
                alt='place_line'
              />
            </div>
            {/* E: Place 03 */}

            {/* S: Place 04 */}
            <div className='hidden lg:block absolute left-[5.35%] top-[51.1rem] '>
              <Image src={getImagePath("/images/map_img_04_pc.png")} width={200} height={112} alt={t("place.p_04")} />
              <MapPlaceText className='max-w-[20rem]'>
                <p>{t("place.p_04")}</p>
                <p
                  className='font-[400]'
                  dangerouslySetInnerHTML={{
                    __html: t.raw("place.p_04_detail")
                  }}
                />
              </MapPlaceText>

              <Image
                className='absolute right-[-10.4rem] top-[5.6rem]'
                src={getImagePath("/images/map_img_line_04_pc.png")}
                width={104}
                height={92}
                alt='place_line'
              />
            </div>
            {/* E: Place 04 */}

            {/* S: Place 05 */}
            <div className='hidden lg:block absolute left-0 top-[75.1rem] '>
              <Image src={getImagePath("/images/map_img_05_pc.png")} width={200} height={112} alt={t("place.p_05")} />
              <MapPlaceText className='max-w-[20rem]'>
                <p>{t("place.p_05")}</p>
                <p
                  className='font-[400]'
                  dangerouslySetInnerHTML={{
                    __html: t.raw("place.p_05_detail")
                  }}
                />
              </MapPlaceText>

              <Image
                className='absolute right-[-11.6rem] top-[-4.7rem]'
                src={getImagePath("/images/map_img_line_05_pc.png")}
                width={116}
                height={102}
                alt='place_line'
              />
            </div>
            {/* E: Place 05 */}

            {/* S: Place 06 */}
            <div className='hidden lg:block absolute left-[45%] right-[36.69%] top-[98.7rem] '>
              <Image src={getImagePath("/images/map_img_06_pc.png")} width={200} height={112} alt={t("place.p_06")} />
              <MapPlaceText className='max-w-[20rem]'>
                <p>{t("place.p_06")}</p>
                <p
                  className='font-[400]'
                  dangerouslySetInnerHTML={{
                    __html: t.raw("place.p_06_detail")
                  }}
                />
              </MapPlaceText>

              <div className='absolute left-[-24.2rem] top-[0.3rem] w-[25.4rem] h-[5.3rem]'>
                <Image
                  className='object-contain'
                  src={getImagePath("/images/map_img_line_06_pc.png")}
                  width={254}
                  height={53}
                  alt='place_line'
                />
              </div>
            </div>
            {/* E: Place 06 */}

            {/* S: Place 07 */}
            <div className='hidden lg:block absolute left-[66.87%] top-[60.1rem] '>
              <Image src={getImagePath("/images/map_img_07_pc.png")} width={200} height={112} alt={t("place.p_07")} />
              <MapPlaceText className='max-w-[20rem]'>
                <p>{t("place.p_07")}</p>
                <p className='font-[400]'>{t("place.p_07_detail")}</p>
              </MapPlaceText>

              <Image
                className='absolute left-[-9.5rem] top-[-2rem]'
                src={getImagePath("/images/map_img_line_07_pc.png")}
                width={95}
                height={77}
                alt='place_line'
              />
            </div>
            {/* E: Place 07 */}

            {/* S: PC Pin */}
            <MapPinActive className='pc-only lg:left-[59.55%] lg:top-[22.6rem]' />
            <MapPinActive className='pc-only lg:left-[44.28%] lg:top-[25.4rem]' />
            <MapPinActive className='pc-only lg:left-[39.73%] lg:top-[55.4rem]' />
            <MapPinActive className='pc-only lg:left-[31.16%] lg:top-[64.4rem]' />
            <MapPinActive className='pc-only lg:left-[26.87%] lg:top-[69.0rem]' />
            <MapPinActive className='pc-only lg:left-[21.42%] lg:top-[97.5rem]' />
            <MapPinActive className='pc-only lg:left-[57.05%] lg:top-[56.5rem]' />
            {/* E: PC Pin */}

            {/* S: Mobile Pin */}
            <div className='mo-only absolute left-[50.93%] top-[17.23%]'>
              <MapPinActive className='map-pin hidden 1' />
              <MapPinOff />
            </div>

            <div className='mo-only absolute left-[32.5%] top-[19.66%]'>
              <MapPinActive className='map-pin hidden 2' />
              <MapPinOff />
            </div>

            <div className='mo-only absolute left-[26.87%] top-[44.9%]'>
              <MapPinActive className='map-pin hidden 3' />
              <MapPinOff />
            </div>

            <div className='mo-only absolute left-[48.12%] top-[45.87%]'>
              <MapPinActive className='map-pin hidden 4' />
              <MapPinOff />
            </div>

            <div className='mo-only absolute left-[16.87%] top-[52.18%]'>
              <MapPinActive className='map-pin hidden 5' />
              <MapPinOff />
            </div>

            <div className='mo-only absolute left-[11.87%] top-[56.06%]'>
              <MapPinActive className='map-pin hidden 6' />
              <MapPinOff />
            </div>

            <div className='mo-only absolute left-[5.31%] top-[80.09%]'>
              <MapPinActive className='map-pin hidden 7' />
              <MapPinOff />
            </div>
            {/* E: Mobile Pin */}

            {/* S: Mobile text */}
            <div className='mo-only'>
              <div className='map-text hidden absolute left-[54.68%] top-[-11.4%] w-[11.4rem] h-[13rem]]'>
                <Image
                  className='w-full'
                  src={getImagePath("/images/map_active_text_01_mo.png")}
                  width={114}
                  height={130}
                  alt='text_01'
                />
              </div>
              <div className='map-text hidden absolute left-[0.6%] top-[1.45%] w-[11.4rem] h-[8.7rem]'>
                <Image
                  className='w-full'
                  src={getImagePath("/images/map_active_text_02_mo.png")}
                  width={114}
                  height={87}
                  alt='text_02'
                />
              </div>
              <div className='map-text hidden absolute left-[8.12%] top-[26.69%] w-[7.2rem] h-[8.7rem]'>
                <Image
                  className='w-full'
                  src={getImagePath("/images/map_active_text_03_mo.png")}
                  width={72}
                  height={87}
                  alt='text_03'
                />
              </div>
              <div className='map-text hidden absolute left-[51.87%] top-[46.11%] w-[14.6rem] h-[2.2rem]'>
                <Image
                  className='w-full'
                  src={getImagePath("/images/map_active_text_04_mo.png")}
                  width={146}
                  height={22}
                  alt='text_04'
                />
              </div>
              <div className='map-text hidden absolute left-[20.62%] top-[55.09%] w-[15.8rem] h-[3.9rem]'>
                <Image
                  className='w-full'
                  src={getImagePath("/images/map_active_text_05_mo.png")}
                  width={158}
                  height={39}
                  alt='text_05'
                />
              </div>
              <div className='map-text hidden absolute left-[15.62%] top-[57.71%] w-[14.8rem] h-[5.5rem]'>
                <Image
                  className='w-full'
                  src={getImagePath("/images/map_active_text_06_mo.png")}
                  width={148}
                  height={55}
                  alt='text_06'
                />
              </div>
              <div className='map-text hidden absolute left-[12.06%] top-[84.63%] w-[15.8rem] h-[3.9rem]'>
                <Image
                  className='w-full'
                  src={getImagePath("/images/map_active_text_07_mo.png")}
                  width={158}
                  height={39}
                  alt='text_07'
                />
              </div>
            </div>
            {/* E: Mobile text */}
          </div>
          {/* S: Mobile Swiper */}
          <div className='mo-only mo-map-swiper relative mt-[6.4rem] -mx-[2rem]'>
            <Swiper
              className='!px-[2rem]'
              spaceBetween={24}
              slidesPerView={"auto"}
              onInit={e => {
                const mapPinElements = document.querySelectorAll(".map-pin");
                const mapTextElements = document.querySelectorAll(".map-text");
                if (e.realIndex === 0) {
                  mapPinElements[0].classList.add("active");
                  mapTextElements[0].classList.add("active");
                }
              }}
              onSlideChange={e => {
                const swiperIndex = parseInt(e.slides[e.realIndex].dataset.customIndex || "0") - 1;

                const mapPinElements = document.querySelectorAll(".map-pin");
                const mapTextElements = document.querySelectorAll(".map-text");

                mapPinElements.forEach((el, index) => {
                  el.classList.remove("active");

                  if (swiperIndex === index) {
                    el.classList.add("active");
                  }
                });

                mapTextElements.forEach((el, index) => {
                  el.classList.remove("active");

                  if (swiperIndex === index) {
                    el.classList.add("active");
                  }
                });
              }}
            >
              {["1", "2", "3", "4", "5", "6", "7"].map(index => {
                return (
                  <SwiperSlide className='!w-[24rem]' key={index} data-custom-index={index}>
                    <div>
                      <Image
                        className='w-full'
                        src={getImagePath(`/images/map_img_0${index}_mo.png`)}
                        width={240}
                        height={134}
                        alt={t(`place.p_0${index}_mo`)}
                      />
                    </div>
                    <div className='pt-[0.8rem] text-[1.3rem] leading-[1.5] text-[#fff]'>
                      <p className='font-[600]'>{t(`place.p_0${index}_mo`)}</p>
                      <p
                        className='font-[400]'
                        dangerouslySetInnerHTML={{
                          __html: t.raw(`place.p_0${index}_detail_mo`)
                        }}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* E: Mobile Swiper */}
        </div>
      </div>
    </section>
  );
};

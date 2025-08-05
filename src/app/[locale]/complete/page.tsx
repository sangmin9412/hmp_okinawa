import { getLocale, getTranslations } from "next-intl/server";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import ClipboardButton from "@/components/ClipboardButton";
import CompleteButton from "@/app/[locale]/complete/(components)/CompleteButton";
import CompleteTextContent from "@/app/[locale]/complete/(components)/CompleteTextContent";
import ReservationInfoContainer from "@/app/[locale]/complete/(components)/ReservationInfoContainer";

export default async function CompletePage({
  searchParams
}: {
  searchParams: Promise<{
    couponCode: string;
    couponStartDt: string;
    couponEndDt: string;
  }>;
}) {
  const t = await getTranslations("complete");
  const locale = await getLocale();
  const { couponCode, couponStartDt, couponEndDt } = await searchParams;

  return (
    <div className='pt-[5.4rem] pb-[9.4rem] lg:pt-0 overflow-hidden'>
      <div className='container'>
        <div className='flex flex-col items-center text-center'>
          <div className='w-[8rem] h-[8rem]'>
            <Image
              className='w-full h-full'
              src={getImagePath("/images/complete/ico_confirm.svg")}
              alt={"Confirm Icon"}
              width={80}
              height={80}
              unoptimized={true}
            />
          </div>
          <p className='mt-[1.6rem] text-[1.8rem] leading-[3rem] lg:text-[2.4rem] lg:leading-[3.8rem] font-[500]'>
            {t("title")}
          </p>
          {locale === "ko" && (
            <p className='mt-[1.6rem] text-[1.2rem] lg:text-[1.4rem] leading-[2rem] lg:leading-[2.2rem] text-[#666] underline underline-offset-4'>
              ※ 발급된 쿠폰은 OTS 렌터카의 현대 EV 차량 예약이 <br className='mo-only' />
              마감될 경우 <br className='pc-only' />
              사용이 불가할 수 있습니다.
            </p>
          )}
        </div>
        <div className='mt-[5.2rem] lg:mt-[4rem] flex flex-col items-center'>
          <div className='relative w-[28rem] h-[20rem] pl-[1.5rem] pr-[2.5rem] pt-[.4rem] lg:w-[39.2rem] lg:h-[25.6rem] lg:px-[1.4rem] lg:pt-[1.2rem]'>
            <Image
              className='absolute top-0 left-0 w-full h-full pc-only'
              src={getImagePath("/images/complete/coupon_frame_pc.png")}
              alt={"Coupon Confirm"}
              width={392}
              height={256}
              unoptimized={true}
            />
            <Image
              className='absolute top-0 left-0 w-full h-full mo-only'
              src={getImagePath("/images/complete/coupon_frame_mo.png")}
              alt={"Coupon Confirm"}
              width={280}
              height={200}
              unoptimized={true}
            />
            <div className='relative z-10 text-center'>
              <p className='py-[1.4rem] lg:py-[1.9rem] text-[.9rem] leading-[1.2rem] lg:text-[1.4rem] lg:leading-[1.8rem] text-white font-[500]'>
                Hyundai Mobility Passport in Okinawa
              </p>
              <div className='mt-[1.8rem] lg:mt-[2.8rem]'>
                <p className='text-[1rem] leading-[1.6rem] lg:text-[1.4rem] lg:leading-[1.8rem]'>{t("coupon_code")}</p>
                <p className='text-[1.6rem] leading-[2.4rem] lg:text-[2.4rem] lg:leading-[3.8rem] font-[500]'>
                  {couponCode}
                </p>
                <p className='mt-[.6rem] lg:mt-0 text-[1rem] leading-[1.6rem] lg:text-[1.2rem] lg:leading-[2rem] text-[#999]'>
                  <span className='hidden lg:inline'>{t("coupon_date")} : </span>
                  {`${decodeURIComponent(couponStartDt || "0000-00-00")} ~ ${decodeURIComponent(couponEndDt || "0000-00-00")}`}
                </p>
              </div>
            </div>
          </div>
          <div className='mt-0 lg:mt-[0.6rem]'>
            <ClipboardButton
              text={couponCode}
              variant={"outlineTertiary"}
              size={"xs"}
              className='px-[1.6rem] font-[500]'
            >
              {t("coupon_copy")}
            </ClipboardButton>
          </div>
        </div>

        <CompleteTextContent />

        <CompleteButton />

        <p className='mt-[2.4rem] text-[1.2rem] leading-[2rem] text-[#666] text-center'>{t("note")}</p>
        {locale === "jp" && (
          <p className='mt-[5.6rem] text-[1.3rem] md:text-[1.4rem] leading-[2rem] md:leading-[2.2rem] text-[#666] text-center'>
            本クーポンは、上部の「今すぐ予約」ボタンをクリックするとに移動する<br />
            「Hyundai Mobility Passport in Okinawa専用OTS予約ページ」でのみご利用いただけます。<br />
            OTSサイトからのアクセスはできません。
          </p>
        )}

        <ReservationInfoContainer />
      </div>
    </div>
  );
}

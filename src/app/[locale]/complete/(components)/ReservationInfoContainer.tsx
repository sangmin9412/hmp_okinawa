import { useLocale } from "next-intl";
import { cn, getImagePath } from "@/lib/utils";
import Image from "next/image";
import { InfoItem } from "@/app/[locale]/complete/(components)/info-item";

export default function ReservationInfoContainer() {
  const locale = useLocale();

  if (locale === "ko") {
    return (
      <InfoItem>
        <h3 className='lg:mb-[3.2rem] mb-[1.6rem] lg:text-[2.4rem] text-[1.8rem] font-[500] text-center'>
          오키나와 OTS 렌터카 예약 방법 안내
        </h3>
        <div className='flex lg:flex-row flex-col justify-center lg:gap-[3.2rem] gap-[2.4rem]'>
          <div className='relative lg:flex-[35.2rem] flex flex-col lg:overflow-visible overflow-hidden'>
            <div className='mo-only absolute top-0 bottom-0 left-0 w-[0.9rem]'>
              <span className='absolute top-0 bottom-0 left-0 w-[0.1rem] bg-primary'></span>
              <span className='absolute bottom-0 left-0 w-[0.1rem] h-[1.4rem] bg-primary origin-bottom rotate-[35deg]'></span>
            </div>
            <InfoItem.StepTitle>
              <Image src={getImagePath("/images/complete/ico_step_01.svg")} width={48} height={48} alt='STEP 01' />
              <div>
                <p className='lg:text-[1.3rem] text-[1.2rem] lg:leading-[2.0] leading-[1.6] font-[600] text-[#0793EA]'>
                  STEP 01
                </p>
                <p className='text-[1.4rem] lg:leading-[2.2rem] leading-[1.6] font-[500]'>대여 가능 차량 조회</p>
              </div>
            </InfoItem.StepTitle>
            <div
              className={cn(
                `lg:flex-1 flex flex-col gap-[2rem] lg:ml-0 ml-[1.6rem] p-[1.6rem] pt-[2.4rem] bg-[#FAFAFA] rounded-[0.8rem]`
              )}
            >
              <InfoItem.InnerText>
                대여 일시와 반납 일시를 선택 후 <br />
                대여 가능 차량을 조회하세요.
              </InfoItem.InnerText>
              <Image
                className='hidden lg:block my-0 mx-auto'
                src={getImagePath("/images/complete/step_01_pc.webp")}
                width={266}
                height={265}
                alt='STEP 01 대여 가능 차량 조회'
              />
              <Image
                className='w-full max-w-[26.6rem] h-auto block lg:hidden my-0 mx-auto'
                src={getImagePath("/images/complete/step_01_mo.webp")}
                width={266}
                height={264}
                alt='STEP 01 대여 가능 차량 조회'
              />
            </div>
          </div>

          <div className='relative lg:flex-[35.2rem] flex flex-col lg:overflow-visible overflow-hidden'>
            <div className='mo-only absolute top-0 bottom-0 left-0 w-[0.9rem]'>
              <span className='absolute top-0 bottom-0 left-0 w-[0.1rem] bg-primary'></span>
              <span className='absolute bottom-0 left-0 w-[0.1rem] h-[1.4rem] bg-primary origin-bottom rotate-[35deg]'></span>
            </div>
            <InfoItem.StepTitle>
              <Image src={getImagePath("/images/complete/ico_step_02.svg")} width={48} height={48} alt='STEP 02' />
              <div>
                <p className='lg:text-[1.3rem] text-[1.2rem] lg:leading-[2.0] leading-[1.6] font-[600] text-[#0793EA]'>
                  STEP 02
                </p>
                <p className='text-[1.4rem] lg:leading-[2.2rem] leading-[1.6] font-[500]'>
                  렌트 희망 차량 / 전용 혜택 옵션 확인
                </p>
              </div>
            </InfoItem.StepTitle>
            <div
              className={cn(
                `lg:flex-1 flex flex-col gap-[2rem] lg:ml-0 ml-[1.6rem] p-[1.6rem] pt-[2.4rem] bg-[#FAFAFA] rounded-[0.8rem]`
              )}
            >
              <InfoItem.InnerText>
                희망하시는 차량 선택 후, <br />
                전용 혜택을 옵션란에서 확인하세요.
              </InfoItem.InnerText>
              <Image
                className='hidden lg:block my-0 mx-auto'
                src={getImagePath("/images/complete/step_02_pc.webp")}
                width={266}
                height={273}
                alt='STEP 02 이용대수 선택 > 전용 혜택 선택'
              />
              <Image
                className='w-full max-w-[26.6rem] h-auto block lg:hidden my-0 mx-auto'
                src={getImagePath("/images/complete/step_02_mo.webp")}
                width={266}
                height={273}
                alt='STEP 02 이용대수 선택 > 전용 혜택 선택'
              />
            </div>
          </div>

          <div className='relative lg:flex-[35.2rem] flex flex-col lg:overflow-visible overflow-hidden'>
            <div className='mo-only absolute top-0 bottom-0 left-0 w-[0.9rem]'>
              <span className='absolute top-0 bottom-0 left-0 w-[0.1rem] bg-primary'></span>
              <span className='absolute bottom-0 left-0 w-[0.1rem] h-[1.4rem] bg-primary origin-bottom rotate-[35deg]'></span>
            </div>
            <InfoItem.StepTitle>
              <Image src={getImagePath("/images/complete/ico_step_03.svg")} width={48} height={48} alt='STEP 03' />
              <div>
                <p className='lg:text-[1.3rem] text-[1.2rem] lg:leading-[2.0] leading-[1.6] font-[600] text-[#0793EA]'>
                  STEP 03
                </p>
                <p className='text-[1.4rem] lg:leading-[2.2rem] leading-[1.6] font-[500]'>
                  쿠폰 코드 입력 후 예약자 정보 입력
                </p>
              </div>
            </InfoItem.StepTitle>
            <div
              className={cn(
                `lg:flex-1 flex flex-col gap-[2rem] lg:ml-0 ml-[1.6rem] p-[1.6rem] pt-[2.4rem] bg-[#FAFAFA] rounded-[0.8rem]`
              )}
            >
              <InfoItem.InnerText>
                사전 발급 받으신 전용 쿠폰 번호와 <br />
                예약자 정보를 입력해 주세요.
              </InfoItem.InnerText>
              <Image
                className='hidden lg:block my-0 mx-auto'
                src={getImagePath("/images/complete/step_03_1_pc.webp")}
                width={252}
                height={60}
                alt='STEP 03'
              />
              <Image
                className='w-full max-w-[25.2rem] h-auto block lg:hidden my-0 mx-auto'
                src={getImagePath("/images/complete/step_03_1_mo.webp")}
                width={252}
                height={60}
                alt='STEP 03'
              />
              <InfoItem.InnerText>안심하세요!</InfoItem.InnerText>
              <Image
                className='hidden lg:block my-0 mx-auto'
                src={getImagePath("/images/complete/step_03_2_pc.webp")}
                width={266}
                height={72}
                alt='STEP 03'
              />
              <Image
                className='w-full max-w-[26.6rem] h-auto block lg:hidden my-0 mx-auto'
                src={getImagePath("/images/complete/step_03_2_mo.webp")}
                width={266}
                height={72}
                alt='STEP 03'
              />
              <InfoItem.InnerText>
                렌트 조건에 상관 없이, 어떤 경우에도
                <br />
                혜택 금액은 <span className='font-[700] text-[#e7274f]'>-16,750엔</span>으로 표시됩니다.
                <br />
                오류가 아니니 예약을 계속 진행하세요.
              </InfoItem.InnerText>
            </div>
          </div>
        </div>
      </InfoItem>
    );
  }
}

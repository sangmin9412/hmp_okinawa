import { useLocale, useTranslations } from "next-intl";

export default function CompleteTextContent() {
  const t = useTranslations("complete");
  const locale = useLocale();

  if (locale === "ko") {
    return (
      <>
        <div className='mt-[5.6rem] flex flex-col justify-center items-center gap-[2rem] text-[1.3rem] leading-[2rem] lg:gap-[2.2rem] lg:text-[1.4rem] lg:leading-[2.2rem] text-center'>
          <p dangerouslySetInnerHTML={{ __html: t.raw("description_01") }}></p>
          <p dangerouslySetInnerHTML={{ __html: t.raw("description_02") }}></p>
        </div>
        <div className='mt-[3.2rem] text-[1.2rem] leading-[2rem] text-[#666] text-center'>
          <p dangerouslySetInnerHTML={{ __html: t.raw("description_03") }}></p>
        </div>

        <div className='lg:mt-[3.2rem] mt-[2rem]'>
          <p className='lg:text-[1.6rem] text-[1.4rem] lg:leading-[2.6rem] leading-[2.2rem] font-[500] text-[#002b5f] text-center'>
            현대 모빌리티 패스포트 in 오키나와 혜택과
            <br className='mo-only' /> 주요 안내 사항 확인을 위해
            <br /> <span className='underline underline-offset-4'>카카오톡 채널을 꼭 추가</span>해 주세요!
          </p>
        </div>
      </>
    );
  }

  if (locale === "jp") {
    return (
      <>
        <div className='mt-[5.6rem] flex flex-col justify-center items-center gap-[2rem] text-[1.3rem] leading-[2rem] lg:gap-[2.2rem] lg:text-[1.4rem] lg:leading-[2.2rem] text-center'>
          <p dangerouslySetInnerHTML={{ __html: t.raw("description_01") }}></p>
        </div>
      </>
    );
  }

  return <></>;
}

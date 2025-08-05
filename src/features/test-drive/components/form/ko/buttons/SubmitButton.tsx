import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export interface SubmitButtonProps {
  isSubmitting: boolean;
  isValid: boolean;
}

export default function SubmitButton({ isSubmitting, isValid }: SubmitButtonProps) {
  const t = useTranslations("form");

  const buttonVariant = isSubmitting || !isValid ? "disabled" : undefined;

  return (
    <>
      <div className='flex justify-center flex-col items-center mt-[2.4rem] lg:gap-4 gap-[1.6rem]'>
        <Button variant='kakao' asChild className='w-full lg:w-[48rem] gap-[.8rem] lg:text-[1.8rem] font-[600]'>
          <a href='http://pf.kakao.com/_FQkPn/friend' rel='noopener noreferrer' target='_blank'>
            <Image
              src={getImagePath("/images/complete/ico_kakao_ch.svg")}
              alt={"Copy Icon"}
              width={34}
              height={24}
              unoptimized={true}
            />
            <span className='text-black'>채널 추가</span>
          </a>
        </Button>
        <Button type='submit' className='w-full lg:w-[48rem] lg:text-[1.8rem]' variant={buttonVariant}>
          {isSubmitting ? "Submitting..." : t("submit")}
        </Button>
      </div>
    </>
  );
}

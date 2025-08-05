"use client";

import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";
import InfoDialog from "@/features/test-drive/components/form/jp/dialogs/InfoDialog";
import { cn, getImagePath } from "@/lib/utils";
import Image from "next/image";
import { useMemo } from "react";

const titleMap = {
  1: "基本情報",
  2: "住居形態",
  3: "アンケート"
};

export const TurnTitle = () => {
  const { step } = useMultiStepFormContext();

  const title = useMemo(() => {
    return titleMap[step as keyof typeof titleMap];
  }, [step]);

  return (
    <>
      <div className='flex justify-between items-center mt-[1.6rem] lg:absolute lg:top-0 lg:right-0 lg:justify-end lg:m-0'>
        <h3 className='mo-only text-[1.6rem] font-[500]'>{title}</h3>
        <div className='flex items-center gap-[0.6rem] lg:gap-[2.4rem] lg:py-[1.3rem]'>
          <div
            className={cn(
              "flex items-center gap-[1rem]",
              step === 1 && "[&>.step-number]:bg-[#002C5F] [&>.step-title]:text-[#000]"
            )}
          >
            <p
              className={
                "step-number flex items-center justify-center w-[2rem] lg:w-[2.8rem] h-[2rem] lg:h-[2.8rem] text-[.9rem] lg:text-[1.4rem] font-[500] rounded-full bg-[#999] text-white"
              }
            >
              1
            </p>
            <p className='pc-only step-title text-[1.6rem] text-[#999] font-[500]'>{titleMap[1]}</p>
          </div>
          <Image alt='flow' src={getImagePath("/images/ico_form_flow.svg")} width={17} height={3} />
          <div
            className={cn(
              "flex items-center gap-[1rem]",
              step === 2 && "[&>.step-number]:bg-[#002C5F] [&>.step-title]:text-[#000]"
            )}
          >
            <p
              className={
                "step-number flex items-center justify-center w-[2rem] lg:w-[2.8rem] h-[2rem] lg:h-[2.8rem] text-[.9rem] lg:text-[1.4rem] font-[500] rounded-full bg-[#999] text-white"
              }
            >
              2
            </p>
            <p className='pc-only step-title text-[1.6rem] text-[#999] font-[500]'>{titleMap[2]}</p>
          </div>
          <Image alt='flow' src={getImagePath("/images/ico_form_flow.svg")} width={17} height={3} />
          <div
            className={cn(
              "flex items-center gap-[1rem]",
              step === 3 && "[&>.step-number]:bg-[#002C5F] [&>.step-title]:text-[#000]"
            )}
          >
            <p
              className={
                "step-number flex items-center justify-center w-[2rem] lg:w-[2.8rem] h-[2rem] lg:h-[2.8rem] text-[.9rem] lg:text-[1.4rem] font-[500] rounded-full bg-[#999] text-white"
              }
            >
              3
            </p>
            <p className='pc-only step-title text-[1.6rem] text-[#999] font-[500]'>{titleMap[3]}</p>
          </div>
        </div>
      </div>
      <InfoDialog
        triggerRender={() => (
          <button className='absolute top-0 lg:top-auto lg:bottom-0 right-0'>
            <Image src={getImagePath("/images/ico_info.svg")} alt='info' width={24} height={24} />
          </button>
        )}
      />
    </>
  );
};

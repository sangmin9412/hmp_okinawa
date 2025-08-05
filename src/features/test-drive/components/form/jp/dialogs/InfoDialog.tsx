import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CautionText } from "@/components/ui/text/caution-text";
import { getImagePath } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useState } from "react";

interface InfoDialogProps {
  triggerRender: () => React.ReactNode;
}

export interface InfoDialogRef {
  open: () => void;
}

const InfoDialog = forwardRef<InfoDialogRef, InfoDialogProps>(({ triggerRender }, ref) => {
  const t = useTranslations("intro.info");
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true)
  }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{triggerRender()}</DialogTrigger>
      <DialogContent className='max-w-[32rem] lg:max-w-[736px] p-0 gap-0 bg-[#E5F1FB]'>
        <DialogTitle className='hidden' />
        <div className='lg:p-[4.8rem] lg:pt-[7.2rem] px-[2.4rem] py-[4rem] pt-[4.8rem]'>
          <div className='lg:mb-[1.2rem] mb-[.8rem] flex flex-col justify-center items-center lg:gap-[.8rem] gap-0 font-[500]'>
            <p className='lg:text-[2.4rem] text-[1.5rem] lg:leading-[1] leading-[1.6]'>{t("item_01.carRent")}</p>
            <span className='lg:text-[3.0rem] text-[2rem] lg:leading-[1.8] leading-[1.5] text-[#0793EA]'>
              {t("item_01.carRentPrice")}
            </span>
          </div>
          <div className='flex lg:flex-row flex-col flex-wrap justify-center items-center lg:gap-[1.2rem] lg:text-[1.6rem] text-[1.2rem] leading-[1.5]'>
            <p className='font-[500]'>{t("item_01.carRentPeriod")}</p>
            <p className='font-[400] lg:before:content-[""] lg:before:mr-[1.2rem] lg:before:inline-block lg:before:w-[0.1rem] lg:before:h-[1.2rem] lg:before:bg-[#333]'>
              2025.03.01 ~ 2026.03.01
            </p>
          </div>

          <div className='lg:mb-[3.2rem] mb-[2rem] lg:mt-[.2rem] flex justify-center'>
            <CautionText className='lg:text-[1.2rem] text-[1rem] leading-[inherit] text-[#666] font-[400]'>
              <p dangerouslySetInnerHTML={{ __html: t.raw("item_01.carRentNoti") }} />
            </CautionText>
          </div>

          <div className='flex lg:flex-row flex-col lg:justify-between justify-center align-middle gap-[1.2rem] lg:gap-[.8rem]'>
            <div className='relative flex items-center justify-center flex-col lg:basis-[50.4rem] after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-[0.2rem] after:border-white after:rounded-[.8rem] after:pointer-events-none rounded-[.8rem]'>
              <h4 className='py-[0.8rem] w-full text-center lg:text-[2.0rem] text-[1.2rem] font-[500] leading-[1.6] bg-white rounded-[.8rem_.8rem_0_0]'>
                IONIQ 5
              </h4>
              <Image
                className='hidden lg:block w-[24rem] py-[4rem] lg:m-auto'
                src={getImagePath("/images/intro_ioniq_pc.png")}
                width={368}
                height={199}
                alt='IONIQ 5 PC'
              />
              <Image
                className='w-full max-w-[16.8rem] h-auto block lg:hidden py-[2.3rem]'
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
                className='hidden lg:block w-[24rem] py-[4rem] lg:m-auto'
                src={getImagePath("/images/intro_kona_pc.png")}
                width={368}
                height={199}
                alt='KONA PC'
              />
              <Image
                className='w-full max-w-[17.2rem] h-auto block lg:hidden py-[2.3rem]'
                src={getImagePath("/images/intro_kona_mo.png")}
                width={219}
                height={118}
                alt='KONA MO'
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

InfoDialog.displayName = "InfoDialog";

export default InfoDialog;

import { forwardRef, useImperativeHandle, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";
interface KakaoCheckDialogProps {
  trggerRender: () => React.ReactNode;
}

export interface KakaoCheckDialogRef {
  open: () => void;
}

const KakaoCheckDialog = forwardRef<KakaoCheckDialogRef, KakaoCheckDialogProps>(({ trggerRender }, ref) => {
  const t = useTranslations("complete");
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true)
  }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trggerRender()}</DialogTrigger>
      <DialogContent className='max-w-[32rem] lg:max-w-[46.4rem] p-0 gap-0'>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <DialogDescription className='hidden'></DialogDescription>
        <div className='pt-[4.8rem] pb-[3.2rem] pl-[2rem] pr-[2rem] lg-px-[1rem] overflow-hidden'>
          <p
            className='text-[1.6rem] font-[400] leading-[2.6rem] text-center'
            dangerouslySetInnerHTML={{ __html: t.raw("popup_content_01") }}
          />
        </div>
        <DialogFooter className='px-[2rem] lg:px-[4.8rem] pb-[2rem] lg:pb-[4.8rem]'>
          <div className='flex flex-col justify-center w-full gap-[.8rem] lg:gap-[1.6rem]'>
            <DialogClose asChild>
              <Button
                variant='kakao'
                asChild
                className='flex-1 gap-[.8rem] py-[1.4rem] lg:text-[1.6rem] font-[400]'
                size='sm'
              >
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
            </DialogClose>
            <DialogClose asChild>
              <Button asChild className='flex-1 py-[1.4rem]' type='button' size='sm'>
                <a
                  href='https://www.otsinternational.jp/otsrentacar/ko/okinawa/campaign/hyundaijp-otsrc-specialplan-kor/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  현대 EV 예약하기
                </a>
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

KakaoCheckDialog.displayName = "KakaoCheckDialog";

export default KakaoCheckDialog;

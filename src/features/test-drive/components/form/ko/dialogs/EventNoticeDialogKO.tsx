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
import { TestDriveFormData } from "@/features/test-drive/types";
import { UseFormReturn } from "react-hook-form";

interface EventNoticeDialogProps {
  form: UseFormReturn<TestDriveFormData>;
  trggerRender: () => React.ReactNode;
}

export interface EventNoticeDialogRef {
  open: () => void;
}

const EventNoticeDialogKO = forwardRef<EventNoticeDialogRef, EventNoticeDialogProps>(({ form, trggerRender }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true)
  }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trggerRender()}</DialogTrigger>
      <DialogContent className='max-w-[32rem] lg:max-w-[736px] p-0 gap-0'>
        <DialogHeader>
          <DialogTitle className='max-w-full px-[2rem] lg:px-[3.2rem] py-[1.3rem] lg:py-[2.1rem] font-hyundai-sans-head-kr font-[500] leading-[3rem] text-left bg-[#f5f5f5] rounded-[.8rem_.8rem_0_0]'>
            이벤트 참여 약관 동의
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='hidden'></DialogDescription>
        <div className='pl-[2rem] pr-[2rem] lg-px-[1rem] overflow-hidden'>
          <div className='mt-[3.2rem] lg:mt-[4.8rem] mb-[4rem] lg:mb-[3.2rem] px-0 lg:px-[3.8rem] max-h-[60dvh] overflow-y-auto custom-scrollbar break-all'>
            <h1 className='font-hyundai-sans-head-kr text-[1.8rem] lg:text-[2.4rem] leading-[3rem] lg:leading-[3.8rem] font-[500] text-center'>
              이벤트 참여 약관 동의
            </h1>
            <div className='mt-[4rem]'>
              <ol className='list-none flex flex-col gap-[2.4rem] lg:gap-[4rem] [counter-reset:list-num_0]'>
                <ListItem>
                  <ListTitle>
                    본 이벤트 당첨으로 인해 체험하게 되는 프로그램은 기 안내된 범위에 한 하나 현장 상황에 따라 일부
                    변경될 수 있습니다. 그 외 당첨자가 프로그램을 이용하는 과정에서 추가로 구매하는 물품, 서비스 등에
                    대한 비용은 당첨자가 부담합니다.
                  </ListTitle>
                </ListItem>

                <ListItem>
                  <ListTitle>
                    본 이벤트는 마케팅 활용 및 광고성 정보 수신에 동의하신 고객 대상으로 진행하는 이벤트이며 수집된 개인 정보 및 체험 후 작성하시는 후기는 추후 현대자동차의 마케팅 용도로 사용될 수 있습니다. 
                  </ListTitle>
                </ListItem>
              </ol>
            </div>
          </div>
        </div>
        <DialogFooter className='px-[2rem] lg:px-0 pb-[2rem] lg:pb-[4.8rem]'>
          <div className='flex justify-center w-full'>
            <DialogClose asChild>
              <Button
                className='flex-1 lg:max-w-[24rem]'
                type='button'
                size='sm'
                onClick={() => {
                  form.setValue("eventConsent", "True", { shouldValidate: true });
                }}
              >
                확인
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

EventNoticeDialogKO.displayName = "EventNoticeDialogKO";

export default EventNoticeDialogKO;

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className='relative lg:pl-[2rem] pl-[1.6rem] [counter-increment:list-num_1]'>
      <span className="absolute left-0 top-0 [content:counter(list-num)] before:content-[counter(list-num)] before:text-[1.5rem] lg:before:text-[1.8rem] before:leading-[2.4rem] lg:before:leading-[3rem] before:font-[500] font-hyundai-sans-head-kr">.</span>
      {children}
    </li>
  );
};

const ListTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className='font-hyundai-sans-head-kr text-[1.5rem] lg:text-[1.8rem] leading-[2.4rem] lg:leading-[3rem] font-[500]'>
      {children}
    </p>
  );
};

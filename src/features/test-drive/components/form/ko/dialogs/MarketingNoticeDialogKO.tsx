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
import { CautionText } from "@/components/ui/text/caution-text";

interface MarketingNoticeDialogProps {
  form: UseFormReturn<TestDriveFormData>;
  trggerRender: () => React.ReactNode;
}

export interface MarketingNoticeDialogRef {
  open: () => void;
}

const MarketingNoticeDialogKO = forwardRef<MarketingNoticeDialogRef, MarketingNoticeDialogProps>(
  ({ form, trggerRender }, ref) => {
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
              광고성 정보 수신 동의
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className='hidden'></DialogDescription>
          <div className='pl-[2rem] pr-[2rem] lg-px-[1rem] overflow-hidden'>
            <div className='mt-[3.2rem] lg:mt-[4.8rem] mb-[4rem] lg:mb-[3.2rem] px-0 lg:px-[3.8rem] max-h-[60dvh] overflow-y-auto custom-scrollbar break-all'>
              <h1 className='font-hyundai-sans-head-kr text-[1.8rem] lg:text-[2.4rem] leading-[3rem] lg:leading-[3.8rem] font-[500] text-center'>
                광고성 정보 수신 동의
              </h1>
              <div className='mt-[4rem]'>
                <ol className='list-none flex flex-col gap-[2.4rem] lg:gap-[4rem] [counter-reset:list-num_0]'>
                  <ListItem>
                    <ListTitle>개인정보 수집·이용목적</ListTitle>
                    <ListItemContent>
                      <p>
                        홍보•프로모션•이벤트 소식 제공 목적으로 전자적 전송매체를 통한 현대자동차 및 제3자의 서비스/제품
                        관련 광고성 정보 전송
                      </p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>수집·이용하는 개인 정보의 항목</ListTitle>
                    <ListItemContent>
                      <p>
                        현대자동차에서 제공하는 서비스/제품/이벤트 이용 시 필수/선택적 개인정보 수집 및 이용에 동의한
                        모든 항목(서비스 이용기록 포함)과 이를 조합하여 생성된 정보(단, 고유식별정보 및 민감정보는
                        해당되지 않음)
                      </p>
                      <CautionText className='mt-[.8rem] lg:text-sm text-sm leading-[2rem] text-[#666] font-[400]'>
                        <p>
                          자세한 수집 및 이용 항목은 현대 프라이버시 센터 (
                          <a className='out-link' target='_blank' href='https://privacy.hyundai.com/'>
                            https://privacy.hyundai.com/
                          </a>
                          )의 개인정보 처리방침을 통해 확인하실 수 있습니다.
                        </p>
                      </CautionText>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>광고성 정보 수신 동의 기간</ListTitle>
                    <ListItemContent>
                      <p>서비스 이용기간 또는 동의 철회 시까지</p>
                      <CautionText className='mt-[.8rem] lg:text-sm text-sm leading-[2rem] text-[#666] font-[400]'>
                        <p>
                          관련 법령에 따라 최종 광고성 정보 수신 동의일로부터 2년 경과 전 동의 여부 재확인 절차를
                          진행하며, 고객님께서 거부의사 표시를 하지 않는 경우 동의한 것으로 간주됩니다.
                        </p>
                      </CautionText>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>
                      고객님은 전자적 전송매체를 통한 광고성 정보 수신 동의에 거부할 수 있으나, 동의 거부시 본 이벤트
                      참여가 불가능할 수 있습니다.
                    </ListTitle>
                  </ListItem>
                </ol>

                <ListItemContent>
                  <p className='pl-[1.6rem] lg:pl-[2rem] mt-[2.4rem] lg:mt-[4rem]'>
                    본인은 현대자동차가 상기와 같이 본인의 개인정보를 수집·이용하는 것에 대하여 동의합니다.
                  </p>
                </ListItemContent>
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
                    form.setValue("marketingConsent", "True", { shouldValidate: true });
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
  }
);

MarketingNoticeDialogKO.displayName = "MarketingNoticeDialogKO";

export default MarketingNoticeDialogKO;

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

const ListItemContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mt-[.8rem] ml-[-1.6rem] lg:ml-[-2rem] font-hyundai-sans-head-kr text-[1.3rem] lg:text-[1.4rem] leading-[2.2rem] lg:leading-[2.2rem]'>
      {children}
    </div>
  );
};

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
import { CautionText } from "@/components/ui/text/caution-text";
import { UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

interface MarketingConsentDialogProps {
  form: UseFormReturn<TestDriveFormData>;
  trggerRender: () => React.ReactNode;
}

export interface MarketingConsentDialogRef {
  open: () => void;
}

const MarketingConsentDialogKO = forwardRef<MarketingConsentDialogRef, MarketingConsentDialogProps>(
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
              마케팅 목적의 개인정보 수집 및 이용 동의
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className='hidden'></DialogDescription>
          <div className='pl-[2rem] pr-[2rem] lg-px-[1rem] overflow-hidden'>
            <div className='mt-[3.2rem] lg:mt-[4.8rem] mb-[4rem] lg:mb-[3.2rem] px-0 lg:px-[3.8rem] max-h-[60dvh] overflow-y-auto custom-scrollbar break-all'>
              <h1 className='text-[1.8rem] lg:text-[2.4rem] leading-[3rem] lg:leading-[3.8rem] font-hyundai-sans-head-kr font-[500] text-center'>
                마케팅 목적의 개인정보 수집 및<br className="mo-only" /> 이용 동의
              </h1>
              <div className='mt-[2.4rem] lg:mt-[4rem]'>
                <ol className='list-none flex flex-col gap-[2.4rem] lg:gap-[4rem] [counter-reset:list-num_0]'>
                  <ListItem>
                    <ListTitle>개인정보 수집·이용목적</ListTitle>
                    <ListItemContent>
                      <p>
                        본 서비스/제품/이벤트와 현대자동차가 제공하는 다른 서비스/제품/이벤트 안내 등 개인맞춤형 소식
                        제공, 최신 기업정보 안내, 이벤트•판촉행사 및 제휴서비스 혜택 안내, 경품 배송 혜택 제공, 차량
                        정비 서비스 관련 상품 및 혜택 안내, 시장 조사, 고객 세분화 및 라이프 스타일, 선호도에 따른
                        개인맞춤형 소식 제공, 현대자동차 및 제3자의 제품/서비스/혜택 관련 개인맞춤형 소식 제공, 상기
                        목적 달성을 위한 개인정보의 결합 및 분석
                      </p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>수집·이용하는 개인 정보의 항목</ListTitle>
                    <ListItemContent>
                      <p>
                        현대자동차에서 제공하는 서비스/제품/이벤트 이용 시 필수/선택적 개인정보 수집 및 이용에 동의한
                        모든 항목(서비스 이용기록 포함)과 이를 조합하여 생성된 정보
                        <br />
                        (단, 고유식별정보 및 민감정보는 해당되지 않음)
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
                    <ListTitle>개인정보 보유 및 이용기간</ListTitle>
                    <ListItemContent>
                      <p>정보 수집일로부터 2년</p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>
                      고객님은 개인정보 수집·이용에 대한 동의를 거부할 수 있으며, 동의 거부시 본 이벤트 참여가 불가능할
                      수 있습니다.
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
                    form.setValue("cppd", "True", { shouldValidate: true });
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

MarketingConsentDialogKO.displayName = "MarketingConsentDialogKO";

export default MarketingConsentDialogKO;

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className='relative lg:pl-[2rem] pl-[1.6rem] [counter-increment:list-num_1]'>
      <span className="absolute left-0 top-0 [content:counter(list-num)] before:content-[counter(list-num)] before:text-[1.5rem] lg:before:text-[1.8rem] before:leading-[2.4rem] lg:before:leading-[3rem] before:font-[500] font-hyundai-sans-head-kr">.</span>
      {children}
    </li>
  );
};

const ListTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <p
      className={cn(
        "font-hyundai-sans-head-kr text-[1.5rem] lg:text-[1.8rem] leading-[2.4rem] lg:leading-[3rem] font-[500]",
        className
      )}
    >
      {children}
    </p>
  );
};

const ListItemContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "mt-[.8rem] ml-[-1.6rem] lg:ml-[-2rem] font-hyundai-sans-head-kr text-[1.3rem] lg:text-[1.4rem] leading-[2.2rem] lg:leading-[2.2rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

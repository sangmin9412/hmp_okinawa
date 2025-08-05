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

interface PrivacyPolicyDialogProps {
  form: UseFormReturn<TestDriveFormData>;
  trggerRender: () => React.ReactNode;
}

export interface PrivacyPolicyDialogRef {
  open: () => void;
}

const PrivacyPolicyDialogKO = forwardRef<PrivacyPolicyDialogRef, PrivacyPolicyDialogProps>(
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
              개인정보 수집 및 활용 동의
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className='hidden'></DialogDescription>
          <div className='pl-[2rem] pr-[2rem] lg-px-[1rem] overflow-hidden'>
            <div className='mt-[3.2rem] lg:mt-[4.8rem] mb-[4rem] lg:mb-[3.2rem] px-0 lg:px-[3.8rem] max-h-[60dvh] overflow-y-auto custom-scrollbar break-all'>
              <h1 className='font-hyundai-sans-head-kr text-[1.8rem] lg:text-[2.4rem] leading-[3rem] lg:leading-[3.8rem] font-[500] text-center'>
                개인정보 수집 및 활용 동의
              </h1>
              <div className='mt-[4rem]'>
                <ol className='list-none flex flex-col gap-[2.4rem] lg:gap-[4rem] [counter-reset:list-num_0]'>
                  <ListItem>
                    <ListTitle>수집·이용하는 개인 정보의 항목</ListTitle>
                    <ListItemContent>
                      <p>
                        [필수] 성명, 여권에 기재된 영문 성명, 휴대전화, 이메일 주소, 주소, 생년월일, 성별, 직업, 시승
                        희망 기간, 현재 차량 소유 여부, 자동차 구입 또는 교체 계획, 현대 EV 관심 여부
                      </p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>개인정보 수집·이용 목적</ListTitle>
                    <ListItemContent>
                      <p>
                        이벤트 참여 고객관리, 이벤트 참여 자격확인, 당첨자 선정, 당첨 사실 및 이용안내, 경품 상품 발송
                        및 배송, 차량 구입 관련 구매 상담, 제품/서비스 이용에 대한 분석 및 인구 통계학적 분석을 통한
                        기존 제품/서비스 개선 등
                      </p>
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
                    form.setValue("ccpd", "True", { shouldValidate: true });
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

PrivacyPolicyDialogKO.displayName = "PrivacyPolicyDialogKO";

export default PrivacyPolicyDialogKO;

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

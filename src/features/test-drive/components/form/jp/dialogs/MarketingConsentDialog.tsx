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

interface MarketingConsentDialogProps {
  form: UseFormReturn<TestDriveFormData>;
  trggerRender: () => React.ReactNode;
}

export interface MarketingConsentDialogRef {
  open: () => void;
}

const MarketingConsentDialog = forwardRef<MarketingConsentDialogRef, MarketingConsentDialogProps>(
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
            <DialogTitle className='max-w-full px-[2rem] lg:px-[3.2rem] py-[1.3rem] lg:py-[2.1rem] leading-[3rem] text-left bg-[#f5f5f5] rounded-[.8rem_.8rem_0_0]'>
              マーケティング情報の活用
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className='hidden'></DialogDescription>
          <div className='pl-[2rem] pr-[2rem] lg-px-[1rem] overflow-hidden'>
            <div className='mt-[3.2rem] lg:mt-[4.8rem] mb-[4rem] lg:mb-[3.2rem] px-0 lg:px-[3.8rem] max-h-[60dvh] overflow-y-auto custom-scrollbar break-all'>
              <h1 className='text-[1.8rem] lg:text-[2.4rem] leading-[3rem] lg:leading-[3.8rem] font-[500] text-center'>
                マーケティング情報の活用
              </h1>
              <div className='mt-[2.4rem] lg:mt-[4rem]'>
                <ul className='flex flex-col gap-[2.4rem] lg:gap-[4rem]'>
                  <ListItem>
                    <ListTitle>収集目的</ListTitle>
                    <ListItemContent>
                      <p>
                        車両購入案内、製品、サービス、キャンペーン及び各種イベント関連情報等をご案内する為、商品・サービスの向上や新製品の開発を目的としたアンケート調査を行う為など
                      </p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>収集項目</ListTitle>
                    <ListItemContent>
                      <p>氏名、生年月日、電話番号、都道府県、その他の情報</p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>保有期間</ListTitle>
                    <ListItemContent>
                      <p>5 年</p>
                      <CautionText className='mt-[1.6rem] text-sm leading-[2rem] text-[#666] font-[400]'>
                        <p>
                          お客様宛に、Hyundaiの製品、サービス、キャンペーン及び各種イベント関連情報のご案内を電子メール・SMS等でお送りいたします。
                        </p>
                      </CautionText>
                      <CautionText className='mt-[.8rem] text-sm leading-[2rem] text-[#666] font-[400]'>
                        <p>お客様は、上記ご案内の受信を拒否することができます。</p>
                      </CautionText>
                    </ListItemContent>
                  </ListItem>
                </ul>
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
                  確認
                </Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
);

MarketingConsentDialog.displayName = "MarketingConsentDialog";

export default MarketingConsentDialog;

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className='marker:text-[1.5rem] lg:marker:text-[1.8rem] marker:leading-[2.4rem] lg:marker:leading-[3rem] marker:font-[500]'>
      {children}
    </li>
  );
};

const ListTitle = ({ children }: { children: React.ReactNode }) => {
  return <p className='text-[1.5rem] lg:text-[1.8rem] leading-[2.4rem] lg:leading-[3rem] font-[500]'>{children}</p>;
};

const ListItemContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mt-[.8rem] text-[1.3rem] lg:text-[1.6rem] leading-[2.2rem] lg:leading-[2.6rem]'>{children}</div>
  );
};

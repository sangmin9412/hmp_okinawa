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
import DotText from "@/components/ui/text/dot-text";
import { UseFormReturn } from "react-hook-form";

interface PrivacyPolicyDialogProps {
  form: UseFormReturn<TestDriveFormData>;
  trggerRender: () => React.ReactNode;
}

export interface PrivacyPolicyDialogRef {
  open: () => void;
}

const PrivacyPolicyDialog = forwardRef<PrivacyPolicyDialogRef, PrivacyPolicyDialogProps>(
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
              個人情報の取扱いについて
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className='hidden'></DialogDescription>
          <div className='pl-[2rem] pr-[2rem] lg-px-[1rem] overflow-hidden'>
            <div className='mt-[3.2rem] lg:mt-[4.8rem] mb-[4rem] lg:mb-[3.2rem] px-0 lg:px-[3.8rem] max-h-[60dvh] overflow-y-auto custom-scrollbar break-all'>
              <h1 className='text-[1.8rem] lg:text-[2.4rem] leading-[3rem] lg:leading-[3.8rem] font-[500] text-center'>
                個人情報の取扱いについて
              </h1>
              <p className='mt-[1.6rem] text-[1.3rem] lg:text-[1.6rem] leading-[2.2rem] lg:leading-[2.6rem]'>
                Hyundai Mobility Japan 株式会社 （以下「当社」といいます）
                は、次の原則に基づき、以下の通り個人情報の適正な取り扱いに努めます。
              </p>
              <div className='mt-[4rem]'>
                <ol className='list-none flex flex-col gap-[2.4rem] lg:gap-[4rem] [counter-reset:list-num_0]'>
                  <ListItem>
                    <ListTitle>個人情報の取得について</ListTitle>
                    <ListItemContent>
                      <p>
                        特定の個人を識別できる情報を個人情報といいます。また、他の情報とあわせることで特定の個人が識別できる情報も個人情報といたします。ウェブサイトへのご入力や各種書面のご提出等を通じてお客様からご提供いただく情報もこれにあたります。
                        当社は、適法、且つ、公正な手段によって、個人情報を取得致します。
                      </p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>個人情報の利用目的について</ListTitle>
                    <ListItemContent>
                      <p>当社は、 お客様の個人情報を下記1から7の利用目的の範囲内で必要な限りにおいて利用します。</p>
                      <ul className='mt-[1.6rem] flex flex-col gap-[.8rem]'>
                        <li>
                          <DotText>イベント主催者を通じてEV体験保険に加入している。</DotText>
                        </li>
                        <li>
                          <DotText>当社製品に関するリコール、サービスキャンペーンのご案内および実施</DotText>
                        </li>
                        <li>
                          <DotText>当社の製品情報、イベント情報等についてのご案内</DotText>
                        </li>
                        <li>
                          <DotText>
                            当社の事業における商品、サービスの企画・開発、消費者動向調査、顧客満足度調査等のマーケティング活動のためのアンケート調査
                          </DotText>
                        </li>
                        <li>
                          <DotText>当社において取り扱う商品・サービス等の調査・研究開発・品質向上を行うこと</DotText>
                        </li>
                        <li>
                          <DotText>各種お問い合わせ、資料請求等への対応</DotText>
                        </li>
                        <li>
                          <DotText>与信判断および与信管理</DotText>
                        </li>
                      </ul>
                      <p className='mt-[1.6rem]'>
                        なお、当社が個人情報取得の際に別途利用目的を明示した場合には、上記利用目的に加え、明示した利用目的の範囲内で利用します。
                      </p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>お客様の個人情報の第三者への提供について</ListTitle>
                    <ListItemContent>
                      <p>
                        当社は、次の場合を除いて、お客様の事前のご同意をいただかない限り、お客様の個人情報を第三者に提供することはありません。ただし、上記2．記載の利用目的の達成に必要な範囲で当社が業務委託先に対してお客様の個人情報を預託する場合は、この限りではありません。
                      </p>
                      <ul className='mt-[1.6rem] flex flex-col gap-[.8rem]'>
                        <li>
                          <DotText>法令に基づく場合</DotText>
                        </li>
                        <li>
                          <DotText>
                            人の生命、身体又は財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき
                          </DotText>
                        </li>
                        <li>
                          <DotText>
                            公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき
                          </DotText>
                        </li>
                        <li>
                          <DotText>
                            国の機関又は地方公共団体若しくはその依託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき。
                          </DotText>
                        </li>
                      </ul>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>お客様の個人情報の共同利用について</ListTitle>
                    <ListItemContent>
                      <p>
                        当社は、本プライバシー・ポリシー第2項記載の利用目的達成に必要な範囲内において、個人情報の取り扱いの全部、又は、一部を委託することがあります。
                      </p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>利用状況に基づく情報（ターゲティング及びリターゲティング）</ListTitle>
                    <ListItemContent>
                      <p>
                        当社は、ウェブサイトの内容をお客様の関心に合わせ改善していきます。
                        <br />
                        ウェブサイトの利用の好みと、特に人気のある分野を知るために、当社は次の分析ツールを使用しています
                      </p>
                      <p className='relative mt-[1.6rem] pl-[1rem] text-sm text-[#666]'>
                        <span className='absolute top-0 left-0'>
                          <svg width='2' height='20' viewBox='0 0 2 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect y='5' width='2' height='2' rx='1' fill='#666666' />
                            <rect y='13' width='2' height='2' rx='1' fill='#666666' />
                          </svg>
                        </span>
                        Google Analytics
                        <br />
                        当社が上記の分析ツールを使用して、当社のウェブサイトへの訪問情報を収集/評価することをお客様が望まない場合は、いつでも拒否（「オプトアウト」）を行うことができます。当社はお客様の拒否に従うため、ご使用のブラウザにオプトアウトCookieを設定します。このCookieは、お客様のオプトアウトを示すためだけに用いられます。技術的な理由により、オプトアウトCookieは設定されたブラウザにしか効力がないため、注意してください。Cookieを削除する、あるいは別のブラウザまたはデバイスを使用する場合は、オプトアウトを再設定してください。
                      </p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>安全管理措置について</ListTitle>
                    <ListItemContent>
                      <p>当社は、個人情報の正確性を保ち、これを安全に管理するため、以下の措置を行います。</p>
                      <ul className='mt-[1.6rem] flex flex-col gap-[.8rem]'>
                        <li>
                          <DotText>
                            個人情報の紛失、破壊、改ざん及び漏洩等を防止するため、不正アクセス、コンピューターウイルス等に対する適正な情報セキュリティー対策を講じます。
                          </DotText>
                        </li>
                        <li>
                          <DotText>個人情報を送信する際には合理的な範囲内でのセキュリティー強化に努めます。</DotText>
                        </li>
                        <li>
                          <DotText>個人情報保護管理者を任命し、個人情報の適正な管理を実施します。</DotText>
                        </li>
                        <li>
                          <DotText>
                            役員及び従業員に対し、個人情報の保護及び適正な管理方法についての研修を実施し、日常業務における個人情報を適正に取り扱います。
                          </DotText>
                        </li>
                        <li>
                          <DotText>
                            個人情報を共同利用する場合、又は、個人情報の取り扱いを委託する場合には、共同利用者、又は、委託先につき厳正な調査を行った上、秘密を保持させるために、適正な管理・監督を行います。
                          </DotText>
                        </li>
                      </ul>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>個人情報の開示・訂正・利用停止等について</ListTitle>
                    <ListItemContent>
                      <p>
                        お客様は、当社が保有するお客様ご本人の個人情報について、当社所定の手続により開示をご請求いただくことができます。お客様ご本人の個人情報の開示を希望される場合は、「HyundaiSupport@cc.hyundaijapan.com
                        」にお問い合わせください。開示に必要な手続についてご案内させていただきます。その他、お客様ご本人の個人情報の訂正・利用停止・削除をお求めになりたい場合等、個人情報に関するお問い合わせやご相談につきましても、「HyundaiSupport@cc.hyundaijapan.com」にて承ります。いずれの場合におきましても、当社は、個人情報保護法の趣旨に則り、適切に対応させていただきます。
                      </p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListTitle>プライバシー・ポリシーの変更手続き</ListTitle>
                    <ListItemContent>
                      <p>
                        当社は、必要に応じて、本プライバシー・ポリシーを変更することがあります。当社は、本プライバシー・ポリシーを変更する場合には、変更後の本プライバシー・ポリシーの施行時期及び内容を当社のウェブサイト上での表示その他の適切な方法により周知し、またはお客様に通知します。
                      </p>
                    </ListItemContent>
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
                    form.setValue("ccpd", "True", { shouldValidate: true });
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

PrivacyPolicyDialog.displayName = "PrivacyPolicyDialog";

export default PrivacyPolicyDialog;

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className='relative lg:pl-[2rem] pl-[1.6rem] [counter-increment:list-num_1]'>
      <span className="absolute left-0 top-0 [content:counter(list-num)] before:content-[counter(list-num)] before:text-[1.5rem] lg:before:text-[1.8rem] before:leading-[2.4rem] lg:before:leading-[3rem] before:font-[500] font-hyundai-sans-head-kr">.</span>
      {children}
    </li>
  );
};

const ListTitle = ({ children }: { children: React.ReactNode }) => {
  return <p className='text-[1.5rem] lg:text-[1.8rem] leading-[2.4rem] lg:leading-[3rem] font-[500]'>{children}</p>;
};

const ListItemContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mt-[.8rem] ml-[-1.6rem] lg:ml-[-2rem] text-[1.3rem] lg:text-[1.6rem] leading-[2.2rem] lg:leading-[2.6rem]'>
      {children}
    </div>
  );
};

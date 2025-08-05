import { DotList } from "@/app/[locale]/(components)/dot-list";
import { NumberList } from "@/app/[locale]/(components)/number-list";

export default function TermsConditionsPage() {
  return (
    <div className='language-select-height pb-[8rem] lg:pb-[16rem]'>
      <div className='container'>
        <h1 className='text-[2rem] lg:text-[3.2rem] leading-[3.2rem] lg:leading-[5.2rem] font-[500]'>
          Hyundai Mobility Passport 
          <br className='mo-only' />
          投稿キャンペーン 応募規約
        </h1>

        <div className='overflow-hidden mt-[4rem] p-[1.8rem] pr-[1rem] lg:p-[2.4rem] lg:pr-[2rem] rounded-[0.8rem] lg:rounded-[0.7rem] border-[#e9e9e9] border-[1px]'>
          <div className='custom-scrollbar h-[24.2rem] lg:h-[45rem] overflow-y-scroll text-[1.2rem] leading-[2rem] text-[#191919]'>
            <div className='flex flex-col gap-[4rem] [&>div]:flex [&>div]:flex-col [&>div]:gap-[0.4rem] [&>div]:lg:gap-[0.8rem] [&_.title]:font-[500]'>
              <div>
                <p>
                  本規約は、Hyundai Mobility Japan株式会社（以下「当社」といいます）が実施する
                  <br />
                  「Hyundai Mobility
                  Passport 投稿キャンペーン」（以下「本キャンペーン」といいます）への応募に関する条件を定めるものです。
                  <br />
                  応募者は、本キャンペーンへの応募をもって、本規約に同意したものとみなされます。
                </p>
              </div>
              <div>
                <h3 className='title'>第1条（キャンペーン概要）</h3>
                <p>
                  本キャンペーンは、Hyundai Mobility Passport in
                  Okinawaクーポンを発行していただいたお客様、又は、クーポンを利用し、OTSレンタカーにて対象車両を予約・ご利用いただいたお客様を対象に、SNSにてご利用に関する投稿（写真1枚以上および100文字以上のメッセージ）をしていただいた方の中から、抽選で毎月2名様に旅行ギフト券（5万円相当、現金との引換不可）を進呈するものです。
                </p>
              </div>
              <div>
                <h3 className='title'>第2条（応募方法）</h3>
                <NumberList
                  items={[
                    <div key='1'>
                      応募者ご本人のSNSアカウントにて、以下の条件を満たす投稿を行ってください。
                      <NumberList
                        items={[
                          "Hyundai Mobility Passportクーポンの発行、または対象レンタカーの利用が確認できること",
                          "必須ハッシュタグ（当社が指定するもの）を付けること",
                          "写真1枚以上および100文字以上のメッセージを含むこと"
                        ]}
                        className='[&>li::before]:content-["("_counter(number)_")"]'
                      />
                    </div>,
                    "投稿は公開設定（非公開アカウントは対象外）とし、キャンペーン事務局からの連絡を受け取れる状態である必要があります。"
                  ]}
                />
              </div>
              <div>
                <h3 className='title'>第3条（当選および景品について）</h3>
                <NumberList
                  items={[
                    "当選者は厳正なる抽選の上で決定され、当社公式SNSまたは当社からのご連絡により通知されます。",
                    "景品は当選者1名につき1回限りとし、応募は何度でも可能ですが、複数当選はできません。",
                    "景品の内容は予告なく変更される場合があります。",
                    "景品の譲渡・換金・転売は禁止します。"
                  ]}
                />
              </div>
              <div>
                <h3 className='title'>第4条（投稿内容の取り扱い）</h3>
                <NumberList
                  items={[
                    <span key='1'>
                      応募者は、投稿内容（写真・文章等）に関する著作権・肖像権その他一切の権利について、当社が本キャンペーンの告知、広報、
                      <br />
                      プロモーション等に利用することを無償で許諾するものとします。
                    </span>,
                    "投稿に関し、第三者の権利侵害（無断撮影・転載等）があった場合、当社は一切の責任を負いません。"
                  ]}
                />
              </div>
              <div>
                <h3 className='title'>第5条（応募無効・当選取消）</h3>
                <div>
                  <span>以下の場合には、応募または当選を無効とする場合があります。</span>
                  <DotList
                    className='gap-0 text-[#191919]'
                    items={[
                      "投稿内容に虚偽・不正・不適切な表現が含まれる場合",
                      "ご本人確認ができない場合",
                      "応募条件を満たしていない場合",
                      "当社からの連絡が一定期間取れない場合",
                      "その他当社が不適当と判断した場合"
                    ]}
                  />
                </div>
              </div>
              <div>
                <h3 className='title'>第6条（個人情報の取扱い）</h3>
                <NumberList
                  items={[
                    <span key='1'>
                      応募時または当選時に取得する個人情報（氏名、連絡先等）は、以下の目的でのみ利用します。
                      <NumberList
                        items={["当選者への連絡および景品発送", "本キャンペーン運営上の確認対応"]}
                        className='[&>li::before]:content-["("_counter(number)_")"]'
                      />
                    </span>,
                    "当社のプライバシーポリシーに従って適切に取り扱います。"
                  ]}
                />
              </div>
              <div>
                <h3 className='title'>第7条（免責事項）</h3>
                <NumberList
                  items={[
                    "通信回線やシステムの障害・SNSの仕様変更等により本キャンペーンの運営に支障が生じた場合、当社は責任を負わないものとします。",
                    "本キャンペーンの内容は、予告なく変更・中止となる場合があります。"
                  ]}
                />
              </div>
              <div>
                <h3 className='title'>第8条（準拠法・裁判管轄）</h3>
                <p>
                  本規約の解釈および適用については日本法に準拠し、本キャンペーンに関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

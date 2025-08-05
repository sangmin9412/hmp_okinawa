import { CautionText } from "@/components/ui/text/caution-text";
import { FormProvider } from "@/contexts/MultiStepFormContext";
import TestDriveForm from "@/features/test-drive/components/form";
import { TurnTitle } from "@/features/test-drive/components/form/jp/TurnTitle";
import { getLocale, getTranslations } from "next-intl/server";

export const FormContainer = async () => {
  const t = await getTranslations("form");
  const locale = await getLocale();

  return (
    <FormProvider>
      <section>
        <div className='container'>
          <div className='mb-[3.2rem] relative'>
            <h2
              className='text-[2rem] lg:text-[3.2rem] leading-[3.2rem] lg:leading-[5.2rem] font-[500]'
              dangerouslySetInnerHTML={{
                __html: t.raw("title_02")
              }}
            />
            <CautionText className='mt-[1.6rem] text-[#666] text-[1.1rem] font-[400]'>
              <p dangerouslySetInnerHTML={{ __html: t.raw("caution") }} />
            </CautionText>
            {locale === "jp" && (
              <>
                <CautionText className='mt-[.8rem] text-[#666] text-[1.1rem] font-[400]'>
                  <p dangerouslySetInnerHTML={{ __html: t.raw("caution_02") }} />
                </CautionText>
                <TurnTitle />
              </>
            )}
          </div>
          <div className='pt-[2.4rem] lg:pt-[4rem] border-t border-[#999999]'>
            <TestDriveForm />
          </div>
        </div>
      </section>
    </FormProvider>
  );
};

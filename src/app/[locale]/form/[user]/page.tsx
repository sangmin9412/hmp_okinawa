import { FormContainer } from "@/app/[locale]/form/(containers)/form-container";
// import { TitleContainer } from "@/app/[locale]/form/(containers)/title-container";
// import { LanguageSelectContainer } from "@/app/[locale]/(containers)/language-select-container";

export default async function FormPage() {
  return (
    <div className='language-select-height pb-[8rem] lg:pb-[16rem]'>
      <h1 className='blind'>Form</h1>
      {/* <LanguageSelectContainer /> */}
      {/* <TitleContainer /> */}
      <FormContainer />
    </div>
  );
}

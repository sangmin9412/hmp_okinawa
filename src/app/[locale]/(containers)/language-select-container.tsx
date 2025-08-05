import LanguageSelect from "@/components/ui/language-select";

export const LanguageSelectContainer = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-end mb-6'>
          <div className='w-[17.5rem]'>
            <LanguageSelect />
          </div>
        </div>
      </div>
    </section>
  );
}; 
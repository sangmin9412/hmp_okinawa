import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { PostalCode } from "@/features/test-drive/types/postal-code";
import DotText from "@/components/ui/text/dot-text";

interface JapaneseAddressSearchProps {
  searchTerm: string;
  isLoading: boolean;
  error: string;
  addresses: PostalCode[];
  onSearch: (value: string) => void;
  onSelect: (address: PostalCode) => void;
}

export function JapaneseAddressSearch({
  searchTerm,
  isLoading,
  error,
  addresses,
  onSearch,
  onSelect
}: JapaneseAddressSearchProps) {
  const t = useTranslations("form");
  return (
    <div>
      <div>
        <div>
          <Input
            type='text'
            placeholder={t("placeholder.postal_code_search")}
            value={searchTerm}
            onChange={e => onSearch(e.target.value)}
          />
        </div>
        <DotText className='mt-[1.6rem]'>{t("text.postal_code_search_description")}</DotText>
      </div>

      <div className='mt-[2.4rem] lg:mt-[4rem]'>
        <div className='flex items-center h-[3.6rem] lg:h-[5.4rem] text-center bg-[#f4f4f4] border-t border-[#666]'>
          <p className='flex-[0_0_11rem] lg:flex-[0_0_16rem] text-[1.3rem] lg:text-[1.4rem]'>郵便番号</p>
          <p className='flex-1 text-[1.3rem] lg:text-[1.4rem]'>住所</p>
        </div>
        <div className='h-[444px] max-h-[60dvh] overflow-y-auto custom-scrollbar'>
          {isLoading && (
            <div className='text-center py-4'>
              <p className='text-sm text-muted-foreground'>{t("text.searching")}</p>
            </div>
          )}

          {error && (
            <div className='text-center py-2'>
              <p className='text-sm text-destructive'>{error}</p>
            </div>
          )}
          {addresses.length > 0 && (
            <>
              {addresses.map((address, index) => (
                <button
                  key={index}
                  type='button'
                  className='flex items-center w-full h-[3.6rem] lg:h-[5.4rem] text-center border-b border-[#e9e9e9] hover:bg-primary/10 rounded-md transition-colors'
                  onClick={() => onSelect(address)}
                >
                  <p className='p-[.8rem] lg:p-[1.6rem] flex-[0_0_11rem] lg:flex-[0_0_16rem] text-[1.3rem] lg:text-[1.4rem] text-[#999]'>
                    {address.postal_code}
                  </p>
                  <p className='p-[.8rem] lg:p-[1.6rem] w-max flex-1 text-[1.3rem] lg:text-[1.4rem] text-left whitespace-nowrap overflow-x-auto'>
                    {address.prefecture} {address.city} {address.town}
                  </p>
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

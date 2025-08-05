import { useState } from "react";
import { useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { TestDriveFormData } from "@/features/test-drive/types";
import { useParams } from "next/navigation";
import { ADDRESS_SEARCH_COMPONENTS, SupportedLocale } from "@/features/test-drive/components/form/dialogs/address-search/address-search-registry";
import { useAddressSearch } from "@/features/test-drive/components/form/dialogs/address-search/use-address-search";

interface PostalCodeSearchDialogProps {
  form: UseFormReturn<TestDriveFormData>;
}

export default function PostalCodeSearchDialog({ form }: PostalCodeSearchDialogProps) {
  const { locale } = useParams();
  const t = useTranslations("form");
  const [open, setOpen] = useState(false);

  const { searchTerm, isLoading, error, addresses, handleSearch, handleAddressSelect, initializeKoreanPostcode } = useAddressSearch({
    form,
    onClose: () => setOpen(false)
  });

  const AddressSearchComponent = ADDRESS_SEARCH_COMPONENTS[locale as SupportedLocale];

  if (!AddressSearchComponent) {
    return null; // 또는 기본 컴포넌트 반환
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outlineTertiary' type='button' className='p-0 w-[9.6rem] lg:w-[16rem] h-[4rem] text-[1.3rem] lg:text-[1.4rem]'>
          {t("button.search_postal_code")}
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[32rem] lg:max-w-[736px] p-0 gap-0' aria-describedby='postal-code-search-description'>
        <DialogHeader>
          <DialogTitle className='max-w-full px-[2rem] lg:px-[3.2rem] py-[1.3rem] lg:py-[2.1rem] leading-[3rem] text-left bg-[#f5f5f5] rounded-[.8rem_.8rem_0_0]'>
            {t("dialog.postal_code_search")}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='hidden'></DialogDescription>
        <div className='p-[2rem_.8rem] lg:p-[4.8rem] overflow-hidden'>
          <AddressSearchComponent
            searchTerm={searchTerm}
            isLoading={isLoading}
            error={error}
            addresses={addresses}
            onSearch={handleSearch}
            onSelect={handleAddressSelect}
            onInitialize={initializeKoreanPostcode}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

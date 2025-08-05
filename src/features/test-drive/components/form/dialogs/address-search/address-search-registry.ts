import { JapaneseAddressSearch } from "@/features/test-drive/components/form/jp/dialogs/address-search/japanese-address-search";
import { KoreanAddressSearch } from "@/features/test-drive/components/form/ko/dialogs/address-search/korean-address-search";

export const ADDRESS_SEARCH_COMPONENTS = {
  ko: KoreanAddressSearch,
  jp: JapaneseAddressSearch
} as const;

export type SupportedLocale = keyof typeof ADDRESS_SEARCH_COMPONENTS;

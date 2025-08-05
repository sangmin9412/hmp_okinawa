import {getRequestConfig} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import { LocaleType } from '@/types';
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as LocaleType)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(`@/locale/${locale}.json`)).default
  };
});
import { ReactNode } from 'react';
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { AlertProvider } from '@/contexts/AlertContext';
import { Toaster } from "@/components/ui/toaster";

interface AppProviderProps {
  children: ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}

export default function AppProvider({ children, messages, locale }: AppProviderProps) {
  return (
    <NextIntlClientProvider 
      messages={messages} 
      locale={locale}
    >
      <AlertProvider>
        {children}
        <Toaster />
      </AlertProvider>
    </NextIntlClientProvider>
  );
} 
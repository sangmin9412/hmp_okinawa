import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { LocaleType } from "@/types";
import Header from "@/components/ui/header";
import Script from "next/script";
import Footer from "@/components/ui/footer";
import AppProvider from "@/components/providers/app-provider";
import TopBanner from "@/app/[locale]/(components)/top-banner";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as LocaleType)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name='x-locale' content={locale} />
        {/* 다음 주소 검색 API */}
        <Script src='//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js' strategy='beforeInteractive' />
      </head>
      <body>
        <AppProvider messages={messages} locale={locale}>
          <Header />
          <TopBanner />
          <div id='content' className='lg:pt-[4rem] pt-[4rem]'>
            {children}
          </div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}

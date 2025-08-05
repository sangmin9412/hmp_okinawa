import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import Link from "next/link";
import { getLocale } from "next-intl/server";
export default async function Header() {
  const locale = await getLocale();

  return (
    <header className='flex items-center justify-center h-[5.6rem] lg:h-[7.2rem]'>
      <div className='container'>
        <div className='flex items-center'>
          <Link href={`/${locale}`}>
            <Image className='w-[3.5rem] h-[1.8rem] lg:w-[6.6rem] lg:h-[3.4rem]' src={getImagePath("/images/logo.svg")} alt='logo' width={66} height={34} />
          </Link>
        </div>
      </div>
    </header>
  );
}

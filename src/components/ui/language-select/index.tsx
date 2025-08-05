"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useParams, useRouter, usePathname } from "next/navigation";

export default function LanguageSelect() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params.locale as string;

  const handleLanguageChange = (value: string) => {
    const currentPath = pathname.replace(`/${currentLocale}`, '');
    router.push(`/${value}${currentPath}`);
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={currentLocale}>
      <SelectTrigger>
        <SelectValue placeholder='Select Language' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='ko'>한국어</SelectItem>
        <SelectItem value='jp'>日本語</SelectItem>
      </SelectContent>
    </Select>
  );
}

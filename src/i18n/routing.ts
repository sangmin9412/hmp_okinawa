import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { LocaleType } from "@/types";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["jp", "ko"] as LocaleType[],

  // Used when no locale matches
  defaultLocale: "ko" as LocaleType,

  // Always include the locale in the path
  localePrefix: "always",
  localeDetection: false
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

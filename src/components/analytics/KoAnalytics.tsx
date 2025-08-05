"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function KoAnalytics() {
  const pathname = usePathname();
  const isKoPath = pathname === "/ko";

  useEffect(() => {
    let insertGaScript = undefined;
    let insertFbqScript = undefined;

    if (isKoPath && window) {
      const gaTag = document.querySelector("#google-analytics");
      if (gaTag) {
        insertGaScript = document.createElement("script");
        insertGaScript.type = "text/javascript";
        insertGaScript.innerHTML = `
          gtag("config", "G-3T0QQVQ54K");
        `;
        gaTag.insertAdjacentElement("afterend", insertGaScript);
      }

      const fbqTag = document.querySelector("#facebook-pixel");
      if (fbqTag) {
        insertFbqScript = document.createElement("script");
        insertFbqScript.type = "text/javascript";
        insertFbqScript.innerHTML = `
          fbq("init", "593804601143628");
          fbq("track", "PageView");
        `;
        fbqTag.insertAdjacentElement("afterend", insertFbqScript);
      }
    }

    return () => {
      if (insertGaScript) {
        insertGaScript.remove();
        console.log("remove insertGaScript");
      }
      if (insertFbqScript) {
        insertFbqScript.remove();
        console.log("remove insertFbqScript");
      }
    };
  }, [isKoPath, pathname]);

  return <></>;
}

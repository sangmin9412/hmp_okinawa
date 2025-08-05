import { useCallback } from "react";
import { useScrollTo } from "./useScrollTo";

interface ScrollToContentOptions {
  behavior?: ScrollBehavior;
  offset?: number;
}

export const useScrollToContent = () => {
  const scrollTo = useScrollTo();

  const scrollToContent = useCallback(
    (options: ScrollToContentOptions = {}) => {
      const contentElement = document.getElementById("content");
      if (!contentElement) return;

      const elementTop = contentElement.offsetTop;
      scrollTo(elementTop, options);
    },
    [scrollTo]
  );

  return scrollToContent;
};

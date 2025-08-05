import { Button } from "@/components/ui/button";
import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export interface SubmitButtonProps {
  isSubmitting: boolean;
  isValid: boolean;
}

export default function SubmitButton({ isSubmitting, isValid }: SubmitButtonProps) {
  const t = useTranslations("form");
  const { step } = useMultiStepFormContext();

  const buttonVariant = isSubmitting || !isValid ? "disabled" : undefined;

  const buttonStyles = {
    pc: "lg:static lg:bottom-0 lg:mt-[8rem] lg:mx-0 lg:p-0 lg:bg-transparent",
    mo: "mt-[2rem] mx-[-2rem] p-[2rem] bg-white transition-[box-shadow] duration-300",
    sticky: "sticky bottom-0 shadow-[0px_-7px_13.1px_-2px_rgba(0,0,0,0.12)]"
  };

  const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!ref.current) return;

      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const form = ref.current.closest("form");

      if (!form || windowWidth > 1120) {
        setIsSticky(false);
        return;
      }

      const scrollBottom = scrollY + windowHeight;
      const start = form.offsetTop + windowHeight / 2;
      const end = form.offsetTop + form.offsetHeight;

      const shouldBeSticky = scrollBottom >= start && scrollBottom <= end;

      if (shouldBeSticky !== isSticky) {
        // 이전 상태와 비교
        setIsSticky(shouldBeSticky);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div
      ref={ref}
      className={cn("flex justify-center gap-4", buttonStyles.mo, buttonStyles.pc, isSticky && buttonStyles.sticky)}
    >
      <Button type='submit' className={cn("w-full lg:w-[28rem]")} variant={buttonVariant}>
        {isSubmitting ? "Submitting..." : t(`submit.step_${step}`)}
      </Button>
    </div>
  );
}

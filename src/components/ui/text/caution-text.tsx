import { cn } from "@/lib/utils";
import { ComponentBaseProps } from "@/types";

export const CautionText = ({ children, className }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        "relative pl-[1.5rem] text-[1.3rem] lg:text-md leading-[2rem] font-[500] before:content-['※'] before:absolute before:left-0 before:top-0",
        className
      )}
    >
      {children}
    </div>
  );
};

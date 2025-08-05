import { ComponentBaseProps } from "@/types";
import { cn } from "@/lib/utils";

export const FaqItem = ({ children, className }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        `lg:p-[4rem] p-[3.2rem] border border-[#ccc] rounded-[0.8rem]`,
        className
      )}
    >
      {children}
    </div>
  );
};

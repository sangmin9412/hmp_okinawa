import { cn } from "@/lib/utils";
import { ComponentBaseProps } from "@/types";

export default function DotText({ children, className }: ComponentBaseProps) {
  return (
    <div
      className={cn(
        "relative pl-[1.1rem] text-sm leading-[2rem] text-[#666] after:content-[''] after:absolute after:left-0 after:top-[8px] after:w-[3px] after:h-[3px] after:rounded-full after:bg-[#666]",
        className
      )}
    >
      {children}
    </div>
  );
}

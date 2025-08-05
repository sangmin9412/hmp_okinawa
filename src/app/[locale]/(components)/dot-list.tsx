import { ComponentBaseProps } from "@/types";
import { cn } from "@/lib/utils";

interface DotListProps extends ComponentBaseProps {
  items: Array<string | React.ReactNode>;
}

export const DotList = ({ items, className }: DotListProps) => {
  return (
    <ul className={cn(`flex flex-col gap-[8px]`, className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(
            `
          relative pl-[1.1rem] text-[1.2rem] lg:leading-[2rem] leading-[1.6] font-[400] text-[#666] 
          after:content[""] after:absolute after:left-0 after:top-[0.8rem] after:w-[0.3rem] 
          after:h-[0.3rem] after:rounded-full after:bg-[#666]`,
            className
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

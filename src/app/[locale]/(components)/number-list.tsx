import { ComponentBaseProps } from "@/types";
import { cn } from "@/lib/utils";

interface NumberListProps extends ComponentBaseProps {
  items: Array<string | React.ReactNode>;
}

export const NumberList = ({ items, className }: NumberListProps) => {
  return (
    <ol className={cn("[counter-reset:number]", className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(
            `relative pl-[2rem] before:absolute before:left-0 before:top-0 before:[counter-increment:number] before:content-[counter(number)_"._"] before:inline-block before:w-[1.6rem] before:text-right`,
            className
          )}
        >
          {item}
        </li>
      ))}
    </ol>
  );
};

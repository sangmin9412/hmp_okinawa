import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[4rem] w-full border-b border-input rounded-none bg-background py-2 text-[1.3rem] leading-[2rem] lg:text-[1.4rem] lg:leading-[2.2rem] text-black placeholder:text-[#999] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

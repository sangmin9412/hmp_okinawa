import { ComponentBaseProps } from "@/types";
import { cn } from "@/lib/utils";

export const MapPlaceText = ({ children, className }: ComponentBaseProps) => {
  return (
    <div className={cn(`mt-[0.8rem] text-[1.6rem] leading-[1.6] font-[500] text-[#fff]`, className)}>{children}</div>
  );
};

export const MapPinActive = ({ children, className }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        `absolute lg:w-[3.2rem] w-[2.4rem] lg:h-[3.2rem] h-[2.4rem] bg-[url("/okinawa/images/map_pin_on.png")] bg-no-repeat bg-center bg-contain z-10`,
        className
      )}
    >
      {children}
    </div>
  );
};

export const MapPinOff = ({ children, className }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        `absolute lg:w-[3.2rem] w-[2.4rem] lg:h-[3.2rem] h-[2.4rem] bg-[url("/okinawa/images/map_pin_off.png")] bg-no-repeat bg-center bg-contain z-10`,
        className
      )}
    >
      {children}
    </div>
  );
};

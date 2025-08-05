import { ComponentBaseProps } from "@/types";
import { cn } from "@/lib/utils";

const InfoStepTitle = ({ children, className }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        `mb-[1.6rem] lg:ml-[0] ml-[1.6rem] lg:pb-[1.8rem] flex items-center justify-start gap-[0.8rem] max-w-[35.2rem] lg:bg-[url("/okinawa/images/intro_step_line.svg")] lg:bg-no-repeat lg:bg-bottom`,
        className
      )}
    >
      {children}
    </div>
  );
};

const InfoSubTitle = ({ children, className }: ComponentBaseProps) => {
  return (
    <p className={cn(`mb-[0.8rem] lg:text-[1.8rem] text-[1.5rem] font-[400] leading-[1.6]`, className)}>{children}</p>
  );
};

const InfoTitle = ({ children, className }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        `mb-[1.6rem] px-[1.6rem] py-[0.5rem] inline-flex              
      bg-[#002C5F] rounded-[10rem]`,
        className
      )}
    >
      <p className='lg:text-[1.4rem] text-[1.3rem] font-[500] leading-[1.57] text-[#fff]'>{children}</p>
    </div>
  );
};

const InfoInnerText = ({ children, className }: ComponentBaseProps) => {
  return (
    <p className={cn(`lg:text-[1.6rem] text-[1.3rem] text-center lg:leading-[2.6rem] leading-[2rem]`, className)}>
      {children}
    </p>
  );
};

const InfoItem = ({ children, className }: ComponentBaseProps) => {
  return <div className={cn(`mt-[5.6rem]`, className)}>{children}</div>;
};

InfoItem.Title = InfoTitle;
InfoItem.SubTitle = InfoSubTitle;
InfoItem.StepTitle = InfoStepTitle;
InfoItem.InnerText = InfoInnerText;

export { InfoItem };

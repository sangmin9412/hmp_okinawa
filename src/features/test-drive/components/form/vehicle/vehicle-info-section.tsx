import { UseFormReturn } from "react-hook-form";
import { TestDriveFormData, Option } from "@/features/test-drive/types";
import VehicleInfo from "@/features/test-drive/components/form/vehicle/vehicle-info";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { LocaleType } from "@/types";
interface VehicleInfoSectionProps {
  form: UseFormReturn<TestDriveFormData>;
  carMakerOptions: Option[];
  inspectionYearOptions: Option[];
  inspectionMonthOptions1: Option[];
  inspectionMonthOptions2: Option[];
  inspectionMonthOptions3: Option[];
}

export default function VehicleInfoSection({
  form,
  carMakerOptions,
  inspectionYearOptions,
  inspectionMonthOptions1,
  inspectionMonthOptions2,
  inspectionMonthOptions3
}: VehicleInfoSectionProps) {
  const locale = useLocale() as LocaleType;
  const t = useTranslations("form");
  const isUsedCar = form.watch("isUsedCar");

  if (isUsedCar === "No") return null;

  if (isUsedCar === "Yes_Single") {
    return (
      <div className='flex flex-col gap-[.8rem] lg:gap-[1.6rem] mt-[1.6rem] px-[2rem] lg:px-[3.2rem] pt-[2.4rem] pb-[2.4rem] lg:pb-[3.2rem] bg-[#fafafa] border-t border-[#e9e9e9]'>
        {locale === "ko" && (
          <p className='lg:py-[.9rem] text-md leading-[2.2rem] text-[#666]'>{t("vehicle_info.guide")}</p>
        )}
        <VehicleInfo
          form={form}
          index={1}
          carMakerOptions={carMakerOptions}
          inspectionYearOptions={inspectionYearOptions}
          inspectionMonthOptions={inspectionMonthOptions1}
          translations={t}
          locale={locale}
        />
      </div>
    );
  }

  if (isUsedCar === "Yes_Multi") {
    return (
      <>
        <div className='flex flex-col gap-[.8rem] lg:gap-[1.6rem] mt-[1.6rem] px-[2rem] lg:px-[3.2rem] pt-[2.4rem] pb-[2.4rem] lg:pb-[3.2rem] bg-[#fafafa] border-t border-[#e9e9e9]'>
          <p className='lg:py-[.9rem] text-md leading-[2.2rem] text-primary font-[500]'>{t("vehicle_info.car_1")}</p>
          <VehicleInfo
            form={form}
            index={1}
            carMakerOptions={carMakerOptions}
            inspectionYearOptions={inspectionYearOptions}
            inspectionMonthOptions={inspectionMonthOptions1}
            translations={t}
            locale={locale}
          />
        </div>

        <div className='flex flex-col gap-[.8rem] lg:gap-[1.6rem] mt-[.8rem] px-[2rem] lg:px-[3.2rem] pt-[2.4rem] pb-[2.4rem] lg:pb-[3.2rem] bg-[#fafafa]'>
          <p className='lg:py-[.9rem] text-md leading-[2.2rem] text-primary font-[500]'>{t("vehicle_info.car_2")}</p>
          <VehicleInfo
            form={form}
            index={2}
            carMakerOptions={carMakerOptions}
            inspectionYearOptions={inspectionYearOptions}
            inspectionMonthOptions={inspectionMonthOptions2}
            translations={t}
            locale={locale}
          />
        </div>

        <div className='flex flex-col gap-[.8rem] lg:gap-[1.6rem] mt-[.8rem] px-[2rem] lg:px-[3.2rem] pt-[2.4rem] pb-[2.4rem] lg:pb-[3.2rem] bg-[#fafafa]'>
          <p className='lg:py-[.9rem] text-md leading-[2.2rem] text-primary font-[500]'>{t("vehicle_info.car_3")}</p>
          <VehicleInfo
            form={form}
            index={3}
            carMakerOptions={carMakerOptions}
            inspectionYearOptions={inspectionYearOptions}
            inspectionMonthOptions={inspectionMonthOptions3}
            translations={t}
            locale={locale}
          />
        </div>
      </>
    );
  }
}

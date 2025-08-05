import FormFieldRadioGroup from "@/components/ui/form/form-field-radio-group";
import FormRow from "@/components/ui/form/form-row";
import VehicleInfoSection from "@/features/test-drive/components/form/vehicle/vehicle-info-section";
import { CarMakerOption, IsUsedCarOption, Option, TestDriveFormData } from "@/features/test-drive/types";
import { useLocale, useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";

interface IsUsedCarFieldProps {
  form: UseFormReturn<TestDriveFormData>;
  isUsedCarOptions: IsUsedCarOption[];
  carMakerOptions: CarMakerOption[];
  inspectionYearOptions: Option[];
  inspectionMonthOptions1: Option[];
  inspectionMonthOptions2: Option[];
  inspectionMonthOptions3: Option[];
}

export default function IsUsedCarField({
  form,
  isUsedCarOptions,
  carMakerOptions,
  inspectionYearOptions,
  inspectionMonthOptions1,
  inspectionMonthOptions2,
  inspectionMonthOptions3
}: IsUsedCarFieldProps) {
  const locale = useLocale();
  const t = useTranslations("form");

  if (locale === "ko") {
    return (
      <>
        <FormRow label={t("label.used_car")} required names={["isUsedCar"]}>
          <FormFieldRadioGroup
            form={form}
            name='isUsedCar'
            options={isUsedCarOptions}
            className='[&_.radio-group]:lg:gap-[1.8rem_2.8rem] [&_.radio-group]:gap-[1.8rem_0rem] [&_.radio-item]:lg:flex-none [&_.radio-item]:flex-1'
            onChange={value => {
              if (value === "No") {
                form.setValue("currentVehicleBrand1", "");
                form.setValue("currentVehicleModel1", "");
                form.setValue("inspectionExpirationYear1", "");
                form.setValue("inspectionExpirationMonth1", "");
                form.setValue("currentVehicleBrand2", "");
                form.setValue("currentVehicleModel2", "");
                form.setValue("inspectionExpirationYear2", "");
                form.setValue("inspectionExpirationMonth2", "");
                form.setValue("currentVehicleBrand3", "");
                form.setValue("currentVehicleModel3", "");
                form.setValue("inspectionExpirationYear3", "");
                form.setValue("inspectionExpirationMonth3", "");
              }
            }}
          />
          <VehicleInfoSection
            form={form}
            carMakerOptions={carMakerOptions}
            inspectionYearOptions={inspectionYearOptions}
            inspectionMonthOptions1={inspectionMonthOptions1}
            inspectionMonthOptions2={inspectionMonthOptions2}
            inspectionMonthOptions3={inspectionMonthOptions3}
          />
        </FormRow>
      </>
    );
  }

  if (locale === "jp") {
    return (
      <>
        <FormRow label={t("label.used_car")} required names={["isUsedCar"]}>
          <FormFieldRadioGroup 
            form={form} 
            name='isUsedCar' 
            options={isUsedCarOptions} 
            onChange={value => {
              if (value === "No") {
                form.setValue("currentVehicleBrand1", "");
                form.setValue("currentVehicleModel1", "");
                form.setValue("inspectionExpirationYear1", "");
                form.setValue("inspectionExpirationMonth1", "");
                form.setValue("currentVehicleBrand2", "");
                form.setValue("currentVehicleModel2", "");
                form.setValue("inspectionExpirationYear2", "");
                form.setValue("inspectionExpirationMonth2", "");
                form.setValue("currentVehicleBrand3", "");
                form.setValue("currentVehicleModel3", "");
                form.setValue("inspectionExpirationYear3", "");
                form.setValue("inspectionExpirationMonth3", "");
              }
            }}
          />
          <VehicleInfoSection
            form={form}
            carMakerOptions={carMakerOptions}
            inspectionYearOptions={inspectionYearOptions}
            inspectionMonthOptions1={inspectionMonthOptions1}
            inspectionMonthOptions2={inspectionMonthOptions2}
            inspectionMonthOptions3={inspectionMonthOptions3}
          />
        </FormRow>
      </>
    );
  }

  return <></>;
}

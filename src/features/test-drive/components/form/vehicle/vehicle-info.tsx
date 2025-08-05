import { UseFormReturn } from "react-hook-form";
import { TestDriveFormData, Option } from "@/features/test-drive/types";
import FormRow from "@/components/ui/form/form-row";
import FormFieldSelect from "@/components/ui/form/form-field-select";
import FormFieldInput from "@/components/ui/form/form-field-input";
import { useTranslations } from "next-intl";
import { LocaleType } from "@/types";

interface VehicleInfoProps {
  form: UseFormReturn<TestDriveFormData>;
  index: 1 | 2 | 3;
  carMakerOptions: Option[];
  inspectionYearOptions: Option[];
  inspectionMonthOptions: Option[];
  translations: ReturnType<typeof useTranslations>;
  locale: LocaleType;
}

export default function VehicleInfo({
  form,
  index,
  carMakerOptions,
  inspectionYearOptions,
  inspectionMonthOptions,
  translations: t,
  locale
}: VehicleInfoProps) {
  const vehicleBrandName = `currentVehicleBrand${index}` as const;
  const vehicleModelName = `currentVehicleModel${index}` as const;
  const inspectionYearName = `inspectionExpirationYear${index}` as const;
  const inspectionMonthName = `inspectionExpirationMonth${index}` as const;

  return (
    <div className='space-y-[1.2rem]'>
      <FormRow label={t("vehicle_info.maker")} required labelClassName='w-[18.1rem]' names={[vehicleBrandName]}>
        <FormFieldSelect
          className='bg-[#fafafa]'
          form={form}
          name={vehicleBrandName}
          placeholder={t("placeholder.none")}
          options={carMakerOptions}
        />
      </FormRow>
      <FormRow label={t("vehicle_info.model")} required labelClassName='w-[18.1rem]' names={[vehicleModelName]}>
        <FormFieldInput
          className='bg-[#fafafa]'
          form={form}
          name={vehicleModelName}
          placeholder={t("vehicle_info.model_placeholder")}
        />
      </FormRow>
      {locale === "jp" && (
        <FormRow
          label={t("vehicle_info.inspection")}
          required
          labelClassName='w-[18.1rem]'
          names={[inspectionYearName, inspectionMonthName]}
        >
          <div className='grid grid-cols-2 gap-[1.6rem]'>
            <FormFieldSelect
              className='bg-[#fafafa]'
              form={form}
              name={inspectionYearName}
              placeholder={t("placeholder.year")}
              options={inspectionYearOptions}
            />
            <FormFieldSelect
              className='bg-[#fafafa]'
              form={form}
              name={inspectionMonthName}
              placeholder={t("placeholder.month")}
              options={inspectionMonthOptions}
            />
          </div>
        </FormRow>
      )}
    </div>
  );
}

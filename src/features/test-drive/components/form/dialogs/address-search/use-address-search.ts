import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useDebounce } from "@/hooks/useDebounce";
import { PostalCode } from "@/features/test-drive/types/postal-code";
import { searchAddressByPostalCode } from "@/features/test-drive/api/postalCode";
import { UseFormReturn } from "react-hook-form";
import { PrefectureType, TestDriveFormData } from "@/features/test-drive/types";

interface UseAddressSearchProps {
  form: UseFormReturn<TestDriveFormData>;
  onClose: () => void;
}

export function useAddressSearch({ form, onClose }: UseAddressSearchProps) {
  const t = useTranslations("form");
  // const locale = useLocale() as LocaleType;
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [addresses, setAddresses] = useState<PostalCode[]>([]);
  const [error, setError] = useState("");

  const debouncedSearch = useDebounce(async (term: string) => {
    if (term.length < 3) return;

    if (!term) {
      setAddresses([]);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await searchAddressByPostalCode(term);
      setAddresses(result?.data || []);
    } catch (error) {
      setError(error instanceof Error ? error.message : t("error.search_failed"));
      setAddresses([]);
    } finally {
      setIsLoading(false);
    }
  }, 500);

  const handleSearch = useCallback(
    (value: string) => {
      setSearchTerm(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  const handleAddressSelect = (address: PostalCode) => {
    form.setValue("postcode", address.postal_code, { shouldValidate: true });

    form.setValue("address", `${address.prefecture} ${address.city} ${address.town}`, { shouldValidate: true });

    form.setValue("state", address.prefecture as PrefectureType);
    form.setValue("city", address.city);
    form.setValue("street", address.town || "");

    onClose();
  };

  const handleKoreanPostcodeComplete = (data: daum.PostcodeResult) => {
    let addr = "";
    let extraAddr = "";

    if (data.userSelectedType === "R") {
      addr = data.roadAddress;
    } else {
      addr = data.jibunAddress;
    }

    if (data.userSelectedType === "R") {
      if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "" && data.apartment === "Y") {
        extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
      }
      if (extraAddr !== "") {
        extraAddr = " (" + extraAddr + ")";
      }
    }

    form.setValue("postcode", data.zonecode, { shouldValidate: true });
    form.setValue("address", addr + extraAddr, { shouldValidate: true });

    form.setValue("state", data.sido);
    form.setValue("city", data.sigungu || data.roadname);
    form.setValue("street", data.roadAddress);

    console.log("daum data - ", data);

    onClose();
  };

  const initializeKoreanPostcode = (element: HTMLElement) => {
    new daum.Postcode({
      oncomplete: handleKoreanPostcodeComplete,
      onresize: function (size: { height: number }) {
        element.style.height = size.height + "px";
      },
      width: "100%",
      height: "100%"
    }).embed(element);

    element.style.display = "block";
  };

  return {
    searchTerm,
    isLoading,
    error,
    addresses,
    handleSearch,
    handleAddressSelect,
    initializeKoreanPostcode
  };
}

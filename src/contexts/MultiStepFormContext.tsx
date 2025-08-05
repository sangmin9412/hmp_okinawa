"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { TestDriveFormData } from "@/features/test-drive/types";

interface FormContextType {
  step: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  formData: TestDriveFormData;
  updateFormData: (data: Partial<TestDriveFormData>) => void;
}

export const FormContext = createContext<FormContextType | undefined>({
  step: 1,
  setStep: () => {},
  nextStep: () => {},
  prevStep: () => {},
  formData: {} as TestDriveFormData,
  updateFormData: () => {}
});

export function FormProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<TestDriveFormData>({} as TestDriveFormData);

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const updateFormData = (data: Partial<TestDriveFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ step, setStep, nextStep, prevStep, formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useMultiStepFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}

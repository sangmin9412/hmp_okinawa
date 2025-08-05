import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { basePath } from "@/config";

const BUILD_TIME = process.env.NEXT_PUBLIC_BUILD_TIME || "0";
const nowDate = () => BUILD_TIME;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImagePath(path: string, isQueryString: boolean = true) {
  return `${basePath}${path}${isQueryString ? `?v=${nowDate()}` : ""}`;
}

// 숫자만 입력
export const handleNumericInput = (value: string, maxLength: number = 4): string => {
  const numbersOnly = value.replace(/[^0-9]/g, "");
  return numbersOnly.slice(0, maxLength);
};

// 숫자만 붙여넣기
export const handleNumericPaste = (e: React.ClipboardEvent<HTMLInputElement>, maxLength: number = 4): string => {
  e.preventDefault();
  const pastedText = e.clipboardData.getData("text");
  return handleNumericInput(pastedText, maxLength);
};

// 텍스트만 입력
export const handleTextOnlyInput = (value: string, maxLength: number = 50): string => {
  // Remove all numbers, keep only letters, spaces, and special characters
  const textOnly = value.replace(/[0-9]/g, "");
  return textOnly.slice(0, maxLength);
};

// 텍스트만 붙여넣기
export const handleTextOnlyPaste = (e: React.ClipboardEvent<HTMLInputElement>, maxLength: number = 50): string => {
  e.preventDefault();
  const pastedText = e.clipboardData.getData("text");
  return handleTextOnlyInput(pastedText, maxLength);
};

// 영문자, 한글만 입력
export const handleLettersOnlyInput = (value: string, maxLength: number = 50): string => {
  // Remove numbers and special characters, keep only letters and spaces
  const lettersOnly = value.replace(/[^a-zA-Z\s가-힣ㄱ-ㅎㅏ-ㅣ]/g, "");
  return lettersOnly.slice(0, maxLength);
};

// 영문자, 한글만 붙여넣기
export const handleLettersOnlyPaste = (e: React.ClipboardEvent<HTMLInputElement>, maxLength: number = 50): string => {
  e.preventDefault();
  const pastedText = e.clipboardData.getData("text");
  return handleLettersOnlyInput(pastedText, maxLength);
};

// 영문자, 숫자만 입력
export const handleLettersAndNumbersOnlyInput = (value: string, maxLength: number = 50): string => {
  const lettersAndNumbersOnly = value.replace(/[^a-zA-Z0-9\s]/g, "");
  return lettersAndNumbersOnly.slice(0, maxLength);
};

// 영문자, 숫자만 붙여넣기
export const handleLettersAndNumbersOnlyPaste = (e: React.ClipboardEvent<HTMLInputElement>, maxLength: number = 50): string => {
  e.preventDefault();
  const pastedText = e.clipboardData.getData("text");
  return handleLettersAndNumbersOnlyInput(pastedText, maxLength);
};

// 영문자만 입력
export const handleEnglishOnlyInput = (value: string, maxLength: number = 50): string => {
  // Remove all characters except English letters and spaces
  const englishOnly = value.replace(/[^a-zA-Z\s]/g, "");
  return englishOnly.slice(0, maxLength);
};

// 영문자만 붙여넣기
export const handleEnglishOnlyPaste = (e: React.ClipboardEvent<HTMLInputElement>, maxLength: number = 50): string => {
  e.preventDefault();
  const pastedText = e.clipboardData.getData("text");
  return handleEnglishOnlyInput(pastedText, maxLength);
};

// 한글제거 입력
export const handleDeleteKoreanOnlyInput = (value: string, maxLength: number = 50): string => {
  const withoutKorean = value.replace(/[가-힣ㄱ-ㅎㅏ-ㅣ]/g, "");
  return withoutKorean.slice(0, maxLength);
};

// 공백 제거 입력
export const handleSpaceOnlyInput = (value: string, maxLength: number = 50): string => {
  const spaceOnly = value.replace(/\s+/g, "");
  return spaceOnly.slice(0, maxLength);
};

// 히라가나만 입력 (후리가나)
export const handleHiraganaOnlyInput = (value: string, maxLength: number = 50): string => {
  // 히라가나 범위: ぁ-ゖ + 관련 기호들 (゛゜ー)
  const hiraganaOnly = value.replace(/[^ぁ-ゖ゛゜ー]/g, "");
  return hiraganaOnly.slice(0, maxLength);
};

// 히라가나만 붙여넣기
export const handleHiraganaOnlyPaste = (e: React.ClipboardEvent<HTMLInputElement>, maxLength: number = 50): string => {
  e.preventDefault();
  const pastedText = e.clipboardData.getData("text");
  return handleHiraganaOnlyInput(pastedText, maxLength);
};

// 가타카나만 입력
export const handleKatakanaOnlyInput = (value: string, maxLength: number = 50): string => {
  // 가타카나 범위: ァ-ヶ + 관련 기호들 (゛゜ー・)
  const katakanaOnly = value.replace(/[^ァ-ヶ゛゜ー・]/g, "");
  return katakanaOnly.slice(0, maxLength);
};

// 가타카나만 붙여넣기
export const handleKatakanaOnlyPaste = (e: React.ClipboardEvent<HTMLInputElement>, maxLength: number = 50): string => {
  e.preventDefault();
  const pastedText = e.clipboardData.getData("text");
  return handleKatakanaOnlyInput(pastedText, maxLength);
};
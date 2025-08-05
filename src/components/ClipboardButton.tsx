"use client";

import { Button } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { useTranslations } from "next-intl";
import { useToast } from "@/hooks/use-toast";

interface ClipboardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof Button> {
  text: string;
}

export default function ClipboardButton({ text, children, ...props }: ClipboardButtonProps) {
  const t = useTranslations("common");
  const { toast } = useToast();

  const copyToClipboard = async (text: string): Promise<boolean> => {
    // Modern API 방식 시도
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.error("Failed to copy with modern API:", err);
      }
    }

    // Fallback: execCommand 방식
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;

      // iOS에서 복사를 위해 필요한 스타일 설정
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.width = "2em";
      textArea.style.height = "2em";
      textArea.style.padding = "0";
      textArea.style.border = "none";
      textArea.style.outline = "none";
      textArea.style.boxShadow = "none";
      textArea.style.background = "transparent";

      document.body.appendChild(textArea);

      if (navigator.userAgent.match(/ipad|iphone/i)) {
        // iOS 워크어라운드
        const range = document.createRange();
        range.selectNodeContents(textArea);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.select();
      }

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      console.error("Failed to copy with execCommand:", err);
      return false;
    }
  };

  const handleClick = async () => {
    try {
      const success = await copyToClipboard(text);
      if (success) {
        toast({
          description: t("clipboard.success"),
          duration: 3000,
        });
      } else {
        throw new Error("Copy failed");
      }
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        description: t("clipboard.error"),
        duration: 3000,
      });
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}

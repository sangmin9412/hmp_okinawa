interface KoreanAddressSearchProps {
  onInitialize: (element: HTMLElement) => void;
}

export function KoreanAddressSearch({ onInitialize }: KoreanAddressSearchProps) {
  return (
    <div className="w-full h-[444px] max-h-[60dvh] overflow-y-auto custom-scrollbar">
      <div 
        id="postal-code-search-ko-form" 
        className="w-full h-[444px]"
        ref={(element) => {
          if (element) {
            onInitialize(element);
          }
        }}
      ></div>
    </div>
  );
} 
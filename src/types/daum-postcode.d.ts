declare namespace daum {
  interface PostcodeResult {
    userSelectedType: "R" | "J";
    roadAddress: string;
    jibunAddress: string;
    bname: string;
    buildingName: string;
    apartment: "Y" | "N";
    zonecode: string;
    sido: string;
    sigungu: string;
    roadname: string;
    roadnameCode: string;
    dong: string;
    dongCode: string;
  }

  interface PostcodeOptions {
    oncomplete: (data: PostcodeResult) => void;
    onresize?: (size: { width: number; height: number }) => void;
    width?: string | number;
    height?: string | number;
    animation?: boolean;
  }

  class Postcode {
    constructor(options: PostcodeOptions);
    embed(element: HTMLElement): void;
  }
}

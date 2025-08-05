import { basePath } from "@/config";
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from "axios";

interface ErrorResponse {
  message: string;
  status: number;
}

interface RequestParams {
  [key: string]: string | number | boolean | null | undefined;
}

type RequestData = Record<string, unknown> | unknown;

class FrontHttpClient {
  private static instance: FrontHttpClient;
  private axiosInstance: AxiosInstance;

  private getLocale(): string {
    // 클라이언트사이드
    if (typeof window !== "undefined") {
      return document.querySelector('meta[name="x-locale"]')?.getAttribute("content") || "jp";
    }
    
    // 서버사이드에서는 기본값 반환
    return "jp";
  }

  private constructor(baseURL: string = basePath || "") {
    const locale = this.getLocale();
    const localeBaseURL = `${baseURL}/${locale}`;

    this.axiosInstance = axios.create({
      baseURL: localeBaseURL,
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale
      }
    });

    this.initializeInterceptors();
  }

  public static getInstance(): FrontHttpClient {
    if (!FrontHttpClient.instance) {
      FrontHttpClient.instance = new FrontHttpClient();
    }
    return FrontHttpClient.instance;
  }

  private initializeInterceptors() {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const locale = this.getLocale();

        // Update baseURL if locale changes
        const currentBaseURL = config.baseURL || "";
        const currentLocale = currentBaseURL.split("/").pop();
        if (currentLocale !== locale) {
          config.baseURL = `${basePath || ""}/${locale}`;
        }

        if (config.headers) {
          config.headers["Accept-Language"] = locale;
        }

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        const errorResponse: ErrorResponse = {
          message: error.message || "알 수 없는 에러가 발생했습니다.",
          status: error.response?.status || 500
        };
        return Promise.reject(errorResponse);
      }
    );
  }

  async get<T>(url: string, params?: RequestParams): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url, {
        params
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T>(url: string, data?: RequestData): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(
        url,
        data
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put<T>(url: string, data?: RequestData): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(
        url,
        data
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: unknown): ErrorResponse {
    if (error && typeof error === "object" && "status" in error) {
      return error as ErrorResponse;
    }
    const axiosError = error as AxiosError;
    return {
      message: axiosError.message || "알 수 없는 에러가 발생했습니다.",
      status: axiosError.response?.status || 500
    };
  }
}

// 싱글톤 인스턴스 export
export const frontHttp = FrontHttpClient.getInstance();

// 테스트를 위한 클래스 export
export { FrontHttpClient };

import React, { ReactNode } from "react";
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

export const identityClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_IDENTITY_URL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => {
    return [200, 201, 202, 204, 400, 401, 403, 404, 500].includes(status);
  },
});

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[Request Error] :: ${JSON.stringify(error)}`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response) {
    if (error.response.status === 401) {
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    } else {
      console.error(
        `[Response Error] Status: ${error.response.status}`,
        error.response.data
      );
    }
  } else if (error.request) {
    console.error("[Response Error] No response received:", error.request);
  } else {
    console.error("[Response Error] Error Message:", error.message);
  }

  return Promise.reject(error);
};

const setupInterceptors = (client: AxiosInstance) => {
  client.interceptors.request.use(onRequest, onRequestError);
  client.interceptors.response.use(onResponse, onResponseError);
};

setupInterceptors(identityClient);

interface HttpInterceptorProps {
  children: ReactNode;
}

const HttpInterceptor: React.FC<HttpInterceptorProps> = ({ children }) => {
  return <>{children}</>;
};

export default HttpInterceptor;

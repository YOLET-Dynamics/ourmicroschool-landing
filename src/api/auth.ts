import { identityClient } from "@/providers/HttpInterceptor";
import {
  ForgotPasswordSchema,
  LoginSchema,
  RequestOTPSchema,
} from "./schema/auth";
import { HttpResponse } from "./response/response";
import { User } from "@/models/user";
import { pickPrimary, roleDomain } from "@/lib/roles";

export const ROLE_PERMISSION_ERROR =
  "Your account does not have permissions to access the application. Please contact support if you believe this is an error.";

export const authApi = {
  async login(data: LoginSchema) {
    try {
      const result = await identityClient.post<
        HttpResponse<{ user: User; redirectUrl: string }>
      >("/auth/login", data);

      if (!result.data.success) {
        return Promise.reject(result.data.message);
      }

      const user = result.data.data.user;
      const roleCodes = user.roles.map((r) => r.code);

      try {
        const primaryRole = pickPrimary(roleCodes);
        const redirectUrl = roleDomain[primaryRole];

        return {
          userData: result.data.data,
          redirectUrl,
        };
      } catch (error) {
        return Promise.reject(ROLE_PERMISSION_ERROR);
      }
    } catch (error) {
      return Promise.reject("An unexpected error occurred");
    }
  },

  async requestOTP(data: RequestOTPSchema) {
    try {
      const result = await identityClient.post<HttpResponse<string>>(
        "/auth/request-otp",
        data
      );

      if (result.status !== 200 && !result.data.success) {
        return Promise.reject(result.data.message);
      }

      return "OTP sent successfully";
    } catch (error) {
      return Promise.reject("An unexpected error occurred");
    }
  },

  async forgotPassword(data: ForgotPasswordSchema) {
    try {
      const result = await identityClient.post<HttpResponse<string>>(
        "/auth/forgot-password",
        data
      );

      if (result.status !== 200 && !result.data.success) {
        return Promise.reject(result.data.message);
      }

      return "Password reset successfully";
    } catch (error) {
      return Promise.reject("An unexpected error occurred");
    }
  },
};

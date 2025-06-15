import { identityClient } from "@/providers/HttpInterceptor";
import { LoginSchema } from "./schema/auth";
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
      console.error(error);
      return Promise.reject("An unexpected error occurred");
    }
  },
};

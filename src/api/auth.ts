import { identityClient } from "@/providers/HttpInterceptor";
import { LoginSchema } from "./schema/auth";
import { HttpResponse } from "./response/response";
import { User } from "@/models/user";

export const authApi = {
  async login(data: LoginSchema) {
    try {
      const result = await identityClient.post<
        HttpResponse<{ user: User; redirectUrl: string }>
      >("/auth/login", data);

      console.log(result);

      if (!result.data.success) {
        return Promise.reject(result.data.message);
      }

      const redirectUrl = result.headers["x-redirect-url"] || "/";

      return {
        userData: result.data.data,
        redirectUrl,
      };
    } catch (error) {
      console.log(error);

      return Promise.reject("An unexpected error occurred");
    }
  },
};

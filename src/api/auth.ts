import { identityClient } from "@/providers/HttpInterceptor";
import { LoginSchema } from "./schema/auth";
import { HttpResponse } from "./response/response";
import { User } from "@/models/user";

export const authApi = {
  async login(data: LoginSchema) {
    try {
      const result = await identityClient.post<HttpResponse<{ user: User }>>(
        "/auth/login",
        data
      );

      console.log(result);

      if (!result.data.success) {
        return Promise.reject(result.data.message);
      }

      return result.data.data;
    } catch (error) {
      console.log(error);

      return Promise.reject("An unexpected error occurred");
    }
  },
};

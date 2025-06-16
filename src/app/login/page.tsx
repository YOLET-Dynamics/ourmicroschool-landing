"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { authApi, ROLE_PERMISSION_ERROR } from "@/api/auth";
import { toast } from "sonner";
import { loginSchema, LoginSchema as LoginFormValues } from "@/api/schema/auth";
import { formatError } from "@/lib/formatError";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const { mutate: login, isPending } = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      toast.success("Login successful! Redirecting...");
      window.location.replace(data.redirectUrl);
    },
    onError: (error: any) => {
      const errorMessage = formatError(error);
      if (errorMessage === ROLE_PERMISSION_ERROR) {
        router.push(`/login/error?message=${encodeURIComponent(errorMessage)}`);
      } else {
        toast.error(errorMessage);
      }
    },
  });

  const handleComingSoonClick = () => {
    toast.info("Coming soon!", {
      description:
        "This feature is under development and will be available shortly.",
    });
  };

  const onSubmit = (data: LoginFormValues) => {
    login(data);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation Bar */}
      <div className="w-full px-4 py-4 mt-4 sm:mt-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 -ml-3"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              OMS
            </div>
          </Link>
          <div className="w-16 sm:w-20" />
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4 sm:space-y-6">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-3 pb-4 sm:pb-6 px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-center text-gray-600 text-sm sm:text-base">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4 sm:pb-6 px-4 sm:px-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 sm:space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="identifier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 text-sm sm:text-base">
                          Email or Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Email or Phone"
                            type="text"
                            className="border-gray-200 h-10 sm:h-11 bg-white text-sm sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 text-sm sm:text-base">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Enter your password"
                              type={showPassword ? "text" : "password"}
                              className="border-gray-200 h-10 sm:h-11 bg-white text-sm sm:text-base pr-10"
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0 h-10 sm:h-11 w-10 text-gray-500 hover:text-gray-700"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                              <span className="sr-only">
                                {showPassword
                                  ? "Hide password"
                                  : "Show password"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 sm:py-6 text-base sm:text-lg font-medium rounded-xl mt-6 transition-all duration-200 hover:shadow-lg"
                    disabled={isPending}
                  >
                    {isPending ? "Signing In..." : "Sign In"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 sm:space-y-6 pt-2 pb-6 sm:pb-8 px-4 sm:px-6">
              <Button
                variant="link"
                className="text-blue-600 hover:text-blue-800 font-normal h-auto p-0 text-sm sm:text-base transition-colors"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot your password?
              </Button>
              <div className="text-xs sm:text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-800 font-normal h-auto p-0 text-xs sm:text-sm"
                  onClick={() => router.push("/#contact")}
                >
                  Contact us to get started
                </Button>
              </div>
              <div className="text-xs sm:text-sm text-center text-gray-500 pt-2">
                By continuing, you agree to our{" "}
                <Button
                  variant="link"
                  className="text-gray-600 hover:text-gray-800 font-normal h-auto p-0 text-xs sm:text-sm"
                  onClick={handleComingSoonClick}
                >
                  Terms of Service
                </Button>{" "}
                and{" "}
                <Button
                  variant="link"
                  className="text-gray-600 hover:text-gray-800 font-normal h-auto p-0 text-xs sm:text-sm"
                  onClick={handleComingSoonClick}
                >
                  Privacy Policy
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

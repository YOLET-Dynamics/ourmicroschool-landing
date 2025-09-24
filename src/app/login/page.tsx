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
import { ArrowLeft, Eye, EyeOff, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/api/auth";
import { toast } from "sonner";
import { loginSchema, LoginSchema as LoginFormValues } from "@/api/schema/auth";
import { formatError } from "@/lib/formatError";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const hcaptchaRef = useRef<HCaptcha>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
      captcha: "",
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
      toast.error(errorMessage);
    },
  });

  const handleComingSoonClick = () => {
    toast.info("Coming soon!", {
      description:
        "This feature is under development and will be available shortly.",
    });
  };

  const handleCaptchaVerify = (token: string) => {
    form.setValue("captcha", token, { shouldValidate: true });
  };

  const handleCaptchaExpire = () => {
    form.setValue("captcha", "", { shouldValidate: true });
  };

  const onSubmit = (data: LoginFormValues) => {
    login(data);
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <div className="w-full px-4 sm:px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="text-gray-600 hover:text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="w-16 sm:w-20" />
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-start justify-center p-4">
        <div className="w-full max-w-md space-y-4 sm:space-y-6">
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors animate-slide-in-up"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Secure, simple sign in
              <ArrowRight className="w-4 h-4 ml-2" />
            </Badge>
          </div>
          <Card className="border border-primary/10 shadow bg-white/80 backdrop-blur-sm rounded-3xl">
            <CardHeader className="space-y-3 pb-4 sm:pb-6 px-4 sm:px-6">
              <CardTitle className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-center tracking-tight">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-center text-muted-foreground text-sm sm:text-base">
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
                            className="border-gray-200 h-10 sm:h-11 bg-white text-sm sm:text-base focus:border-primary focus:ring-primary/20"
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
                              className="border-gray-200 h-10 sm:h-11 bg-white text-sm sm:text-base pr-10 focus:border-primary focus:ring-primary/20"
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
                  <FormField
                    control={form.control}
                    name="captcha"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center pt-2">
                        <FormControl>
                          <HCaptcha
                            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                            onVerify={handleCaptchaVerify}
                            onExpire={handleCaptchaExpire}
                            onError={(err) => {
                              toast.error("Captcha Error", {
                                description:
                                  "An issue occurred with the captcha service. Please refresh and try again.",
                              });
                            }}
                            ref={hcaptchaRef}
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5 sm:py-6 text-base sm:text-lg font-medium rounded-xl mt-6 transition-all duration-200 hover:shadow"
                    disabled={isPending || !form.formState.isValid}
                  >
                    {isPending ? "Signing In..." : "Sign In"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 sm:space-y-6 pt-2 pb-6 sm:pb-8 px-4 sm:px-6">
            <Button
                variant="link"
              className="text-accent hover:text-accent/80 font-normal h-auto p-0 text-sm sm:text-base transition-colors"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot your password?
              </Button>
              <div className="text-xs sm:text-sm text-center text-gray-500">
                Don't have an account?{" "}
              <Button
                  variant="link"
                className="text-accent hover:text-accent/80 font-normal h-auto p-0 text-xs sm:text-sm"
                  onClick={() => router.push("/contact")}
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

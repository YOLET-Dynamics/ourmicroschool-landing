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
import { ArrowLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/api/auth";
import { toast } from "sonner";
import {
  forgotPasswordSchema,
  requestOTPSchema,
  ForgotPasswordSchema,
  RequestOTPSchema,
} from "@/api/schema/auth";
import { formatError } from "@/lib/formatError";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<"request" | "verify">("request");
  const [identifier, setIdentifier] = useState("");

  // Form for requesting OTP
  const requestForm = useForm<RequestOTPSchema>({
    resolver: zodResolver(requestOTPSchema),
    defaultValues: {
      identifier: "",
    },
  });

  // Form for verifying OTP and resetting password
  const verifyForm = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      identifier: "",
      otp: "",
    },
  });

  const { mutate: requestOTP, isPending: isRequestingOTP } = useMutation({
    mutationFn: authApi.requestOTP,
    onSuccess: () => {
      toast.success("OTP sent successfully!");
      const identifierValue = requestForm.getValues().identifier;
      setIdentifier(identifierValue);
      verifyForm.setValue("identifier", identifierValue);
      setStep("verify");
    },
    onError: (error: any) => {
      toast.error(formatError(error));
    },
  });

  const { mutate: resetPassword, isPending: isResetting } = useMutation({
    mutationFn: authApi.forgotPassword,
    onSuccess: () => {
      toast.success("Password reset successful! Please login with your new password.");
      router.push("/login");
    },
    onError: (error: any) => {
      toast.error(formatError(error));
    },
  });

  const onRequestOTP = (data: RequestOTPSchema) => {
    requestOTP(data);
  };

  const onVerifyOTP = (data: ForgotPasswordSchema) => {
    resetPassword({ ...data, identifier });
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation Bar */}
      <div className="w-full px-4 py-4 mt-4 sm:mt-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push("/login")}
            className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 -ml-3"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Button>
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              OMS
            </div>
          </Link>
          <div className="w-16 sm:w-20" />
        </div>
      </div>

      {/* Forgot Password Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4 sm:space-y-6">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-3 pb-4 sm:pb-6 px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                {step === "request" ? "Forgot Password" : "Verify OTP"}
              </CardTitle>
              <CardDescription className="text-center text-gray-600 text-sm sm:text-base">
                {step === "request"
                  ? "Enter your email or phone to receive a verification code"
                  : "Enter the verification code sent to your email/phone"}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4 sm:pb-6 px-4 sm:px-6">
              {step === "request" ? (
                <Form {...requestForm}>
                  <form
                    onSubmit={requestForm.handleSubmit(onRequestOTP)}
                    className="space-y-4 sm:space-y-5"
                  >
                    <FormField
                      control={requestForm.control}
                      name="identifier"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 text-sm sm:text-base">
                            Email or Phone
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email or phone"
                              type="text"
                              className="border-gray-200 h-10 sm:h-11 bg-white text-sm sm:text-base"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 sm:py-6 text-base sm:text-lg font-medium rounded-xl mt-6 transition-all duration-200 hover:shadow-lg"
                      disabled={isRequestingOTP}
                    >
                      {isRequestingOTP ? "Sending Code..." : "Send Code"}
                    </Button>
                  </form>
                </Form>
              ) : (
                <Form {...verifyForm}>
                  <form
                    onSubmit={verifyForm.handleSubmit(onVerifyOTP)}
                    className="space-y-4 sm:space-y-5"
                  >
                    <FormItem>
                      <FormLabel className="text-gray-700 text-sm sm:text-base">
                        Email or Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          value={identifier}
                          disabled
                          className="border-gray-200 h-10 sm:h-11 bg-gray-50/50 text-sm sm:text-base opacity-70"
                        />
                      </FormControl>
                    </FormItem>
                    <FormField
                      control={verifyForm.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 text-sm sm:text-base">
                            Verification Code
                          </FormLabel>
                          <FormControl>
                            <InputOTP
                              maxLength={6}
                              {...field}
                            >
                              <InputOTPGroup className="gap-2">
                                <InputOTPSlot index={0} className="h-11 w-11 sm:h-14 sm:w-14 text-center text-lg" />
                                <InputOTPSlot index={1} className="h-11 w-11 sm:h-14 sm:w-14 text-center text-lg" />
                                <InputOTPSlot index={2} className="h-11 w-11 sm:h-14 sm:w-14 text-center text-lg" />
                                <InputOTPSlot index={3} className="h-11 w-11 sm:h-14 sm:w-14 text-center text-lg" />
                                <InputOTPSlot index={4} className="h-11 w-11 sm:h-14 sm:w-14 text-center text-lg" />
                                <InputOTPSlot index={5} className="h-11 w-11 sm:h-14 sm:w-14 text-center text-lg" />
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                    <div className="flex flex-col space-y-3">
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 sm:py-6 text-base sm:text-lg font-medium rounded-xl transition-all duration-200 hover:shadow-lg"
                        disabled={isResetting}
                      >
                        {isResetting ? "Verifying..." : "Verify Code"}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => {
                          setStep("request");
                          verifyForm.reset();
                        }}
                      >
                        Try with different email/phone
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 sm:space-y-6 pt-2 pb-6 sm:pb-8 px-4 sm:px-6">
              <div className="text-xs sm:text-sm text-center text-gray-500">
                Remember your password?{" "}
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-800 font-normal h-auto p-0 text-xs sm:text-sm"
                  onClick={() => router.push("/login")}
                >
                  Sign in
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
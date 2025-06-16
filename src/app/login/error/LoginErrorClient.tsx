"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface LoginErrorClientProps {
  errorMessage: string;
}

export default function LoginErrorClient({
  errorMessage,
}: LoginErrorClientProps) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      router.replace("/login");
    }, 8000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 p-4">
      <Card className="w-full max-w-md shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto bg-red-100 rounded-full p-3 w-fit">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-red-800 mt-4">
            Login Error
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-700 mb-6">{errorMessage}</p>
          <Button
            onClick={() => router.replace("/login")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Go back to Login
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            You will be redirected in {countdown} seconds...
          </p>
        </CardContent>
      </Card>
    </main>
  );
} 
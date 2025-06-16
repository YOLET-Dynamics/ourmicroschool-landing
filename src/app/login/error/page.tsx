import LoginErrorClient from "./LoginErrorClient";

export default function LoginErrorPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const errorMessage =
    (searchParams?.message as string) || "An unknown error occurred.";

  return <LoginErrorClient errorMessage={errorMessage} />;
} 
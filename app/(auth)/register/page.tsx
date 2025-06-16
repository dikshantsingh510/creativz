import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Crativez | Register",
  description: "Crativez Dashboard register page",
};
const page = () => {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 magicpattern">
      <Card className="bg-transparent backdrop-blur-lg w-full max-w-sm">
        <div className="flex flex-col items-center ">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border mb-2"
            aria-hidden="true"
          >
            <svg
              className="stroke-zinc-800 dark:stroke-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
            </svg>
          </div>
          <CardHeader className=" w-full text-center font-semibold text-2xl">
            <h1>Welcome to URL Shortner</h1>
          </CardHeader>
          <CardDescription>
            We just need few details to get you varified.
          </CardDescription>
        </div>

        <CardContent>
          {/* Registration form component */}

          <RegisterForm />

          <p className="text-muted-foreground text-center text-sm mt-6">
            Already had an account?{" "}
            <Link
              className="underline hover:no-underline text-primary font-semibold"
              href="/login"
            >
              Login
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;

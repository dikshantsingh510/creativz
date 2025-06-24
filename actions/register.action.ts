"use server";

import { auth, ErrorCode } from "@/lib/auth";
import { APIError } from "better-auth/api";

export async function signUpEmailAction(formData: FormData) {
  const name = String(formData.get("name"));
  if (!name) return { error: "Please enter your name" };

  const email = String(formData.get("email"));
  if (!email) return { error: "Please enter your email" };

  const password = String(formData.get("password"));
  if (!password) return { error: "Please enter your password" };
  const confirmPassword = String(formData.get("confirmPassword"));
  if (!confirmPassword) return { error: "Please enter your confirmPassword" };

  if (password !== confirmPassword) return { error: "Passwords do not match" };
  console.log({ name, email, password, confirmPassword });
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    },);
    console.log("-------------------------------->","Sign up successfully!");
    
    return { error: null };
  } catch (err) {
    //? Handling error using better-auth APIError
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as ErrorCode) : "UNKNOWN";

      switch (errCode) {
        case "USER_ALREADY_EXISTS":
          return {
            error: "User already exist!",
          };
        default:
          return {
            error: err.message,
          };
      }
      return {
        error: "Opps! something went wrong while registering",
      };
    }
    return { error: "Internal Server Error" };
  }
  return { error: null };
}

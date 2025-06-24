"use client";
import { signUpEmailAction } from "@/actions/register.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const RegisterForm = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setIsPending(true);

    const formData = new FormData(evt.currentTarget);

    const result = await signUpEmailAction(formData);
    // console.log(result);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Registration complete. You are all set!");
      router.push("/login");
    }

    setIsPending(false);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="*:not-first:mt-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Matt Welsh"
            type="text"
            required
          />
        </div>
        <div className="*:not-first:mt-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="hi@yourcompany.com"
            type="email"
            required
          />
        </div>
        <div className="*:not-first:mt-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            required
          />
        </div>
        <div className="*:not-first:mt-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            type="password"
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Signing up..." : "Sign up"}
      </Button>
    </form>
  );
};

export default RegisterForm;

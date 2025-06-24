"use client";
import { signInEmailAction } from "@/actions/login.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setIsPending(true);

    const formData = new FormData(evt.currentTarget);

    const result = await signInEmailAction(formData);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Login successfull. Good to have you back.");
      router.push("/dashboard/home");
    }

    setIsPending(false);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-4">
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
      </div>
      <Button
        type="submit"
        className="w-full cursor-pointer"
        disabled={isPending}
      >
        {isPending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;

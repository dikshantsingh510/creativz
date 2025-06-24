"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { IconLogout2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const LogoutButton = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleClick() {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("You've logged out. See you soon!");
          router.push("/");
        },
      },
    });
  }

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className="justify-start text-destructive hover:text-destructive cursor-pointer"
      disabled={isPending}
    >
      <IconLogout2 />
      Logout
    </Button>
  );
};

export default LogoutButton;

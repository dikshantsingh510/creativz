"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import QrCard from "@/components/dashboard/home/qrCard";
import { getBaseUrl } from "@/lib/urlServices";
import { IconCirclesRelation } from "@tabler/icons-react";
import { useActionState, useEffect } from "react";
import { shortenUrlAction } from "@/actions/shorten.action";
import { toast } from "sonner";

const GenerateShortUrl = () => {
  const [state, formAction, isPending] = useActionState(shortenUrlAction, {
    success: "",
    error: "",
    data: "",
  });

  const { data, success, error } = state;

 

  useEffect(()=>{
    if (success) {
      toast.success(success);
    }
    if (error) {
      toast.error(error);
    }
  },[error, state, success])

  const baseUrl = getBaseUrl();
  // const shortCode = "jhJHG";

  return (
    <div className="flex flex-col w-full sm:max-w-md md:w-lg gap-6">
      <form action={formAction}>
        <div className="flex flex-col items-center gap-6 w-full ">
          <div className="relative w-full">
            <Input
              className="peer ps-10 "
              placeholder="You long url"
              type="text"
              name="longUrl"
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
              <IconCirclesRelation size={16} aria-hidden="true" />
            </div>
          </div>

          <div className="flex rounded-md shadow-xs w-full">
            <span className="border-input bg-background text-muted-foreground inline-flex items-center rounded-s-md border px-3 text-sm">
              {`${baseUrl}/`}
            </span>
            <Input
              className="-ms-px rounded-s-none shadow-none"
              placeholder="custom code (optional)"
              type="text"
              name="customCode"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Loading..." : "Shorten URL"}
          </Button>
        </div>
      </form>

      {data && (
        <>
          <Separator /> <QrCard url={`${baseUrl}/r/${data}`} />
        </>
      )}
    </div>
  );
};

export default GenerateShortUrl;

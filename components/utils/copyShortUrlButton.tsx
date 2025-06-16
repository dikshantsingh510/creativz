"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IconCheck, IconCopy } from "@tabler/icons-react";

const CopyShortUrlButton = ({ shortUrl }: { shortUrl: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button size="sm" variant="ghost" onClick={handleClick} className="cursor-pointer">
      {copied ? (
        <IconCheck className="text-green-500" />
      ) : (
        <IconCopy className="text-muted-foreground" />
      )}
    </Button>
  );
};

export default CopyShortUrlButton;

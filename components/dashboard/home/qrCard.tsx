"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QRCodeCanvas } from "qrcode.react";
import { useTheme } from "next-themes";
import { useRef } from "react";
import { IconLink } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import CopyShortUrlButton from "@/components/utils/copyShortUrlButton";

const QrCard = ({ url }: { url: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const urlData = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement("a");
    link.href = urlData;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <Card className="bg-background">
      <CardHeader className=" flex justify-between items-center">
        <CardTitle className=" font-bold text-lg">Your Short Url</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
        <CardAction>
          <Button onClick={handleDownload}>Get QR</Button>
        </CardAction>
      </CardHeader>
      <CardContent className=" flex items-center justify-start flex-col gap-4">
        <div className="relative w-full">
          <Input className="peer ps-9 pe-9" type="text" value={url} disabled />
          <div className="text-primary pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-100">
            <IconLink size={16} />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <CopyShortUrlButton shortUrl={url} />
          </div>
        </div>
        <QRCodeCanvas
          value={url}
          size={256}
          bgColor={isDark ? "#09090b" : "#ffffff"}
          fgColor={isDark ? "#fafafa" : "#09090b"}
          level="H"
          marginSize={4}
          ref={canvasRef}
          className="border rounded-xl my-2"
        />
      </CardContent>
    </Card>
  );
};

export default QrCard;

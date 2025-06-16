"use client";

import { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IconDownload, IconQrcode } from "@tabler/icons-react";
import { QRCodeCanvas } from "qrcode.react";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";

const QrModel = ({ url }: { url: string }) => {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <IconQrcode className="" />
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center gap-4">
        <DialogHeader className="">
          <DialogTitle className="text-3xl text-center">
            QR Code Preview
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm">
            Scan the QR code below to open the link
          </p>
        </DialogHeader>

        <QRCodeCanvas
          value={url}
          size={224}
          bgColor={isDark ? "#09090b" : "#ffffff"}
          fgColor={isDark ? "#fafafa" : "#09090b"}
          level="H"
          marginSize={4}
          ref={canvasRef}
          className="border rounded-xl my-2"
        />
        <Input type="text" disabled value={url} className="w-56" />

        <DialogFooter>
          <Button onClick={handleDownload} className="w-56 cursor-pointer">
            Get QR <IconDownload />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QrModel;

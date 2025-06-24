import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/utils/theme-provider";
import { Toaster } from "sonner";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crativez | Landing page",
  description:
    "You all in one tools case. Helps in increasing your business leads with tools like urls shortener.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          {children}
          
          <Toaster richColors position="top-center"/>
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ButtonColorfulProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export function ButtonColorful({
  className,
  label = "Early Access",
  ...props
}: ButtonColorfulProps) {
  return (
    <Link href="/register">
      <Button
        className={cn(
          "relative h-10 px-4 overflow-hidden rounded-4xl cursor-pointer",
          "bg-zinc-100 dark:bg-zinc-100",
          "transition-all duration-200",
          "group",
          className
        )}
        {...props}
      >
        {/* Gradient background effect */}
        <div
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
            "opacity-40 group-hover:opacity-70",
            "blur transition-opacity duration-500"
          )}
        />

        {/* Content */}
        <div className="relative flex items-center justify-center gap-2">
          <span className="text-zinc-900">{label}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-900/90" />
        </div>
      </Button>
    </Link>
  );
}

// export { ButtonColorful };

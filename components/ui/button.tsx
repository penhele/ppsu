"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Variants & sizes yang kita pakai di seluruh app
const buttonVariants = cva(
  // base style semua button
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // tombol utama brand PPSU (oranye)
        primary:
          "bg-ppsu text-white hover:bg-ppsu-dark focus-visible:ring-ppsu ring-offset-white",

        // tombol tanpa background (buat close drawer dsb, di atas bg oranye)
        ghost:
          "bg-transparent text-current hover:bg-black/10 focus-visible:ring-current focus-visible:ring-offset-transparent focus-visible:ring-2",

        // tombol putih border abu
        outline:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-400 ring-offset-white",
      },
      size: {
        // tombol kecil biasa
        sm: "h-8 px-3 text-xs",

        // tombol normal
        md: "h-9 px-4 text-sm",

        // tombol besar tinggi 40
        lg: "h-10 px-4 text-sm",

        // tombol full width (misal login submit)
        full: "w-full h-10 px-4 text-sm",

        // tombol icon bulat/kotak kecil (hamburger, X, dll)
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };

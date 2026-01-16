"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary:
                "bg-white text-black hover:bg-gray-200 border border-transparent shadow-lg",
            secondary:
                "bg-gray-800 text-white hover:bg-gray-700 border border-transparent shadow-lg",
            outline:
                "bg-transparent text-white border border-white hover:bg-white/10",
            ghost: "bg-transparent text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg font-semibold",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary/50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };

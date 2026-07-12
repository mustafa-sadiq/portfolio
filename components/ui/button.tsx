import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("usa-button ui-button", {
  variants: {
    variant: {
      default: "",
      secondary: "usa-button--secondary",
      outline: "usa-button--outline",
      inverse: "usa-button--outline usa-button--inverse",
      ghost: "usa-button--unstyled",
    },
    size: {
      default: "",
      sm: "ui-button--small",
      lg: "usa-button--big",
      icon: "ui-button--icon",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };

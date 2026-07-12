import * as React from "react";
import { cn } from "@/lib/utils";

function Separator({ className, ...props }: React.ComponentProps<"hr">) {
  return (
    <hr role="separator" className={cn("ui-separator", className)} {...props} />
  );
}

export { Separator };

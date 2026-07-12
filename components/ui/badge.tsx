import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("usa-tag ui-tag", className)} {...props} />;
}

export { Badge };

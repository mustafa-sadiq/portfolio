import * as React from "react";
import { cn } from "@/lib/utils";

function Card({
  className,
  children,
  ...props
}: React.ComponentProps<"article">) {
  return (
    <article className={cn("usa-card ui-card", className)} {...props}>
      <div className="usa-card__container">{children}</div>
    </article>
  );
}
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("usa-card__header", className)} {...props} />;
}
function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("usa-card__heading", className)} {...props} />;
}
function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("ui-card__description", className)} {...props} />;
}
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("usa-card__body", className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent };

import type { VariantProps } from "class-variance-authority";
import { Link, type LinkProps } from "react-router";
import { buttonVariants } from "./button";
import { cn } from "~/lib/utils";

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: LinkProps & VariantProps<typeof buttonVariants>) {
  return (
    <Link
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    />
  );
}

import { CheckCircle2, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export function Toast() {
  return (
    <div className="w-96 relative bg-white rounded-md shadow-sm">
      <button className="rounded-full size-7 absolute focus:outline -left-2 -top-2 bg-white p-1 border-2 border-background flex items-center justify-between cursor-pointer">
        <XIcon />
      </button>
      <div className="p-4 flex gap-3">
        <div className="">
          <CheckCircle2 className="size-6" />
        </div>
        <div className="">
          <h1 className="font-bold text-sm">Toast title</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            eius!
          </p>
        </div>
      </div>
    </div>
  );
}

export { Toaster };

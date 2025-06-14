import { type PropsWithChildren } from "react";
import Navbar from "~/components/navbar";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="py-5 max-w-6xl mx-auto px-3 md:px-0">{children}</main>
    </div>
  );
}

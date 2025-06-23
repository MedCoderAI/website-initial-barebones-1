import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import type { ReactNode } from "react";
import {
  MobileSidebarTrigger,
  RegistrySidebar,
} from "@/components/design/registry-sidebar.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
export default function RegistryLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <MobileSidebarTrigger />
      <RegistrySidebar />
      <main className="flex w-full justify-center">{children}</main>
      <Toaster />
    </SidebarProvider>
  );
}

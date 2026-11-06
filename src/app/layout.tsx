import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "DM Finance | Financial Solutions That Move You Forward", template: "%s | DM Finance" },
  description: "Explore financing, deposits, investments, and insurance solutions from DM Finance. Connect with our team to discuss your requirements.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "DM Finance", description: "Financial solutions for individuals and businesses.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}

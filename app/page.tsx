import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "5bus" };

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title: "5bus"};
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
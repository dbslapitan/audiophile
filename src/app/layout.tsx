import type { Metadata } from "next";
import "./globals.scss";
import { manrope } from "@/libs/fonts";

export const metadata: Metadata = {
  title: "Audiophile | Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}

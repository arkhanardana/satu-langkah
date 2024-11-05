import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

const font = GeistSans;

export const metadata: Metadata = {
  title: "Satu Langkah",
  description: "Satu Langkah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}

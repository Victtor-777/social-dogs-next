import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Projeto do curso Origamid, de uma rede social para cachorros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>{children}</body>
    </html>
  );
}
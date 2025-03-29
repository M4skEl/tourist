import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import MontserratFont from '@/utils/Font/fonts'

export const metadata: Metadata = {
  title: "Ретроспектива",
  description: "Фотоэкскурсии по городу на ретроавтомобиле",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={MontserratFont.variable}
      >
        {children}
      </body>
    </html>
  );
}

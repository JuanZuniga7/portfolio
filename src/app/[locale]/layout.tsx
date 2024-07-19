import type { Metadata } from "next";
import "@/app/globals.css";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Card from "@/common/sections/Card";
import Background from "@/common/components/Background";
import Menu from "@/common/sections/Menu";

export const metadata: Metadata = {
  title: "Juan Z Portfolio",
  description: "A portfolio of Juan Zuniga",
  robots: "index, follow",
  creator: "Juan Camilo Zuniga",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary p-5 font-serif
      gap-5 flex items-center justify-center text-white"
      >
        <Background />
        <Menu />
        <NextIntlClientProvider messages={messages}>
          <div className="w-[25%] h-full flex items-center">
            <Card />
          </div>
          <main className="w-full h-screen py-5">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

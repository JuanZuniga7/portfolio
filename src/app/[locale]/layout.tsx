import type { Metadata } from "next";
import "@/app/globals.css";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Card from "@/common/sections/Card";
import Menu from "@/common/sections/Menu";
import MobileMenu from "@/common/sections/MobileMenu";

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
        className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary font-serif flex flex-row xl:px-5 items-center justify-center text-white">
        <Menu />
        <MobileMenu />
        <NextIntlClientProvider messages={messages}>
          <div className="hidden xl:w-[30%] 2xl:w-[25%] h-full xl:flex items-center">
            <Card />
          </div>
          <main className="w-full h-screen overflow-x-hidden lg:py-5">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl lg:text-9xl font-bold font-mono">404</h1>
      <p className="text-base lg:text-2xl font-semibold font-serif">
        Page Not Found <span className="blink w-4">_</span>
      </p>
      <div className="mt-5">
        <Link href={`/${t("lang")}`} className="button text-lg lg:text-xl">
          Come Back
        </Link>
      </div>
    </div>
  );
}

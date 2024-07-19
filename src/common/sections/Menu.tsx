"use server";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/shadcn/ui/menubar";
import { en } from "@/common/data/header";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Menu() {
  const t = await getTranslations("Index");

  return (
    <header className="fixed top-2 right-2 w-fit h-14">
      <Menubar className="bg-transparent backdrop-blur-2xl py-2 px-5 flex items-center gap-2 border-0">
        {en.map((element, index) => (
          <MenubarMenu key={index}>
            <MenubarTrigger
              className="text-white data-[state=open]:bg-indigo-500 focus:bg-indigo-500
                          data-[state=open]:text-white rounded-lg cursor-pointer focus:text-white"
            >
              {element.subElements !== undefined ? (
                <div className="flex items-center gap-2">
                  {element.icon} {element.name}
                </div>
              ) : (
                <Link
                  href={`/${t("lang")}/${element.link}`}
                  className="flex items-center gap-2"
                >
                  {element.icon} {element.name}
                </Link>
              )}
            </MenubarTrigger>
            {element.subElements !== undefined && (
              <MenubarContent
                className="bg-transparent border-0 text-white backdrop-blur-2xl
                              shadow-xl shadow-indigo-800 py-2 px-4"
              >
                {element.subElements.map((subElement, index) => (
                  <>
                    <MenubarItem
                      key={index}
                      className="rounded-lg focus:bg-indigo-500 focus:text-white
                                                   cursor-pointer w-full text-left"
                    >
                      <Link
                        href={`/${t("lang")}/${element.link}#${
                          subElement.link
                        }`}
                        className="flex items-center gap-2"
                      >
                        {subElement.icon} {subElement.name}
                      </Link>
                    </MenubarItem>
                    {index < element.subElements!.length - 1 && (
                      <MenubarSeparator
                        className="bg-indigo-600 w-full"
                        key={index * 100}
                      />
                    )}
                  </>
                ))}
              </MenubarContent>
            )}
          </MenubarMenu>
        ))}
      </Menubar>
    </header>
  );
}

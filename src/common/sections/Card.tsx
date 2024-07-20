'use server';
import Image from "next/image";
import profile from "@/common/assets/images/profile.jpg"
import Link from "next/link";
import {socialMedia} from "../data/socialMedia";
import {IoLanguage} from "react-icons/io5"
import {FaBirthdayCake, FaPhoneAlt} from "react-icons/fa";
import {Separator} from "@/shadcn/ui/separator";
import {MdOutlineMail} from "react-icons/md";
import {FaLocationCrosshairs} from "react-icons/fa6";
import DownloadCV from "@/common/components/client/DownloadCV";
import {getTranslations} from "next-intl/server";
import { cn } from "../lib/utils";

interface IContactData{
    icon: JSX.Element,
    name: string,
    content: string
}

const contactData: IContactData[] = [
    {name: "Phone", icon: <FaPhoneAlt className="w-5 h-5"/>, content: "+57 3054725724"},
    {name: "Email", icon: <MdOutlineMail className="w-5 h-5"/>, content: "jw_juanzuniga@hotmail.com"},
    {name: "Location", icon: <FaLocationCrosshairs className="w-5 h-5"/>, content: "Santa Marta, Colombia"},
    {name: "Birthday", icon: <FaBirthdayCake className="w-5 h-5"/>, content: "April 2, 2001"}
];

export default async function Card({className}: {className?: string}){

    const t = await getTranslations("Index");

    return(
        <aside className={cn("xl:w-[21%] 2xl:w-[18%] gap-4 py-4 px-5 bg-slate-900 h-fit rounded-2xl flex flex-col items-center fixed overflow-hidden text-white", className)}>
            <div className="flex items-center justify-center py-1 w-full">
                <Link href={t('lang') === "en" ? "/es":"/en"} className="py-1 px-3 rounded-lg hover:text-white
                hover:bg-indigo-400 cursor-pointer">
                    <IoLanguage className="w-5 h-5"/>
                </Link>
            </div>
            <Image src={profile} alt="Juan Zuniga" width={200} height={200} className="rounded-full w-32 h-32 2xl:w-48 2xl:h-48"/>
            <div className="flex flex-col gap-5 w-full h-full items-center">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-3xl font-semibold">{t('name')}</h1>
                    <h2 className="text-xl font-medium">{t('profession')}</h2>
                </div>
                <ul className="w-full h-fit p-2 bg-primary rounded-2xl border-2 border-tertiary text-sm">
                    {contactData.map((data, index) => (
                        <li key={index}>
                            <div className="flex items-center gap-2 cursor-pointer rounded-xl px-2">
                                <div className="p-2 bg-indigo-600 text-white rounded-xl">
                                    {data.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-indigo-400 font-semibold italic">{data.name}</span>
                                    <span className="text-xs">{data.content}</span>
                                </div>
                            </div>
                            {!(index === contactData.length - 1) && (<Separator className="my-1 bg-slate-300"/>)}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2">
                    {socialMedia.map((link, index) => (
                        <Link href={link.link} key={index} className="py-1.5 px-2 rounded-lg bg-indigo-700 text-white hover:bg-indigo-500">
                            {link.icon}
                        </Link>
                    ))}
                </div>
                <DownloadCV text={t('download')}/>
            </div>
        </aside>
    )
}
'use server';

import SpecialText from "@/common/components/SpecialText";
import { getTranslations } from "next-intl/server";

interface Props{
    id: string;
    name: string;
    children: React.ReactNode;
}

export default async function Section({id, name, children}: Props){

    const t = await getTranslations(name);

    return(
        <section id={id} className="py-10 flex flex-col gap-5 w-full h-fit">
            <SpecialText text={t("title")} className="text-4xl md:text-5xl px-5 xl:text-6xl font-mono font-bold uppercase" />
            {children}
        </section>
    )
}
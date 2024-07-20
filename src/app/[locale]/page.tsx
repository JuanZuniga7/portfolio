'use server'

import IDE from "@/home/components/IDE";
import {getTranslations} from "next-intl/server";
import SpecialText from "@/common/components/SpecialText";
export default async function Home() {

    const t = await getTranslations('Index');
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10 overflow-hidden">
        <div className="text-white text-center w-full xl:max-w-[70%] text-3xl 2xl:text-6xl font-bold font-mono text-wrap
        capitalize">
            <span>{t('part1')} </span>
            <SpecialText text={t('fullName')}/>
            <span> {t('part2')} </span>
            <SpecialText text={t('profession')}/>
        </div>
        <IDE/>
    </div>
  );
}

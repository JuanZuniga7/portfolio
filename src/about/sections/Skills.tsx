'use server';
import { getTranslations } from "next-intl/server";
import Section from "../components/Section";
import getSkills from "../data/skills";

export default async function Skills(){

    const l = await getTranslations('Index');
    const t = await getTranslations('skills');
    const data = await getSkills(l('lang'))

    return(
        <Section id="skills" name="skills">
            <ul className="flex flex-col gap-5">
                {data.map((category, index) => (
                    <li key={index} className="p-8 flex flex-col gap-5">
                        <h3 className="text-3xl italic">{category.categoryName}</h3>
                        <ul className="grid grid-cols-4 gap-5">
                            {category.skills.map((skill, index) => (
                                <li key={index} className="border-2 from-[#0d1224] border-[#1b2c68a0] 
                                        w-full h-full p-4 rounded-2xl flex flex-col gap-y-5 
                                        bg-gradient-to-r to-[#0a0d37] hover:from-[#0d1224] hover:to-[#1b2c68a0] 
                                        hover:border-[#1b2c68a0] cursor-default">
                                    <div className="flex items-center justify-between">
                                        {skill.icon}
                                        <span>{skill.name}</span>
                                    </div>
                                    <div>
                                        <p>
                                            <span className="text-indigo-300 capitalize">{t('level')}</span>
                                            : {skill.level}
                                        </p>
                                        {skill.start && (
                                            <p>
                                                <span className="text-indigo-300 capitalize">{t('start')}</span>
                                                : {skill.start}
                                            </p>
                                        )}
                                        {skill.description && (
                                            <p>
                                                <span className="text-indigo-300 capitalize">{t('description')}</span>
                                                : {skill.description}
                                            </p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
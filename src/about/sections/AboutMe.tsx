'use server';
import {getTranslations} from "next-intl/server";
import getAboutMe from "@/about/data/aboutMe";
import Section from "../components/Section";

interface Props{
    name: string;
    id: string;
}

export default async function AboutMe(){

    const l = await getTranslations("Index");
    const data = await getAboutMe(l('lang'));

    return(
        <Section name="whoAmI" id="about-me">
            <article className="ml-6 font-serif flex flex-col gap-2 text-sm md:text-base lg:text-xl">
                {data.lines.map((line, j) => (
                    <div key={j}>
                        {line.words.map((word, k) => (
                            <span key={k} className={word.special ? "text-green-400" : ""}>
                                {word.text}
                            </span>
                        ))}
                    </div>
                ))}
            </article>
        </Section>
    )
}
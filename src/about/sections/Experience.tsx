'use server';
import { getTranslations } from "next-intl/server";
import getExperienceData from "../data/experience";
import Section from "../components/Section";
import TimeLine from "../components/TimeLine";

export default async function Experience(){

    const l = await getTranslations("Index");
    const experience = await getExperienceData(l("lang"));

    return(
        <Section id="experience" name="experience">
            <TimeLine data={experience} />
        </Section>
    )
}

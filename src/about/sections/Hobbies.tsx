'use server';
import Section from "../components/Section";
import { getTranslations } from "next-intl/server";
import getHobbies from "../data/hobbies";
import Card from "../components/Card";

export default async function Hobbies() {
    
    const l = await getTranslations("Index");
    const data = await getHobbies(l('lang'));

    return (
        <Section id="hobbies" name="hobbies">
            <Card data={data} className="grid-cols-2" />
        </Section>
    );
}  
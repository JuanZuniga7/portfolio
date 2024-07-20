'use server';
import Card from "../components/Card";
import Section from "../components/Section";
import { getTranslations } from "next-intl/server";
import getServices from "../data/services";

export default async function Services(){

    const l = await getTranslations("Index");
    const data = await getServices(l('lang'));

    return(
        <Section id="services" name="services">
            <Card data={data} className="xl:grid-cols-4 md:grid-cols-2 py-5" />
        </Section>
    )
}
"use server";

import Section from "../components/Section";
import TimeLine from "../components/TimeLine";
import getEducation from "../data/education";
import { getTranslations } from "next-intl/server";

export default async function Education() {
  const l = await getTranslations("Index");
  const education = await getEducation(l("lang"));

  return (
    <Section id="education" name="education">
      <TimeLine data={education} />
    </Section>
  );
}

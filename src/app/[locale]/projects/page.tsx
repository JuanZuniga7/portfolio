"use server";

import Section from "@/about/components/Section";
import getProjects from "@/projects/data/projects";
import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {

    const t = await getTranslations('projects');
    const l = await getTranslations('Index');
    const data = await getProjects(l('lang'));

  return (
    <Section id="projects" name="projects">
      <ul className="grid grid-cols-4 h-fit gap-5">
            {data.map((project, index) => (
                <li key={index} className="border-2 border-indigo-900 rounded-xl flex flex-col items-center 
                overflow-hidden text-lg p-4 h-full gap-2 bg-secondary pb-4">
                    <Image src={project.cover} alt={project.name} width={500} height={500} className="w-full rounded-xl" />
                    <h4 className="text-xl italic">{project.name}</h4>
                    <div className="flex gap-2 capitalize">
                        <span className="text-violet-400">{t('status')}</span> :
                        <span className={project.status === "completed" ? "text-green-400" : "text-red-400"}>
                            {t(project.status)}
                        </span>
                    </div>
                    <div className="flex gap-2 capitalize">
                        <span className="text-violet-400">{t('privacity')}</span> :
                        <span className={project.private ? "text-red-400" : "text-green-400"}>
                            {t(project.private ? "private" : "public")}
                        </span>
                    </div>
                    <div className="flex gap-1 flex-wrap w-[80%] items-center justify-center">
                        {project.technologies.map((tech, index) => (
                            <div key={index} className="flex items-center gap-1">
                                {tech}
                            </div>
                        ))}
                    </div>
                    {project.link && (
                        <Link href={project.link} target="_blank" 
                        className="py-1 px-5 bg-primary hover:bg-blue-800 rounded-full italic">
                            <span>{t('repo')}</span>
                        </Link>
                    )}
                </li>
            ))}
      </ul>
    </Section>
  );
}

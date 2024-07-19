import ITimeline from "./ITimeline";
import {MdMoreTime, MdOutlineDoneAll} from "react-icons/md";

export default async function getExperienceData(lang: string): Promise<ITimeline[]> {
    return lang === "es" ? es : en;
}

const es: ITimeline[] = [
    {title: "Aprendiz de desarrollador Frontend", circle: <MdOutlineDoneAll className="w-8 h-8"/>, description: [
        "Ingenieria Gestion y Desarrollo S.A.S",
        "React, Angular",
        "Enero 2021 - Junio 2021",
        "Remoto - Remunerado",
    ]},
    {title: "Desarrollador FullStack", circle: <MdOutlineDoneAll className="w-8 h-8"/>, description: [
        "Ingenieria Gestion y Desarrollo S.A.S",
        "React, Angular, FastAPI, ASP.NET Core, NestJS",
        "Julio 2021 - Presente",
        "Remoto - Remunerado",
    ]},
]  


const en: ITimeline[] = [
    {title: "Frontend developer trainee", circle: <MdOutlineDoneAll className="w-8 h-8"/>, description: [
        "Ingenieria Gestion y Desarrollo S.A.S",
        "React, Angular",
        "January 2021 - June 2021",
        "Remote - Paid",
    ]},
    {title: "FullStack developer", circle: <MdOutlineDoneAll className="w-8 h-8"/>, description: [
        "Ingenieria Gestion y Desarrollo S.A.S",
        "React, Angular, FastAPI, ASP.NET Core, NestJS",
        "July 2021 - Present",
        "Remote - Paid",
    ]},
]  
import ITimeline from "./ITimeline";
import {MdMoreTime, MdOutlineDoneAll} from "react-icons/md";

export default async function getEducation(lang: string) {
    return lang === "es" ? es : en;
}

const es: ITimeline[] = [
    {title: "Tecnico en instalaciones electricas residenciales", circle: <MdOutlineDoneAll className="w-8 h-8"/>, description: [
        "SENA",
        "Febrero 2018 - Diciembre 2018",
        "Carrera Tecnica",
        "Santa Marta, Colombia",
    ]},
    {title:"Bootcamp de desarrollo Backend", circle: <MdOutlineDoneAll className="w-8 h-8"/>, description: [
        "Oracle Next Education - Alura",
        "Abril 2023 - Octubre 2023",
        "Bootcamp",
        "Online",
    ]},
    {title: "pregrado en Ingenieria de Sistemas", circle: <MdMoreTime className="w-8 h-8"/>, description: [
        "Universidad del Magdalena",
        "Agosto 2019 - Presente",
        "Carrera Universitaria",
        "Santa Marta, Colombia",
    ]},
];

const en: ITimeline[] = [
    {title: "Residential electrical installations technician", circle: <MdOutlineDoneAll className="w-8 h-8"/>, description: [
        "SENA",
        "February 2018 - December 2018",
        "Technical career",
        "Santa Marta, Colombia",
    ]},
    {title:"Backend development Bootcamp", circle: <MdOutlineDoneAll className="w-8 h-8"/>, description: [
        "Oracle Next Education - Alura",
        "April 2023 - October 2023",
        "Bootcamp",
        "Online",
    ]},
    {title: "Undergraduate in systems engineering", circle: <MdMoreTime className="w-8 h-8"/>, description: [
        "University of Magdalena",
        "August 2019 - Present",
        "University career",
        "Santa Marta, Colombia",
    ]},
];
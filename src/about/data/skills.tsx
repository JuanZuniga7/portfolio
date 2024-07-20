import { ISkills } from "./ISkills";
import Image from "next/image";
import brain from "@/about/assets/svg/soft/brain.svg";
import comunication from "@/about/assets/svg/soft/comunication.svg";
import team from "@/about/assets/svg/soft/team.svg";
import leader from "@/about/assets/svg/soft/leader.svg";
import problem from "@/about/assets/svg/soft/problem.svg";
import work from "@/about/assets/svg/soft/work.svg";
//languages
import spanish from "@/about/assets/svg/language/spanish.svg";
import english from "@/about/assets/svg/language/usa.svg";
//technical
import architecture from "@/common/assets/svg/technical/architecture.svg";
import docker from "@/common/assets/svg/technical/docker.svg";
import linux from "@/common/assets/svg/technical/linux.svg";
import test from "@/common/assets/svg/technical/test.svg";
import nginx from "@/common/assets/svg/technical/nginx.svg";
import kubernetes from "@/common/assets/svg/technical/kubernetes.svg";
import git from "@/common/assets/svg/technical/git.svg";
import azure from "@/common/assets/svg/technical/azure.svg";
import aws from "@/common/assets/svg/technical/aws.svg";
import uml from "@/common/assets/svg/technical/uml.svg";
import dbdesign from "@/common/assets/svg/technical/dbdesign.svg";
import grandle from "@/common/assets/svg/technical/grandle.svg";
//programming languages
import js from "@/common/assets/svg/languages/js.svg";
import cs from "@/common/assets/svg/languages/cs.svg";
import typescript from "@/common/assets/svg/languages/typescript.svg";
import java from "@/common/assets/svg/languages/java.svg";
//frameworks
import asp from "@/common/assets/svg/frameworks/asp.svg"; //advanced
import nest from "@/common/assets/svg/frameworks/nest.svg"; //intermediate
import astro from "@/common/assets/svg/frameworks/astro.svg"; //intermediate
import next from "@/common/assets/svg/frameworks/next.svg"; //advanced
import react from "@/common/assets/svg/frameworks/react.svg"; //advanced
import spring from "@/common/assets/svg/frameworks/spring.svg"; //intermediate
//databases
import mongodb from "@/common/assets/svg/databases/mongodb.svg";
import postgres from "@/common/assets/svg/databases/postgres.svg";
import sqlserver from "@/common/assets/svg/databases/sqlserver.svg";
import redis from "@/common/assets/svg/databases/redis.svg";

export default async function getSkills(lang: string): Promise<ISkills[]>{
    return lang === "en" ? en : es;
}

const en: ISkills[] = [
    {categoryName: "Soft Skills", 
        skills: [
            {name: "Teamwork", level: "Advanced", icon: <Image src={team} alt="team" width={48} height={48}/>,
                description: "I am an excellent team player, always willing to collaborate and contribute to the achievement of common goals."},
            {name: "Leadership", level: "Advanced", icon: <Image src={leader} alt="leader" width={48} height={48}/>, 
                description: "I am a natural leader, capable of motivating and guiding others towards the achievement of common goals."},
            {name: "Critical Thinking", level: "Advanced", icon: <Image src={brain} alt="brain" width={48} height={48}/>,
                description: "I am a critical thinker, capable of analyzing and evaluating complex situations to make informed decisions."},
            {name: "Communication", level: "Advanced", icon: <Image src={comunication} alt="comunication" width={48} height={48}/>,
                description: "I am an excellent communicator, capable of conveying information clearly and effectively."},
            {name: "Problem Solving", level: "Advanced", icon: <Image src={problem} alt="problem solving svg" width={48} height={48}/>,
                description: "I am a problem solver, capable of identifying and resolving problems effectively."},
            {name: "Work Under Pressure", level: "Advanced", icon: <Image src={work} alt="work" width={48} height={48}/>,
                description: "I am able to work under pressure, maintaining calm and effectiveness in stressful situations."},
        ],
    },
    {categoryName: "Languages",
        skills:[
            {name: "Spanish", level: "Native", icon: <Image src={spanish} alt="spanish" width={48} height={48}/>},
            {name: "English", level: "Basic", icon: <Image src={english} alt="english" width={48} height={48}/>}
        ]
    },
    {categoryName: "Technical Skills",
        skills: [
            {name: "Software Architecture", level: "Intermediate", icon: <Image src={architecture} alt="architecture" width={48} height={48}/>,
                description: "Lately I have focused on software architecture, always learning about design patterns and software architectures."},
            {name: "Docker", level: "Intermediate", icon: <Image src={docker} alt="docker" width={48} height={48}/>,
                description: "I have worked with Docker in my journey to learn microservices and application deployments."},
            {name: "Linux", level: "Intermediate", icon: <Image src={linux} alt="linux" width={48} height={48}/>,
                description: "I have learned linux to improve my use of servers and my development experience."},
            {name: "Testing", level: "Intermediate", icon: <Image src={test} alt="test" width={48} height={48}/>,
                description: "I am learning to improve my skills in testing to provide quality applications."},
            {name: "Nginx", level: "Beginner", icon: <Image src={nginx} alt="nginx" width={48} height={48}/>,
                description: "I am currently learning about Nginx to improve my skills in application deployment."},
            {name: "Kubernetes", level: "Beginner", icon: <Image src={kubernetes} alt="kubernetes" width={48} height={48}/>,
                description: "I am learning about Kubernetes and microservices architecture to improve my skills in software architecture."},
            {name: "Git", level: "Intermediate", icon: <Image src={git} alt="git" width={48} height={48}/>,
                description: "I have worked with Git in my personal and work projects, always learning about Git best practices."},
            {name: "Azure", level: "Beginner", icon: <Image src={azure} alt="azure" width={48} height={48}/>,
                description: "I am learning about Azure to improve my cloud skills and put into practice real-world software architectures."},
            {name: "AWS", level: "Beginner", icon: <Image src={aws} alt="aws" width={48} height={48}/>,
                description: "I am learning about AWS to improve my cloud skills and put into practice real-world software architectures."},
            {name: "UML", level: "Intermediate", icon: <Image src={uml} alt="uml" width={48} height={48}/>,
                description: "I use UML to model my applications and better understand my clients' requirements."},
            {name: "Database Design", level: "Intermediate", icon: <Image src={dbdesign} alt="dbdesign" width={48} height={48}/>,
                description: "I am able to design relational and non-relational databases, in the case of the former applying the first 3 levels of normalization."},
            {name: "Grandle", level: "Intermediate", icon: <Image src={grandle} alt="grandle" width={48} height={48}/>,
                description: "Grandle has allowed me to efficiently manage my java and kotlin projects."}
        ]
    },
    {categoryName: "Programming Languages",
        skills: [
            {name: "C#", level: "Advanced", icon: <Image src={cs} alt="C#" width={48} height={48}/>,
                description: "I have worked with C# in my work and personal projects, always learning about the best practices of C#."},
            {name: "JavaScript", level: "Advanced", icon: <Image src={js} alt="JavaScript" width={48} height={48}/>,
                description: "I have worked with JavaScript in my work and personal projects, especially in the frontend area."},
            {name: "TypeScript", level: "Intermediate", icon: <Image src={typescript} alt="TypeScript" width={48} height={48}/>,
                description: "I have greatly improved my javascript code thanks to TypeScript, allowing me to apply design patterns and software architectures."},
            {name: "Java", level: "Intermediate", icon: <Image src={java} alt="Java" width={48} height={48}/>,
                description: "It is the one I have used the least of the 4, but that does not mean that I control it less than the others."}
        ]
    },
    {categoryName: "Frameworks",
        skills:[
            {name: "ASP.NET Core", level: "Advanced", icon: <Image src={asp} alt="ASP.NET Core" width={48} height={48}/>},
            {name: "NestJS", level: "Intermediate", icon: <Image src={nest} alt="NestJS" width={48} height={48}/>},
            {name: "Astro", level: "Intermediate", icon: <Image src={astro} alt="Astro" width={48} height={48}/>},
            {name: "NextJS", level: "Advanced", icon: <Image src={next} alt="NextJS" width={48} height={48}/>},
            {name: "React", level: "Advanced", icon: <Image src={react} alt="React" width={48} height={48}/>},
            {name: "Spring", level: "Intermediate", icon: <Image src={spring} alt="Spring" width={48} height={48}/>}
        ]
    },
    {categoryName: "Databases",
        skills:[
            {name: "MongoDB", level: "Intermediate", icon: <Image src={mongodb} alt="MongoDB" width={48} height={48}/>},
            {name: "PostgreSQL", level: "Intermediate", icon: <Image src={postgres} alt="PostgreSQL" width={48} height={48}/>},
            {name: "SQL Server", level: "Intermediate", icon: <Image src={sqlserver} alt="SQL Server" width={48} height={48}/>},
            {name: "Redis", level: "Intermediate", icon: <Image src={redis} alt="Redis" width={48} height={48}/>}
        ]
    }
]

const es: ISkills[] = [
    {categoryName: "Habilidades Blandas", 
        skills: [
            {name: "Trabajo en equipo", level: "Avanzado", icon: <Image src={team} alt="team" width={48} height={48}/>,
                description: "Soy un excelente jugador de equipo, siempre dispuesto a colaborar y aportar en la consecución de objetivos comunes."},
            {name: "Liderazgo", level: "Avanzado", icon: <Image src={leader} alt="leader" width={48} height={48}/>, 
                description: "Soy un líder natural, capaz de motivar y guiar a los demás hacia la consecución de objetivos comunes."},
            {name: "Pensaiento crítico", level: "Avanzado", icon: <Image src={brain} alt="brain" width={48} height={48}/>,
                description: "Soy un pensador crítico, capaz de analizar y evaluar situaciones complejas para tomar decisiones acertadas."},
            {name: "Comunicación", level: "Avanzado", icon: <Image src={comunication} alt="comunication" width={48} height={48}/>,
                description: "Soy un excelente comunicador, capaz de transmitir información de manera clara y efectiva."},
            {name: "Resolución de problemas", level: "Avanzado", icon: <Image src={problem} alt="problem solving svg" width={48} height={48}/>,
                description: "Soy un solucionador de problemas, capaz de identificar y resolver problemas de manera eficaz."},
            {name: "Trabajo bajo presión", level: "Avanzado", icon: <Image src={work} alt="work" width={48} height={48}/>,
                description: "Soy capaz de trabajar bajo presión, manteniendo la calma y la eficacia en situaciones de estrés."}
        ]
    },{categoryName: "Idiomas",
        skills:[
            {name: "Español", level: "Nativo", icon: <Image src={spanish} alt="spanish" width={48} height={48}/>},
            {name: "Inglés", level: "Basico", icon: <Image src={english} alt="english" width={48} height={48}/>}
        ]
    },
    {categoryName: "Habilidades Técnicas",
        skills: [
            {name: "Arquitectura de Software", level: "Intermedio", icon: <Image src={architecture} alt="architecture" width={48} height={48}/>,
                description: "Ultimamente me he enfocado en la arquitectura del software, aprendiendo sobre siempre sobre los patrones de diseño y arquitecturas de software."},
            {name: "Docker", level: "Intermedio", icon: <Image src={docker} alt="docker" width={48} height={48}/>,
                description: "He trabajado con Docker en mi trayecto de aprender microservicios y despliegues de aplicaciones."},
            {name: "Linux", level: "Intermedio", icon: <Image src={linux} alt="linux" width={48} height={48}/>,
                description: "He aprendido linux para mejorar mi uso de servidores y mi experiencia de desarrollo."},
            {name: "Testing", level: "Intermedio", icon: <Image src={test} alt="test" width={48} height={48}/>,
                description: "Me encuentro aprendiendo a mejorar mis habilidades en el testing para poder brindar aplicativos de calidad."},
            {name: "Nginx", level: "Iniciante", icon: <Image src={nginx} alt="nginx" width={48} height={48}/>,
                description: "Actualmente me encuentro aprendiendo sobre Nginx para mejorar mis habilidades en el despliegue de aplicaciones."},
            {name: "Kubernetes", level: "Iniciante", icon: <Image src={kubernetes} alt="kubernetes" width={48} height={48}/>,
                description: "Estoy aprendiendo sobre Kubernetes y arquitectura de microservicios para mejorar mis habilidades en cuanto a arquitectura de software."},
            {name: "Git", level: "Intermedio", icon: <Image src={git} alt="git" width={48} height={48}/>,
                description: "He trabajado con Git en mis proyectos personales y laborales, siempre aprendiendo sobre las buenas prácticas de Git."},
            {name: "Azure", level: "Iniciante", icon: <Image src={azure} alt="azure" width={48} height={48}/>,
                description: "Estoy aprendiendo sobre Azure para mejorar mis habilidades en la nube y poner en practica las arquitecturas de software con problemas del mundo real."},
            {name: "AWS", level: "Iniciante", icon: <Image src={aws} alt="aws" width={48} height={48}/>,
                description: "Estoy aprendiendo sobre AWS para mejorar mis habilidades en la nube y poner en practica las arquitecturas de software con problemas del mundo real."},
            {name: "UML", level: "Intermedio", icon: <Image src={uml} alt="uml" width={48} height={48}/>,
                description: "Hago uso de UML para modelar mis aplicaciones y entender mejor los requerimientos de mis clientes."},
            {name: "Diseño de Bases de Datos", level: "Intermedio", icon: <Image src={dbdesign} alt="dbdesign" width={48} height={48}/>,
                description: "Soy capaz de diseñar bases de datos relacionales y no relacionales, en el caso de las primeras aplicando los 3 primeros niveles de normalización."},
            {name: "Grandle", level: "Intermedio", icon: <Image src={grandle} alt="grandle" width={48} height={48}/>,
                description: "Grandle me ha permetido gestionar de manera eficiente mis proyectos de java y kotlin."}
        ]
    },
    {categoryName: "Lenguajes de Programación",
        skills: [
            {name: "C#", level: "Avanzado", icon: <Image src={cs} alt="C#" width={48} height={48}/>,
                description: "He trabajado con C# en mis proyectos laborales y personales, siempre aprendiendo sobre las mejores prácticas de C#."},
            {name: "JavaScript", level: "Avanzado", icon: <Image src={js} alt="JavaScript" width={48} height={48}/>,
                description: "He trabajado con JavaScript en mis proyectos laborales y personales, sobre todo en el area del frontend."},
            {name: "TypeScript", level: "Intermedio", icon: <Image src={typescript} alt="TypeScript" width={48} height={48}/>,
                description: "He logrado mejorar muchisimo mi codigo javascript gracias a TypeScript, permitiendome aplicar patrones de diseño y arquitecturas de software."},
            {name: "Java", level: "Intermedio", icon: <Image src={java} alt="Java" width={48} height={48}/>,
                description: "Es el que menos he usado de los 4, pero eso no significa que lo controle menos que los demas."}
        ]
    },
    {categoryName: "Frameworks",
        skills:[
            {name: "ASP.NET Core", level: "Avanzado", icon: <Image src={asp} alt="ASP.NET Core" width={48} height={48}/>},
            {name: "NestJS", level: "Intermedio", icon: <Image src={nest} alt="NestJS" width={48} height={48}/>},
            {name: "Astro", level: "Intermedio", icon: <Image src={astro} alt="Astro" width={48} height={48}/>},
            {name: "NextJS", level: "Avanzado", icon: <Image src={next} alt="NextJS" width={48} height={48}/>},
            {name: "React", level: "Avanzado", icon: <Image src={react} alt="React" width={48} height={48}/>},
            {name: "Spring", level: "Intermedio", icon: <Image src={spring} alt="Spring" width={48} height={48}/>}
        ]
    },
    {categoryName: "Bases de Datos",
        skills:[
            {name: "MongoDB", level: "Intermedio", icon: <Image src={mongodb} alt="MongoDB" width={48} height={48}/>},
            {name: "PostgreSQL", level: "Intermedio", icon: <Image src={postgres} alt="PostgreSQL" width={48} height={48}/>},
            {name: "SQL Server", level: "Intermedio", icon: <Image src={sqlserver} alt="SQL Server" width={48} height={48}/>},
            {name: "Redis", level: "Intermedio", icon: <Image src={redis} alt="Redis" width={48} height={48}/>}
        ]
    }
]
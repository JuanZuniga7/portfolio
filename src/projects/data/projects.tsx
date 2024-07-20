import IProject from "./IProjects";
import Image from "next/image";
import typescript from "@/common/assets/svg/languages/typescript.svg"
import react from "@/common/assets/svg/frameworks/react.svg"
import next from "@/common/assets/svg/frameworks/next.svg"
import tailwind from "@/common/assets/svg/frameworks/tailwind.svg"
import astro from "@/common/assets/svg/frameworks/astro.svg"
//covers
import v5 from "@/projects/assets/images/portfoliov5/1.png";
import v6 from "@/projects/assets/images/portfoliov6/1.png";

export default async function getProjects(lang: string): Promise<IProject[]> {
    return lang === "en" ? en : es;
}

const en: IProject[] = [
    {name: "Portfolio V5", status:"completed", private: false, cover: v5,
        technologies:[
            <Image src={typescript} alt="typescript" width={32} height={32} />,
            <Image src={react} alt="react" width={32} height={32} />,
            <Image src={next} alt="next" width={32} height={32} />,
            <Image src={tailwind} alt="tailwind" width={32} height={32} />
        ],
        link: "https://github.com/JuanZuniga7/portfolio-v5"
    },
    {name: "Portfolio V6", status:"completed", private: false, cover: v6,
        technologies:[
            <Image src={typescript} alt="typescript" width={32} height={32} />,
            <Image src={astro} alt="astro" width={32} height={32} />,
            <Image src={react} alt="react" width={32} height={32} />,
            <Image src={tailwind} alt="tailwind" width={32} height={32} />
        ],
        link: "https://github.com/JuanZuniga7/portfolio"
    }
];

const es: IProject[] = [
    {name: "Portafolio V5", status:"completed", private: false, cover: v5,
        technologies:[
            <Image src={typescript} alt="typescript" width={32} height={32} />,
            <Image src={react} alt="react" width={32} height={32} />,
            <Image src={next} alt="next" width={32} height={32} />,
            <Image src={tailwind} alt="tailwind" width={32} height={32} />
        ],
        link: "https://github.com/JuanZuniga7/portfolio-v5"
    },
    {name: "Portafolio V6", status:"completed", private: false, cover: v6,
        technologies:[
            <Image src={typescript} alt="typescript" width={32} height={32} />,
            <Image src={astro} alt="astro" width={32} height={32} />,
            <Image src={react} alt="react" width={32} height={32} />,
            <Image src={tailwind} alt="tailwind" width={32} height={32} />
        ],
        link: "https://github.com/JuanZuniga7/portfolio"
    }
];
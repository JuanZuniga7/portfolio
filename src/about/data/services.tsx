import { IHobbieCard } from "../data/IHobbieCard";
import Image from 'next/image';
import js from '@/common/assets/svg/languages/js.svg';
import wasm from '@/about/assets/svg/wasm.svg';
import astro from '@/common/assets/svg/frameworks/astro.svg';
import python from '@/common/assets/svg/languages/python.svg';
import server from '@/about/assets/svg/server.svg';

export default async function getServices(lang: string): Promise<IHobbieCard[]> {
    return lang === "es" ? es : en;
}


const es: IHobbieCard[] = [
    {title: "Sitios Web Estaticos", icon: <Image src={astro} alt='Astro js' width={50} height={50}/>, 
        description:"Los sitios web estaticos que desarrollo siempre estan optimizados para SEO y accesibilidad. Asi como tambien tienen una excelente velocidad de carga."},
    {title: "Aplicativos Web con WASM", icon: <Image src={wasm} alt='Web Assembly' width={50} height={50}/>,
        description:"Cuando se tratan de aplicativos que en lugar de SEO requieran una alta velocidad de procesamiento y un alto rendimiento, utilizo Web Assembly para lograrlo."},
    {title: "Aplicaciones de una sola pagina", icon: <Image src={js} alt='JavaScript' width={50} height={50}/>,
        description:"Cuando se trata de aplicaciones que requieren una alta interactividad y una excelente experiencia de usuario, pero no requieren SEO o un alto rendimiento, utilizo frameworks tales como React, Preact, Nextjs o Angular para lograrlo."},
    {title: "Prototipo de backend", icon: <Image src={python} alt='Python' width={50} height={50}/>,
        description: "Para MVPs suelo usar Python con Flask o FastAPI para realizar un backend basico en el menor tiempo posible."},
    {title: "Aplicativos Backend", icon: <Image src={server} alt='Server' width={50} height={50}/>,
        description: "Para aplicativos que requieran un backend completo, suelo usar ASP.NET Core, Nestjs, Spring Boot o incluso Fiber con Golang."}
];

const en: IHobbieCard[] = [
    {title: "Static Websites", icon: <Image src={astro} alt='Astro js' width={50} height={50}/>, 
        description:"The static websites that I develop are always optimized for SEO and accessibility. As well as having excellent loading speed."},
    {title: "Web Apps with WASM", icon: <Image src={wasm} alt='Web Assembly' width={50} height={50}/>,
        description:"When it comes to applications that require high processing speed and high performance instead of SEO, I use Web Assembly to achieve it."},
    {title: "Single Page Applications", icon: <Image src={js} alt='JavaScript' width={50} height={50}/>,
        description:"When it comes to applications that require high interactivity and an excellent user experience, but do not require SEO or high performance, I use frameworks such as React, Preact, Nextjs or Angular to achieve it."},
    {title: "Backend Prototyping", icon: <Image src={python} alt='Python' width={50} height={50}/>,
        description: "For MVPs I usually use Python with Flask or FastAPI to make a basic backend in the shortest possible time."},
    {title: "Backend Applications", icon: <Image src={server} alt='Server' width={50} height={50}/>,
        description: "For applications that require a complete backend, I usually use ASP.NET Core, Nestjs, Spring Boot or even Fiber with Golang."}
];
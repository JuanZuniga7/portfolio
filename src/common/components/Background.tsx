'use server';
import Image from "next/image";
import hero from "@/common/assets/svg/hero.svg"

export default async function Background(){
    return(
        <Image src={hero} alt="Background" className="w-full h-full fixed -top-5 -right-1/4 -z-10"/>
    )
}
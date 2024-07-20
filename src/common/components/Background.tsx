'use server';
import Image from "next/image";
import hero from "@/common/assets/svg/hero.svg"

export default async function Background(){
    return(
        <Image src={hero} alt="Background" className="w-screen h-screen fixed top-0 right-0 -z-10"/>
    )
}
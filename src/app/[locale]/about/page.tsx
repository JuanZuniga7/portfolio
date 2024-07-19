'use server'
import AboutMe from "@/about/sections/AboutMe";
import Books from "@/about/sections/Books";
import Education from "@/about/sections/Education";
import Experience from "@/about/sections/Experience";
import Hobbies from "@/about/sections/Hobbies";
import Services from "@/about/sections/Services";
import Skills from "@/about/sections/Skills";

export default async function About(){
    return(
        <div className="flex flex-col gap-10 w-full h-full">
            <Services/>
            <AboutMe/>
            <Hobbies/>
            <Books/>
            <Experience/>
            <Education/>
            <Skills/>
        </div>
    )
}
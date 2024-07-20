"use server";
import { cn } from "@/common/lib/utils";
import { IHobbieCard } from "../data/IHobbieCard";

export default async function Card({ data, className }: { data: IHobbieCard[], className?: string }) {
  return (
    <ul className={cn("grid grid-cols-1 px-5 xl:grid-cols-5 gap-5 h-fit", className)}>
      {data.map((hobbie, i) => (
        <li
          key={i}
          className="border-2 from-[#0d1224] border-[#1b2c68a0] w-full h-full p-4 rounded-2xl flex flex-col gap-y-5 
                    bg-gradient-to-r to-[#0a0d37] hover:from-[#0d1224] hover:to-[#1b2c68a0] hover:border-[#1b2c68a0] cursor-default"
        >
          <div className="flex items-center justify-between">
            {hobbie.icon}
            <span className="text-base md:text-lg xl:text-2xl italic">{hobbie.title}</span>
          </div>
          <p className="w-full text-sm md:text-base xl:text-lg text-wrap text-center">{hobbie.description}</p>
        </li>
      ))}
    </ul>
  );
}

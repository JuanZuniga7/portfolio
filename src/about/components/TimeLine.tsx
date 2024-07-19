"use client";
import ITimeline from "../data/ITimeline";
import { useState } from "react";

interface Props{
  data: ITimeline[];
}

export default function TimeLine({data}: Props){

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col w-full min-h-96 h-fit items-center justify-between gap-5 p-5">
      <p className="font-bold text-4xl capitalize text-violet-500">{data[activeIndex].title}</p>
      <div className="flex items-center justify-center w-full">
        <div className="w-fit h-1 bg-indigo-400 flex items-center justify-center gap-5">
          {data.map((item, i) => (
            <div key={i} onClick={() => setActiveIndex(i)} 
            className={`${activeIndex === i ? "w-16 h-16 bg-indigo-700":"w-12 h-12"} cursor-pointer
            rounded-full bg-indigo-500 flex items-center justify-center hover:bg-indigo-700`}>
              {item.circle}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
          {data[activeIndex].description.map((item, i) => (
            <span key={i} className="text-xl">
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}
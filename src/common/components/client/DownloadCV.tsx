'use client';

export default function DownloadCV({text}:{text: string}){
    return(
        <button className="w-full bg-indigo-700 rounded-2xl py-1 text-white hover:bg-indigo-500">
            {text}
        </button>
    )
}
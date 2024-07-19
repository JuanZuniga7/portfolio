'use server';

import {cn} from "@/common/lib/utils";

export default async function SpecialText({text, className}:{text: string, className?: string}) {
    return (
        <span className={cn("animate-character py-1", className)}>
            {text}
        </span>
    )
}
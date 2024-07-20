'use server';
import code from "@/common/data/code";

export default async function Code () {

    const data = await code();

    return (
        <code className="font-mono text-xs lg:text-base flex flex-col">
            {data.lines.map((line, i) => (
                <ul key={i} className="flex flex-row gap-x-4">
                    <span className="min-w-7 text-left text-white border-r-indigo-500 border-r-2">
                        {i + 1}
                    </span>
                    <li className="flex gap-x-2">
                        {line.words.map((word, j) => {
                            if (word.text === "\t") return <span key={j} className="w-5"></span>
                            else if (word.special) {
                                return (
                                    <span key={j} className={`${word.color}`}>
                                                {word.special.map((special, k) => (
                                                    <span key={k} className={`${special.color}`}>{special.text}</span>
                                                ))}
                                            </span>
                                )
                            } else return (
                                <span key={j} className={`${word.color}`}>{word.text}</span>
                            )
                        })}
                    </li>
                </ul>
            ))}
        </code>
    )
}
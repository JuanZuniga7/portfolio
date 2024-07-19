'use server';
import Section from "../components/Section";
import { getTranslations } from "next-intl/server";
import getBooks from "../data/books";
import Image from "next/image";

export default async function Books(){

    const l = await getTranslations("Index");
    const data = await getBooks(l('lang'));

    return(
        <Section id="books" name="books">
            <ul className="grid grid-cols-3 w-full h-fit gap-5">
                {data.map((book, i) => (
                    <li key={i} className="w-full h-full flex border-2 border-transparent rounded-2xl overflow-hidden">
                        <Image src={book.image} alt={book.title} width={200} height={400} className="w-36 h-full"/>
                        <div className="w-full px-2 py-5 flex flex-col items-center justify-center gap-5">
                            <span className="text-xl font-bold text-center">{book.title}</span>
                            <span className="text-center">{book.description}</span>
                            <span className="text-center italic text-amber-500">{book.state}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
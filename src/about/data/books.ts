import IBooks from "./IBooks";

import zarathustra from "@/about/assets/images/fnzarathustra.png";
import cleancode from "@/about/assets/images/cc.png";

export default async function getBooks(lang: string): Promise<IBooks[]> {
    return lang === "en" ? en : es;
}

const en: IBooks[] = [
    {image: zarathustra, title: "Thus Spoke Zarathustra", state: "Reading",
        description: "A philosophical novel by German philosopher"},
    {image:cleancode, title: "Clean Code", state: "Reading",
        description: "Book written by Robert C. Martin about the fundamentals of clean code writing"},
];

const es: IBooks[] = [
    {image: zarathustra, title: "Así habló Zaratustra",  state: "Leyendo",
        description: "Una novela filosófica del filósofo alemán"},
    {image:cleancode, title: "Clean Code", state: "Leyendo",
        description: "Libro escrito por Robert C. Martin sobre los fundamentos de la escritura del código limpio"},
];
import { StaticImageData } from "next/image";

export default interface IBooks{
    image: StaticImageData;
    title: string;
    description: string;
    state: string;
}
import { StaticImageData } from "next/image";

export default interface IProject{
    name: string;
    cover: StaticImageData;
    status: "completed" | "inProgress";
    private: boolean;
    technologies: JSX.Element[];
    link?: string;
}
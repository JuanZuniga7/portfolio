export interface ISkills{
    categoryName: string;
    skills: ISkill[];
}

interface ISkill{
    icon: JSX.Element;
    name: string;
    level: string;
    start?: string;
    description?: string;
}
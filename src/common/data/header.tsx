import {BsBook} from "react-icons/bs";
import {FaBasketballBall, FaCode, FaCodeBranch, FaUser, FaUserGraduate} from "react-icons/fa";
import {ImBlog} from "react-icons/im";
import {GoHomeFill} from "react-icons/go";
import {MdHomeRepairService, MdWork} from "react-icons/md";
import {RiFolderUserLine} from "react-icons/ri";
import {CiBoxList} from "react-icons/ci";
import { GrCertificate } from "react-icons/gr";

interface IElement{
    name: string;
    icon: JSX.Element;
    link: string;
    subElements?: IElement[];
}

export const en: IElement[] = [
    {name: "Home", icon: <GoHomeFill className="w-5 h-5"/>, link: ""},
    {name: "About", icon: <FaUser className="w-4 h-4"/>, link: "about", 
        subElements: [
            {name: "Services", icon: <MdHomeRepairService className="w-4 h-4"/>, link: "services"},
            {name: "About Me", icon: <RiFolderUserLine className="w-4 h-4"/>, link: "about-me"},
            {name: "Hobbies", icon: <FaBasketballBall className="w-4 h-4"/>, link: "hobbies"},
            {name: "Books", icon: <BsBook className="w-4 h-4"/>, link: "books"},
            {name: "Experience", icon: <MdWork className="w-4 h-4"/>, link: "experience"},
            {name: "Education", icon: <FaUserGraduate className="w-4 h-4"/>, link: "education"},
            {name: "Skills", icon: <CiBoxList className="w-4 h-4"/>, link: "skills"},
        ]
    },
    {name: "Projects", icon: <FaCodeBranch className="w-4 h-4"/>, link: "projects"},
    {name: "Blog", icon: <ImBlog className="w-4 h-4"/>, link: "blog"},
];
import {PiGithubLogoBold} from "react-icons/pi";
import {FaGitlab, FaLinkedin} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {FaSquareXTwitter} from "react-icons/fa6";
import {IoLogoYoutube} from "react-icons/io";

interface ISocialMedia{
    link: string;
    icon: JSX.Element;
}

export const socialMedia: ISocialMedia[] = [
    {icon: <PiGithubLogoBold className="w-5 h-5"/>, link: "https://github.com/JuanZuniga7"},
    {icon: <FaGitlab className="w-5 h-5"/>, link: "https://gitlab.com/JuanZuniga7"},
    {icon: <AiFillInstagram className="w-5 h-5"/>, link: ""},
    {icon: <FaSquareXTwitter className="w-5 h-5"/>, link: ""},
    {icon: <IoLogoYoutube className="w-5 h-5"/>, link: ""},
    {icon: <FaLinkedin className="w-5 h-5"/>, link: "https://www.linkedin.com/in/juan-zuniga-7/"}
]
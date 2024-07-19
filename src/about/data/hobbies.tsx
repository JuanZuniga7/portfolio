import { FaBasketballBall, FaGhost, FaRunning, FaSwimmer } from "react-icons/fa";
import { IHobbieCard } from "./IHobbieCard";
import { TbBooks } from "react-icons/tb";
import { BiSolidCameraMovie } from "react-icons/bi";
import { AiOutlineSpotify } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { CgGames } from "react-icons/cg";


export default async function getHobbies(lang: string): Promise<IHobbieCard[]> {
    return lang === "es" ? es : en;
}   

const es: IHobbieCard[] = [
    {icon: <FaBasketballBall className="w-10 h-10"/>, title: "Baloncesto", 
        description: "He jugado baloncesto desde que tenia 20, aunque nunca he sido realmente bueno."},
    {icon: <FaRunning className="w-10 h-10"/>, title: "Correr", 
        description: "Me gusta correr a primera hora del dia, me ayuda a mantenerme en forma y sentirme con mas energia."},
    {icon: <FaSwimmer className="w-10 h-10"/>, title: "Natacion",
        description: "Aprovechando que vivo cerca del mar, despues de correr me gusta nadar un rato en el mar."},
    {icon: <TbBooks className="w-10 h-10"/>, title: "Lectura",
        description: "En mi tiempos libres y mientras uso el transporte publico, me gusta leer sobre filosofia ciencia y tecnologia."},
    {icon: <BiSolidCameraMovie className="w-10 h-10"/>, title: "Cine",
        description: "Al menos una vez al mes suelo ver alguna pelicula en el cine, me ayuda a socializar y a relajarme."},
    {icon: <FaGhost className="w-10 h-10"/>, title: "historias de terror",
        description: "Me encanta leer y escuchar historias de terror, me ayudan a relajarme y a dormir mejor."},
    {icon: <AiOutlineSpotify className="w-10 h-10"/>, title: "Musica",
        description: "Escucho musica casi todo el dia, me ayuda a concentrarme y a relajarme."},
    {icon: <MdFastfood className="w-10 h-10"/>, title: "Comida",
        description: "Me gusta cocinar y conocer restaurantes nuevos para aprender nuevas recetas."},
    {icon: <PiTelevisionSimpleBold className="w-10 h-10"/>, title: "Cultura del anime",
        description: "Me gusta ver anime y leer manga, me ayuda a relajarme y a desconectar de la vida real."},
    {icon: <CgGames className="w-10 h-10"/>, title: "Videojuegos",
        description: "Me gusta jugar videojuegos en mi tiempo libre, me ayuda a relajarme y a desconectar de la vida real."}
]

const en: IHobbieCard[] = [
    {icon: <FaBasketballBall className="w-10 h-10"/>, title: "Basketball", 
        description: "I have played basketball since I was 20, although I have never been really good."},
    {icon: <FaRunning className="w-10 h-10"/>, title: "Running", 
        description: "I like to run early in the morning, it helps me stay in shape and feel more energetic."},
    {icon: <FaSwimmer className="w-10 h-10"/>, title: "Swimming",
        description: "Taking advantage of the fact that I live near the sea, after running I like to swim in the sea for a while."},
    {icon: <TbBooks className="w-10 h-10"/>, title: "Reading",
        description: "In my free time and while using public transport, I like to read about philosophy, science and technology."},
    {icon: <BiSolidCameraMovie className="w-10 h-10"/>, title: "Cinema",
        description: "At least once a month I usually watch a movie in the cinema, it helps me socialize and relax."},
    {icon: <FaGhost className="w-10 h-10"/>, title: "Horror stories",
        description: "I love reading and listening to horror stories, they help me relax and sleep better."},
    {icon: <AiOutlineSpotify className="w-10 h-10"/>, title: "Music",
        description: "I listen to music almost all day, it helps me concentrate and relax."},
    {icon: <MdFastfood className="w-10 h-10"/>, title: "Food",
        description: "I like to cook and try new restaurants to learn new recipes."},
    {icon: <PiTelevisionSimpleBold className="w-10 h-10"/>, title: "Anime culture",
        description: "I like to watch anime and read manga, it helps me relax and disconnect from real life."},
    {icon: <CgGames className="w-10 h-10"/>, title: "Video games",
        description: "I like to play video games in my free time, it helps me relax and disconnect from real life."}
]
'use client';

import { RiMenuFill } from "react-icons/ri";
import { handleMenu } from "./Drawer";

export default function MobileIcon(){
    return(
        <figure onClick={()=>handleMenu()}>
            <RiMenuFill className="text-white fixed top-2 right-5 text-3xl lg:hidden"/>
        </figure>
    )
}
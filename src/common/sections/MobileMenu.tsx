"use server"

import Drawer from "../components/client/Drawer";
import MobileIcon from "../components/client/MobileIcon";
import Card from '@/common/sections/Card';

export default async function MobileMenu(){

    return(
        <>
            <MobileIcon/>
            <Drawer>
                <Card className="w-[80%] md:w-[60%] h-screen"/>
            </Drawer>
        </>
    )
}
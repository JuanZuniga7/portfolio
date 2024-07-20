"use server";

import Drawer from "../components/client/Drawer";
import MobileIcon from "../components/client/MobileIcon";
import Card from "@/common/sections/Card";
import MobileNav from "../components/MobileNav";

export default async function MobileMenu() {

  return (
    <>
      <MobileIcon />
      <Drawer>
        <Card >
          <MobileNav mb />
        </Card>
      </Drawer>
    </>
  );
}

import { MenuIcon } from "media/index";
const logo: string = require("media/logo.png");
import Image from "next/image";
import { useState } from "react";
import { Options } from "../options";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Image
          src={logo}
          alt="logo"
          width="50"
          height="40"
          className="benjaLogo"></Image>
      </div>
    </div>
  );
}

import { MenuIcon } from "media/index";
const logo: string = require("media/logo.png");
import Image from "next/image";

export function Options({ className }: any) {
  return (
    <div className={`options ${className}`}>
      <a href="/home">Home</a>
      <a href="/me">About Me</a>
      <a href="/portfolio">Portfolio</a>
    </div>
  );
}

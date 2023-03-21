import { useState } from "react";
import Image from "next/image";
var me = require("media/me.png");

export function Benja(props: any) {
  return (
    <div className={props.className}>
      <div
        className={
          "header__profile-pic-circle" + ` ${props.small ? "small" : ""}`
        }>
        <Image
          src={me}
          alt="benja"
          className={"imageBenja" + ` ${props.small ? "small" : ""}`}
        />
      </div>
    </div>
  );
}

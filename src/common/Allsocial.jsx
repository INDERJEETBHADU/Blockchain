import React from "react";
import detaabout from "../assets/images/svg/detaabout.svg";
import horse from "../assets/images/svg/horse.svg";
import twiiter from "../assets/images/svg/twitterrr.svg";
import Telegramm from "../assets/images/svg/telegrammm.svg";
import graph from "../assets/images/svg/graph.svg";

function Allsocial() {
  return (
    <div className=" d-flex  align-items-center gap-sm-4 gap-lg-1 gap-xl-4 gap-1">
      <a
        className=" icon_width w-100"
        href="https://www.dextools.io/app/en/pairs"
        target="_blank"
      >
        <img src={detaabout} alt="deta" />
      </a>
      <a className=" icon_width w-100" href="">
        <img src={horse} alt="deta" />
      </a>
      <a className=" icon_width w-100" href="https://x.com/" target="_blank">
        <img src={twiiter} alt="deta" />
      </a>
      <a
        className=" icon_width w-100"
        href="https://www.telegram.com/"
        target="_blank"
      >
        <img src={Telegramm} alt="deta" />
      </a>
      <a className=" icon_width w-100" href="">
        <img src={graph} alt="deta" />
      </a>
    </div>
  );
}

export default Allsocial;

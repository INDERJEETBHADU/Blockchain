import React from "react";
import detaabout from "../assets/images/svg/detaabout.svg";
import horse from "../assets/images/svg/horse.svg";
import twiiter from "../assets/images/svg/twitterrr.svg";
import Telegramm from "../assets/images/svg/telegrammm.svg";
import graph from "../assets/images/svg/graph.svg";

function Allsocial() {
  return (
    <div className=" d-flex flex-wrap align-items-center gap-sm-4 gap-lg-1 gap-xl-4 gap-3">
      <img src={detaabout} alt="deta" />
      <img src={horse} alt="deta" />
      <img src={twiiter} alt="deta" />
      <img src={Telegramm} alt="deta" />
      <img src={graph} alt="deta" />
    </div>
  );
}

export default Allsocial;

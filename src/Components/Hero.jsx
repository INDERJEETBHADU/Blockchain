import React, { useState } from "react";
import NavBar from "./NavBar";
import CommonBtn from "../common/CommonBtn";
import { FileIcon } from "../common/Icon";
import GG_pic from "../assets/images/webp/gg-hero-img.webp";

function Hero() {
  const [inputValue, setInputValue] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setInputValue(file.name);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className="  bg-black position-relative">
        <NavBar />
        <div className="container">
          <div className=" hero_sec_padding position-relative z-2">
            <h2 className=" mb-0 ff-inter fw_900 text-108 lh-130 text-white">
              G<span className=" color-yellow">G</span>
            </h2>
            <p className="  mb-0 ff-inter fw-semibold para_hero_max_w  text-white  text-20 lh-24 opacty_80">
              Join The Worldwide
              <span className=" color-yellow">Blockchain Protest</span>
               Against Corrupt Government Bodies
            </p>
            <div className=" d-flex align-items-center gap_20 mt_30   ">
              <CommonBtn text="Buy $GrayGensle" bgcolor="bg-transparent" />
              <CommonBtn text="How To Buy?" bgcolor="bg-transparent" />
            </div>
            <div className="input-container cursor_pointer mt_29 d-flex  align-items-center">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="dwqjddj324dnewdne3dewrrets"
                className=" ff-inter fw-normal text-20  lh-30 text-white bg-transparent border-0"
              />
              <label
                htmlFor="file-upload"
                className="cursor_pointer file-upload-label"
              >
                <FileIcon />
              </label>
              <input
                type="file"
                id="file-upload"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className=" position-absolute GG_pos oapcty_30 ">
          <img className=" w-100" src={GG_pic} alt="GG_pic" />
        </div>
      </div>
    </>
  );
}

export default Hero;

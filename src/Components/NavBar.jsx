import React, { useState } from "react";
import dexTool from "../assets/images/svg/dextool.svg";
import Twiiter from "../assets/images/svg/twiiter_nav.svg";
import Telegram from "../assets/images/svg/telegram_Nav.svg";
import CommonBtn from "../common/CommonBtn";

function NavBar() {
  const [show, setfirst] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div>
        <div className="container">
          <div className=" d-flex justify-content-between align-items-center nav_padding">
            <h2 className="cursor_pointer mb-0 ff-inter fw_900 text-40 lh-48 text-white">
              Gxxx Gxxxxxx
            </h2>
            <div
              className={` ${
                show ? "end-0" : "right_100"
              } d-flex mobile-view align-items-center gap-lg-5 gap-3`}
            >
              <div className=" d-flex align-items-center gap-lg-4 gap-2">
                {/* icon */}
                <a href="https://www.dextools.io/app/en/pairs" target="_blank">
                  <img src={dexTool} alt="dexTool" />
                </a>
                <a href="https://twiiter.com/" target="_blank">
                  <img src={Twiiter} alt="dexTool" />
                </a>
                <a href="https://www.telegram.com/" target="_blank">
                  <img src={Telegram} alt="dexTool" />
                </a>
              </div>
              <CommonBtn text="Buy On Uniswap" bgcolor="bg-transparent" />
            </div>
            <div
              onClick={() => {
                setfirst(!show);
              }}
              class="menu d-block d-md-none z_9  "
            >
              <span></span>
              <span class="my-2"></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

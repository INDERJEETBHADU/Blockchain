import React from "react";
import dexTool from "../assets/images/svg/dextool.svg";
import Twiiter from "../assets/images/svg/twiiter_nav.svg";
import Telegram from "../assets/images/svg/telegram_Nav.svg";

function Footer() {
  return (
    <>
      <div className=" bg-black footer_sec_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-md-4 col-sm-6 col-6 ">
              <h2 className=" mb-0 cursor_pointer  ff-inter fw_900   text-79 lh-95  text-white ">
                G<span className=" color-yellow">G</span>
              </h2>
              <p className=" mb-0 mt-4 ff-inter fw-normal  text-16  lh-25 text-white">
                @copyright2024
              </p>
            </div>
            <div className="col-lg-4 col-xl-2 col-sm-6 col-md-4 col-6 ">
              <div className=" d-flex  justify-content-xl-between gap-5">
                <div className="line_of_foter"></div>
                <div className="">
                  <h2 className="  mb-0 ff-inter fw-bold text-white  text-16 lh-25">
                    QUICK LINKS
                  </h2>
                  <ul>
                    <li className=" mb-0 mt-4 ff-inter fw-normal text-16 lh-25 ">
                      <a className=" text-white" href="">
                        Twitter
                      </a>
                    </li>
                    <li className=" mb-0 mt-3  ff-inter fw-normal text-16 lh-25 ">
                      <a className=" text-white" href="">
                        Telegram
                      </a>
                    </li>
                    <li className=" mb-0 mt-3 ff-inter fw-normal text-16 lh-25 ">
                      <a className=" text-white" href="">
                        DexTools
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-4 pt-md-0 col-xl-6 col-md-4 col-12  d-flex align-items-start  justify-content-md-end">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

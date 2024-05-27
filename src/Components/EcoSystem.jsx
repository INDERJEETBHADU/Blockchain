import React from "react";
import ecosystem from "../assets/images/webp/ecosytem_img.webp";
import CommonHeading from "../common/CommonHeading";
import ComnPara from "../common/ComnPara";
import Allsocial from "../common/Allsocial";
import CommonBtn from "../common/CommonBtn";
import news_ecosystem from "../assets/images/svg/ecosystem_newa.svg";
import glass_ecosystem from "../assets/images/svg/glasses_about.svg";

function EcoSystem() {
  return (
    <>
      <div className=" bg_img_ecosystem position-relative">
        <div className="container">
          <div className="row ecosystem_padding">
            <div className="col-lg-6 col-12">
              <img
                className=" w-100 max_w_565_ecco"
                src={ecosystem}
                alt="ecosystem"
              />
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <div className=" pt-4">
                <Allsocial />
                <div className=" pt-sm-2 mt-1">
                  <CommonHeading text="ECOSYSTEM" />
                  <div className="  pt-md-3 mt-1">
                    <ComnPara
                      max_w_para="w_para_550"
                      text="The $LHGG ecosystem is built upon the principles of inclusivity,  humor, and innovation. Our community-driven approach  empowers members to actively participate in governance,  decision-making, and promotional activities. Through social  media campaigns, memes, and creative content, we seek to  amplify the message of embracing humor in the crypto space  and challenging conventional narratives. Together, we aspire to  foster a vibrant and engaging ecosystem where laughter reigns  supreme."
                    />
                  </div>
                </div>
                <div className=" mt_33">
                  <CommonBtn text="Buy $GrayGensler" bgcolor=" bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" position-absolute d-none d-sm-block news_eco_position">
          <img src={news_ecosystem} alt="news_ecosystem" />
        </div>
        <div className=" position-absolute d-none d-sm-block glass_eco_position">
          <img src={glass_ecosystem} alt="news_ecosystem" />
        </div>
      </div>
    </>
  );
}

export default EcoSystem;

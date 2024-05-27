import React from "react";
import CommonHeading from "../common/CommonHeading";
import ComnPara from "../common/ComnPara";
import CommonBtn from "../common/CommonBtn";
import ultily_Sec_img from "../assets/images/webp/utelty-img.webp";
import utility_paper from "../assets/images/svg/utility_paper.svg";
function Utility() {
  return (
    <>
      <div className=" overflow-hidden">
        <div className="utility_bg_img position-relative">
          <div className="container">
            <div className="row d-flex  flex-column-reverse  flex-md-row utility_padding">
              <div className="col-md-6 col-12 d-flex align-items-center">
                <div className="">
                  <CommonHeading text="UTILITY" />
                  <div className=" pt-1 mt-sm-3">
                    <ComnPara
                      color="text-black"
                      max_w_para="max_w_550"
                      text="The utility of $LHGG extends beyond its humorous appeal.  Holders of $LHGG gain access to exclusive merchandise,  events, and community perks. Furthermore, $LHGG serves  as a medium of exchange within our ecosystem, facilitating  transactions and interactions among community members.  Through strategic partnerships and integrations, we aim to  expand the utility of $LHGG, creating additional avenues for  adoption and growth."
                    />
                  </div>
                  <div className=" pt-1">
                    <CommonBtn
                      bgcolor="bg-black"
                      spacing="mt-4"
                      text="Buy $GrayGensler"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex  justify-content-end">
                <div className="">
                  <img
                    className=" max_w_ultiy_img w-100"
                    src={ultily_Sec_img}
                    alt="utility"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" position-absolute  d-none d-lg-block fuding_pos_utility_top">
            <h5 className=" mb-0 ff-grands fw_900 text-32 lh-32 color-grey">
              I love FUDing
            </h5>
          </div>
          <div className=" position-absolute d-none d-lg-block fuding_pos_utility_right">
            <h5 className=" mb-0 ff-grands fw_900 text-32 lh-32 color-grey">
              I love FUDing
            </h5>
          </div>
          <div className=" position-absolute d-none d-lg-block fuding_pos_utility_bottom">
            <h5 className=" mb-0 ff-grands fw_900 text-32 lh-32 color-grey">
              I love FUDing
            </h5>
          </div>
          <div className=" position-absolute d-none d-sm-block paper_utility_pos">
            <img src={utility_paper} alt="utility_paper" />
          </div>
        </div>
        <div className="  mb-4 ">
          <div className=" bg_color   rotate_sec  overflow-hidden d-flex align-items-center justify-content-center  ">
            <h2 className=" ff-inter mb-0 fw_900 text-36 lh-43 text-black text-center">
              PLACE YOURSELF ON THE RIGHT SIDE OF HISTORY
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Utility;

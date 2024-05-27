import React from "react";
import CommonHeading from "../common/CommonHeading";
import { Newscard } from "../common/Helper";
import mobile_svg from "../assets/images/svg/mobile_svg.svg";
import laptop_svg from "../assets/images/svg/laptop_svg.svg"

function News() {
  return (
    <>
      <div className=" position-relative">
        <div className="container">
          <div className=" text-center pt_50">
            <CommonHeading text="LATEST NEWS" color="text-black" />
          </div>
          <div className=" d-flex flex-wrap py_46  justify-content-center gap_20  ">
            {Newscard.map((data, index) => (
              <>
                <div className=" news_card mb-2">
                  <div className=" d-flex align-items-center gap-14">
                    <div>
                      <img src={data.Img} alt="newsimg" />
                    </div>
                    <div className=" d-flex flex-column">
                      <p className=" mb-0 text-start ff-inter fw_900 text-16 lh-19 text-black">
                        {data.name} <span>{data.svg}</span>
                      </p>
                      <p className=" ff-inter fw-normal text-14 lh-25 text-black mb-0">
                        {data.smalpheragraph}
                      </p>
                    </div>
                  </div>
                  <p className=" ff-inter fw-normal mt_20 text-start text-16 lh-25 mb-0  opacty_80 text-black">
                    {data.pheragraph}
                  </p>
                  <div className=" d-flex align-items-center justify-content-between pr-22 pt-27">
                    <p className=" text-black   fw-normal text-1483 d-flex align-items-center gap-1   ff-poppins mb-0">
                      {data.commentsvg} <span>{data.text28}</span>
                    </p>
                    <p className=" text-black  fw-normal text-1483 d-flex align-items-center gap-1   ff-poppins mb-0">
                      {data.Refreshsvg} <span>{data.text5}</span>
                    </p>
                    <p className=" text-black  fw-normal text-1483 d-flex align-items-center gap-1   ff-poppins mb-0">
                      {data.Likesvg} <span>{data.text21}</span>
                    </p>
                    <p className=" text-black  fw-normal text-1483 d-flex align-items-center gap-1   ff-poppins mb-0">
                      {data.sharesvg}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className=" position-absolute d-none d-md-block mobile_pos">
          <img src={mobile_svg} alt="mobile_svg" />
        </div>
        <div className=" position-absolute d-none d-lg-block laptop_pos">
          <img src={laptop_svg} alt="mobile_svg" />
        </div>
      </div>
    </>
  );
}

export default News;

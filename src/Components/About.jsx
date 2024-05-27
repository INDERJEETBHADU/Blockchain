import React from "react";
import Allsocial from "../common/Allsocial";
import about_img from "../assets/images/webp/about-img.webp";
import CommonHeading from "../common/CommonHeading";
import ComnPara from "../common/ComnPara";
import glasses from "../assets/images/svg/glasses_about.svg";

function About() {
  return (
    <>
      <div className="bg_about_img position-relative ">
        <div className="container">
          <div className="row about_sec_padding">
            <div className="col-lg-6  col-12 d-flex align-items-center align-items-xl-start ">
              <div className=" pt-lg-2 position-relative">
                <img
                  className=" w-100 mt-lg-5   "
                  src={about_img}
                  alt="about"
                />
                <div className=" position-absolute fuding_pos_top">
                  <h5 className=" mb-0 ff-grands fw_900 text-32 lh-32 color-grey">
                    I love FUDing
                  </h5>
                </div>
                <div className=" d-none d-md-block d-lg-none d-xl-block position-absolute fuding_pos_right">
                  <h5 className=" mb-0 ff-grands fw_900 text-32 lh-32 color-grey">
                    I love FUDing
                  </h5>
                </div>
                <div className=" d-none d-lg-block position-absolute fuding_pos_bottom">
                  <h5 className=" mb-0 ff-grands fw_900 text-32 lh-32 color-grey">
                    I love FUDing
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <div className="">
                <Allsocial />
                <div className=" pt-2 pt-sm-3 pt-md-4 pt-lg-1 pt-xl-4">
                  <CommonHeading text="ABOUT US" />
                  <div className=" pt-sm-3 pt-md-4 pt-1 pt-lg-1 pt-xl-4">
                    <ComnPara
                      max_w_para="w_para_550"
                      text=" In the ever-evolving landscape of cryptocurrency, where markets  can swing on a tweet and sentiments wield as much power as  technical analysis, one figure has recently stepped into the  spotlight: Gary Gensler, or as we affectionately call him, GG. With his  recent comments on Bitcoin, Gensler stirred the pot of fear,  uncertainty, and doubt (FUD), sending shockwaves through the  crypto community."
                    />
                  </div>
                  <div className=" mt-sm-3 mt-2 mt-lg-1 mt-xl-3">
                    <ComnPara
                      color=" text-black"
                      max_w_para="w_para_550"
                      text=" But fear not, for in the midst of this whirlwind of emotions, there  emerges a beacon of levity and laughter: Let's Hug GG ($LHGG).Hug GG We're not your average token; we're a humorous response to the  serious business of crypto. Inspired by Gensler's remarks and the  ensuing FUD frenzy, $LHGG aims to inject a healthy dose of humor  into the conversation while playfully encouraging individuals to  consider selling their Bitcoins."
                    />
                  </div>
                  <div className=" mt-sm-3 mt-2 mt-lg-1 mt-xl-3">
                    <ComnPara
                      max_w_para="w_para_550"
                      text="ou see, we believe that in times of uncertainty, a good laugh can be  the best antidote. And what better way to address fear than with a  hug—from behind, of course! Our slogan, If you sell your BTC, we'll  let you hug GG from behind so tightly, embodies our playful  approach to tackling the anxiety surrounding Bitcoin and the  broader crypto market."
                    />
                  </div>
                  <div className="mt-sm-3 mt-2 mt-lg-1 mt-xl-3">
                    <ComnPara
                      max_w_para="w_para_550"
                      text="So, buckle up and get ready for a rollercoaster ride of giggles, hugs,  and maybe even a few profitable trades along the way. Because in  the world of $LHGG, laughter isn't just the best medicine—it's the  best investment strategy."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* glasses */}
        <div className=" d-none d-md-block position-absolute glases_pos_about">
          <img src={glasses} alt="glass" />
        </div>
      </div>
    </>
  );
}

export default About;

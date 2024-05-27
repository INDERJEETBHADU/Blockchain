import React from "react";
import upper_layer from "../assets/images/webp/roadmap_upper_layer.webp";
import CommonHeading from "../common/CommonHeading";
import roadmap1 from "../assets/images/svg/roadmap1.svg";
import roadmap2 from "../assets/images/svg/Roadmap2.svg";
import roadmap3 from "../assets/images/svg/roadmap3.svg";
import roadmap4 from "../assets/images/svg/roadmap4.svg";
import roadmap5 from "../assets/images/svg/roadmap5.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bottom_layer from "../assets/images/webp/roadmap_layer_2.webp";



function RoadMap() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    autoplaySpeed: 0,
    slidesToShow: 5,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="">
        <div className="">
          <img className=" w-100" src={upper_layer} alt="upper_layer" />
        </div>
        <div className=" bg-black   mr_neg_2">
          <div className="container">
            <div className=" text-center">
              <CommonHeading text="ROADMAP" color="text-white" />
              <div className=" pt-1">
                <p className=" mb-0 ff-inter opacity-75  mt-3  fw-normal text-16 lh-30 text-white">
                  Our roadmap isn't just a journey; it's a comedic adventure
                  through the cryptoverse, filled with twists, turns, and plenty
                  <span className=" d-lg-block">
                    of laughs along the way. Here's a glimpse into what the
                    future holds for Let's Hug GG ($LHGG)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <Slider {...settings} className=" d-flex slider_padding  gap-sm-3">
            <div className=" d-flex align-items-end gap-2">
              <img src={roadmap1} alt="roadmap1" />
              <div className=" mb-4">
                <h5 className=" max_w_184_roadmap mb-0 ff-inter fw_900  text-24 lh-29 text-white">
                  Token Launch (Q1 2024)
                </h5>
                <p className=" mb-0 mt-2 ff-inter fw-normal text-16 lh-30 text-white  max_w_184_roadmap opacity-75">
                  Launch $LHGG token, establish initial liquidity.
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center gap-3">
              <img src={roadmap2} alt="roadmap1" />
              <div className=" ">
                <h5 className=" max_w_237_roadmap2 mb-0 ff-inter fw_900  text-24 lh-29 text-white">
                  Community Building (Q2 2024)
                </h5>
                <p className=" mb-0 mt-2 ff-inter fw-normal text-16 lh-30 text-white  max_w_237_roadmap2 opacity-75">
                  Grow vibrant community through humor and engagement.
                </p>
              </div>
            </div>
            <div className=" d-flex  gap-3">
              <img src={roadmap3} alt="roadmap1" />
              <div className="   mt-3">
                <h5 className=" max_w_237_roadmap2 mb-0 ff-inter fw_900  text-24 lh-29 text-white">
                  Governance Implementation (Q3 2024)
                </h5>
                <p className=" mb-0 mt-2 ff-inter fw-normal text-16 lh-30 text-white  max_w_237_roadmap2 opacity-75">
                  Introduce community governance mechanisms.
                </p>
              </div>
            </div>
            <div className=" d-flex  gap-3 align-items-end">
              <img src={roadmap4} alt="roadmap1" />
              <div className="   mt-3">
                <h5 className=" max_w_237_roadmap2 mb-0 ff-inter fw_900  text-24 lh-29 text-white">
                  Partnerships and Influencer Collaborations (Q4 2024)
                </h5>
                <p className=" mb-0 mt-2 ff-inter fw-normal text-16 lh-30 text-white  max_w_237_roadmap2 opacity-75">
                  Forge strategic partnerships and collaborations.
                </p>
              </div>
            </div>
            <div className=" d-flex  gap-3 align-items-center">
              <img src={roadmap5} alt="roadmap1" />
              <div className="   mt-3">
                <h5 className=" max_w_237_roadmap2 mb-0 ff-inter fw_900  text-24 lh-29 text-white">
                  Utility Expansion (Q1 2025)
                </h5>
                <p className=" mb-0 mt-2 ff-inter fw-normal text-16 lh-30 text-white  max_w_237_roadmap2 opacity-75">
                  Explore new use cases and integrations for $LHGG.
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="">
          <img className=" w-100" src={bottom_layer} alt="upper_layer" />
        </div>
        
      </div>
    </>
  );
}

export default RoadMap;

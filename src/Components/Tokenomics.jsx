import React from "react";
import upper_layer from "../assets/images/webp/takenomics_upper_layer.webp";
import CommonHeading from "../common/CommonHeading";
import ComnPara from "../common/ComnPara";
import bottom_layer from "../assets/images/webp/takenomics_bootom_layer.webp";

function Tokenomics() {
  return (
    <>
      <div className="">
        <div className="">
          <img className=" w-100" src={upper_layer} alt="upper_layer" />
        </div>
        <div className=" bg-black mr_neg_2">
          <div className=" container">
            <div className="row takenomics_sec_padding">
              <div className="col-lg-5 col-12 d-flex justify-content-center">
                <div className="">
                  <CommonHeading text="TOKENOMICS" color="text-white" />
                  <div className=" pt-1 mt-3">
                    <ComnPara
                      color=" text-white"
                      max_w_para="w_para_453"
                      text="Let's Hug GG ($LHGG) operates on a deflationary tokenomics model designed to incentivize selling Bitcoin.  With a fixed total supply and a burn mechanism in place, each transaction contributes to reducing the  circulating supply of $LHGG, thereby increasing its scarcity and value over time. Additionally, a portion of  transaction fees is allocated to liquidity pools, ensuring stability and liquidity for $LHGG holders."
                    />
                  </div>
                  <div className=" pt-1">
                    <div className="token_type_box mt-3">
                      <p className=" mb-0 text-white ff-inter d-flex align-items-center  gap-5 fw-normal text-20 lh-30 text-white ">
                        <span>Token Name: </span>
                        <span className=" fw-bold  ">Let’s Hug GG</span>
                      </p>
                      <div className="  pt-1">
                        <p className=" mb-0 text-white mt-2 ff-inter d-flex align-items-center  gap_31 fw-normal text-20 lh-30 text-white ">
                          <span>Token Symbol:</span>
                          <span className=" fw-bold  "> $LHGG</span>
                        </p>
                      </div>
                      <div className="  pt-1">
                        <p className=" mb-0 text-white mt-2 ff-inter d-flex align-items-center  gap-5 fw-normal text-20 lh-30 text-white ">
                          <span>Total Supply:</span>
                          <span className=" fw-bold  "> 1 Billion $LHGG</span>
                        </p>
                      </div>
                      <div className="  pt-1">
                        <p className=" mb-0 text-white mt-2 ff-inter d-flex align-items-center  gap_64 fw-normal text-20 lh-30 text-white ">
                          <span>Total Type: </span>
                          <span className=" fw-bold  ">Solana SPL Token</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-12 d-flex justify-content-center">
                <div className=" max_w_616 mt-4 pt-1 ">
                  <div className=" d-flex flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start align-items-center gap-4">
                    <div className="">
                      <div className="marketing_box">
                        <h2 className=" mb-0 ff-inter fw-semibold  text-20 lh-30 text-black">
                          {" "}
                          Marketing & Partnerships
                        </h2>
                        <p className=" mb-0 ff-inter text-black  fw-semibold text-32 lh-30 mt-2 text-center">
                          5%
                        </p>
                      </div>
                      <div className="marketing_box mt-3">
                        <h2 className=" mb-0 ff-inter fw-semibold  text-20 lh-30 text-black">
                          {" "}
                          Community Development
                        </h2>
                        <p className=" mb-0 ff-inter text-black  fw-semibold text-32 lh-30 mt-2 text-center">
                          15%
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className=" d-flex  align-items-center gap-3">
                        <div className="marketing_box max_w_131">
                          <h2 className=" mb-0 ff-inter fw-semibold  text-20 lh-30 text-black">
                            {" "}
                            Reserve
                          </h2>
                          <p className=" mb-0 ff-inter text-black  fw-semibold text-32 lh-30 mt-2 text-center">
                            5%
                          </p>
                        </div>
                        <div className="marketing_box max_w_152 ">
                          <h2 className=" mb-0 ff-inter text-nowrap fw-semibold  text-20 lh-30 text-black">
                            {" "}
                            Public Sale
                          </h2>
                          <p className=" mb-0 ff-inter text-black  fw-semibold text-32 lh-30 mt-2 text-center">
                            45%
                          </p>
                        </div>
                      </div>
                      <div className="marketing_box  mt-3">
                        <h2 className=" mb-0 text-center ff-inter fw-semibold  text-20 lh-30 text-black">
                          {" "}
                          Ecosystem Fund
                        </h2>
                        <p className=" mb-0 text-center text-black ff-inter  fw-semibold text-32 lh-30 mt-2 text-center">
                          10%
                        </p>
                      </div>
                      <div className=" d-flex d-sm-none  justify-content-center">
                        <div className="marketing_box  mt-3">
                          <h2 className=" mb-0 text-center ff-inter fw-semibold  text-20 lh-30 text-black">
                            {" "}
                            Team & Adisors
                          </h2>
                          <p className=" mb-0 text-center text-black ff-inter  fw-semibold text-32 lh-30 mt-2 text-center">
                            20%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" d-flex   justify-content-center">
                    <div className="marketing_box d-none d-sm-block  mt-3">
                      <h2 className=" mb-0 text-center ff-inter fw-semibold  text-20 lh-30 text-black">
                        {" "}
                        Team & Adisors
                      </h2>
                      <p className=" mb-0 text-center text-black ff-inter  fw-semibold text-32 lh-30 mt-2 text-center">
                        20%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img className=" w-100" src={bottom_layer} alt="upper_layer" />
        </div>
      </div>
    </>
  );
}

export default Tokenomics;

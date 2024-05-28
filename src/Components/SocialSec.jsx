import React from "react";
import { Twiiter, TeleGram, DexTools } from "../common/Icon";

function SocialSec() {
  return (
    <>
      <div className="bg_color_social_sec">
        <div className="container padding_Social">
          <div className="  d-flex flex-column flex-sm-row  flex-wrap  justify-content-center gap-3 justify-content-lg-between  ">
            <div className=" d-flex align-items-center gap-md-4 gap-2">
              <Twiiter />
              <h6 className=" mb-0 ff-inter fw-semibold text-48  lh-589 text-white">
                twitter
              </h6>
            </div>
            <div className=" d-flex align-items-center gap-md-4 gap-2">
              <TeleGram />
              <h6 className=" mb-0 ff-inter fw-semibold text-48  lh-589 text-white">
                Telegram
              </h6>
            </div>
            <div className=" d-flex align-items-center gap-md-4 gap-2">
              <DexTools />
              <h6 className=" mb-0 ff-inter fw-semibold text-48  lh-589 text-white">
                DEXTOOLS
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialSec;

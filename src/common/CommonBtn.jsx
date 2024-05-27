import React from "react";

function CommonBtn(props) {
  return (
    <button
      className={`${props.spacing} ${props.bgcolor} mb-0 ff-inter  fw-semibold text-16  lh-1936 common_btn`}
    >
      {props.text}
    </button>
  );
}

export default CommonBtn;

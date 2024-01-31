/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsMail1 = ({ color = "#233036", className }) => {
  return (
    <svg
      className={`icons-mail-1 ${className}`}
      fill="none"
      height="50"
      viewBox="0 0 50 50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.33301 12.5V17.0139L24.9997 26.0417L41.6663 17.0139V12.5H8.33301ZM8.33301 21.5278V39.5833H41.6663V21.5278L24.9997 30.5556L8.33301 21.5278Z"
        fill={color}
      />
    </svg>
  );
};

IconsMail1.propTypes = {
  color: PropTypes.string,
};

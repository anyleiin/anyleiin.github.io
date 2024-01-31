/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsArrowleft1 } from "../../icons/IconsArrowleft1";
import "./style.css";

export const Button = ({
  text = true,
  label = "Button Label",
  icon = true,
  size,
  type,
  state,
  className,
  divClassName,
}) => {
  return (
    <button className={`button ${type} ${state} ${size} ${className}`}>
      {text && <div className={`button-label ${divClassName}`}>{label}</div>}

      {(state === "hover" ||
        type === "secondary" ||
        (size === "large" && state === "default" && type === "primary")) && (
        <>
          <>
            {icon && (
              <IconsArrowleft1
                className={`${size === "regular" ? "icons-arrowleft" : "class"}`}
                color={state === "hover" ? "#D9D9D9" : "#292D32"}
              />
            )}
          </>
        </>
      )}

      {state === "default" && type === "primary" && size === "regular" && (
        <IconsArrowleft1 className="icons-arrowleft" color="#292D32" />
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.bool,
  size: PropTypes.oneOf(["large", "regular"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  state: PropTypes.oneOf(["hover", "default"]),
};

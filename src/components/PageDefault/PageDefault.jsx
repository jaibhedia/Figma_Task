/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PageDefault = ({ className, text = "1" }) => {
  return (
    <div className={`page-default ${className}`}>
      <div className="div-14">
        <div className="num-2">{text}</div>
      </div>
    </div>
  );
};

PageDefault.propTypes = {
  text: PropTypes.string,
};

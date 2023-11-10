/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IcCaratLeft3 } from "../../icons/IcCaratLeft3";
import "./style.css";

export const IcCaratRight = ({ className }) => {
  return (
    <div className={`ic-carat-right ${className}`}>
      <div className="ic-carat-left-wrapper">
        <IcCaratLeft3 className="ic-carat-left-3" />
      </div>
    </div>
  );
};

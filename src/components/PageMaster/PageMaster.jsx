/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IcCaratLeft } from "../IcCaratLeft";
import "./style.css";

export const PageMaster = ({ className }) => {
  return (
    <div className={`page-master ${className}`}>
      <IcCaratLeft className="ic-carat-left-instance" />
    </div>
  );
};

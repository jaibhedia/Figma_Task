/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IcCaratRight } from "../IcCaratRight";
import { PageActive } from "../PageActive";
import { PageDefault } from "../PageDefault";
import { PageDisabled } from "../PageDisabled";
import "./style.css";

export const Pagination = ({ className }) => {
  return (
    <div className={`pagination ${className}`}>
      <PageDisabled className="design-component-instance-node" />
      <PageActive
        className="design-component-instance-node"
        numClassName="page-active-2"
        pageActiveClassName="page-active-instance"
      />
      <PageDefault className="design-component-instance-node" text="2" />
      <PageDefault className="design-component-instance-node" text="..." />
      <PageDefault className="design-component-instance-node" text="9" />
      <PageDefault className="design-component-instance-node" text="10" />
      <div className="page-master-2">
        <IcCaratRight className="ic-carat-right-instance" />
      </div>
    </div>
  );
};

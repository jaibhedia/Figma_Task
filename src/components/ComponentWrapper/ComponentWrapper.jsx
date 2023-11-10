/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ComponentWrapper = ({ className }) => {
  return (
    <div className={`component-wrapper ${className}`}>
      <div className="overlap-4">
        <img className="tech-life" alt="Tech life" src="/img/tech-life-communication.png" />
        <div className="group-14">
          <div className="group-15">
            <div className="frame-wrapper">
              <div className="frame-2">
                <img className="ic-sharp-person-add" alt="Ic sharp person add" src="/img/ic-sharp-person-add-alt.svg" />
                <div className="text-wrapper-8">Add Consumers</div>
              </div>
            </div>
            <div className="text-wrapper-9">Actions</div>
          </div>
          <div className="consumer-manage">Consumer &gt; Manage Consumers</div>
        </div>
      </div>
      <div className="overlap-5">
        <div className="group-16">
          <div className="group-17">
            <div className="group-18">
              <p className="element-KYC-approval">
                <span className="span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="text-wrapper-10">276</span>
                <span className="span"> KYC approval pending</span>
              </p>
              <div className="frame-3">
                <div className="frame-4">
                  <div className="text-wrapper-11">View List</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-19">
            <div className="overlap-group-5">
              <div className="overlap-6">
                <img className="carbon-warning" alt="Carbon warning" src="/img/carbon-warning-filled.svg" />
                <p className="element-high-risk">
                  <span className="span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                  <span className="text-wrapper-10">182</span>
                  <span className="span"> high risk consumers</span>
                </p>
              </div>
              <div className="frame-5">
                <div className="frame-4">
                  <div className="text-wrapper-11">View List</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-20">
            <div className="overlap-7">
              <p className="element-tickets-open">
                <span className="span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="text-wrapper-10">32</span>
                <span className="span"> tickets open</span>
              </p>
              <div className="frame-5">
                <div className="frame-4">
                  <div className="text-wrapper-11">View List</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="group-21" alt="Group" src="/img/group-1000003244.png" />
      </div>
    </div>
  );
};

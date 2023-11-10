/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Group = ({ text = "Business", text1 = "3" }) => {
  return (
    <div className="group">
      <div className="text-wrapper-18">Raghuvendra Raga</div>
      <div className="text-wrapper-19">9876543210@trucard</div>
      <div className="frame-6">
        <div className="text-wrapper-20">Done</div>
      </div>
      <div className="div-11">
        <div className="overlap-group-wrapper-2">
          <div className="overlap-group-6">
            <div className="text-wrapper-21">Arun Jha</div>
            <div className="text-wrapper-22">B2B Field Executive</div>
          </div>
        </div>
        <div className="overlap-wrapper-2">
          <div className="overlap-8">
            <div className="text-wrapper-21">Anika Singh</div>
            <div className="text-wrapper-22">Associate</div>
          </div>
        </div>
        <img className="arrow" alt="Arrow" src="/img/arrow-1-1.svg" />
      </div>
      <div className="div-12">
        <div className="text-wrapper-23">₹35,342</div>
        <div className="text-wrapper-24">₹35,342</div>
        <div className="frame-7">
          <div className="text-wrapper-25">50.54g</div>
        </div>
        <div className="frame-8">
          <div className="text-wrapper-26">34.2g</div>
        </div>
        <div className="frame-9">
          <div className="text-wrapper-27">₹242.5</div>
        </div>
      </div>
      <div className="text-wrapper-28">South</div>
      <div className="business">{text}</div>
      <div className="element-wrapper">
        <div className="element">{text1}</div>
      </div>
    </div>
  );
};

Group.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};

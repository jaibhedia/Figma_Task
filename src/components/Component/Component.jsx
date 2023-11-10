/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({
  className,
  search = "/img/search-1.svg",
  ellipse = "/img/ellipse-261.svg",
  phTrendUpDuotone = "/img/ph-trend-up-duotone.svg",
  img = "/img/ph-trend-up-duotone-1.svg",
  line = "/img/line-1.svg",
  emojioneFlagFor = "/img/emojione-flag-for-india.svg",
  healthiconsMoney = "/img/healthicons-money-bag-outline.svg",
}) => {
  return (
    <div className={`component ${className}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            <img className="search" alt="Search" src={search} />
          </div>
          <div className="text-wrapper">Search (Eg: Rewards)</div>
        </div>
      </div>
      <div className="div">
        <div className="rectangle" />
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="rectangle-2" />
            <div className="div-wrapper">
              <div className="overlap-group-2">
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-260.png" />
                <img className="img" alt="Ellipse" src={ellipse} />
              </div>
            </div>
            <img className="vector" alt="Vector" src="/img/vector-647.svg" />
          </div>
        </div>
        <div className="group-2">
          <div className="overlap-3">
            <div className="rectangle-3" />
            <div className="text-wrapper-2">Gold</div>
            <div className="text-wrapper-3">Buy:</div>
            <div className="group-3">
              <div className="text-wrapper-4">₹7,390.00</div>
              <img className="ph-trend-up-duotone" alt="Ph trend up duotone" src={phTrendUpDuotone} />
            </div>
            <div className="text-wrapper-5">Sell:</div>
            <div className="group-4">
              <div className="text-wrapper-4">₹7,090.00</div>
              <img className="ph-trend-up-duotone" alt="Ph trend up duotone" src={img} />
            </div>
            <div className="group-5">
              <div className="group-6">
                <div className="overlap-group-3">
                  <img className="line" alt="Line" src={line} />
                  <img className="group-7" alt="Group" src="/img/group-1000002754.png" />
                </div>
              </div>
              <div className="text-wrapper-6">+0.34%</div>
            </div>
            <div className="text-wrapper-7">IN</div>
          </div>
        </div>
        <img className="emojione-flag-for" alt="Emojione flag for" src={emojioneFlagFor} />
        <img className="vector-2" alt="Vector" src="/img/vector-648.svg" />
      </div>
      <div className="group-8">
        <div className="group-9">
          <div className="group-10">
            <div className="overlap-group-4">
              <div className="notification">
                <img className="group-11" alt="Group" src="/img/group-3.png" />
                <img className="fill" alt="Fill" src="/img/fill-4.svg" />
              </div>
              <img className="vector-3" alt="Vector" src="/img/vector.svg" />
            </div>
          </div>
          <img className="group-12" alt="Group" src="/img/group-1000002748.png" />
          <img className="group-13" alt="Group" src="/img/group-1000002750.png" />
        </div>
        <img className="healthicons-money" alt="Healthicons money" src={healthiconsMoney} />
      </div>
    </div>
  );
};

Component.propTypes = {
  search: PropTypes.string,
  ellipse: PropTypes.string,
  phTrendUpDuotone: PropTypes.string,
  img: PropTypes.string,
  line: PropTypes.string,
  emojioneFlagFor: PropTypes.string,
  healthiconsMoney: PropTypes.string,
};

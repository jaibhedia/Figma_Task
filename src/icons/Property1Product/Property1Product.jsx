/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Property1Product = ({ className }) => {
  return (
    <svg
      className={`property-1-product ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path className="path" d="M3 9H21" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path className="path" d="M3 15H21" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path className="path" d="M12 3V21" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

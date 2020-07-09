import React from "react";

const SVGComponent = (props) => (
  <svg
    className="male-svg"
    viewBox="0 0 95.8 95.8"
    width="1em"
    height="1em"
    fill="#e70052"
    stroke="#e60055"
    {...props}
  >
    <title>{"male-icon"}</title>
    <path className="body" d="M88,48.21a40,40,0,1,1-40-40,40,40,0,0,1,40,40Z" />
    <path
      className="eyes"
      d="M36.57,37.6A3.6,3.6,0,1,1,33,34a3.6,3.6,0,0,1,3.6,3.6m30.6,0a3.6,3.6,0,1,1-3.6-3.6,3.6,3.6,0,0,1,3.6,3.6"
    />
    <path className="mouth mouth--regular" d="M66.55,64.67H28.75" />
    <path
      className="mouth mouth--semi-sad"
      d="M66.55,64.67c-4.45-2.75-11.26-4.51-18.9-4.51s-14.45,1.76-18.9,4.51"
    />
    <path className="mouth mouth--sad mouth--active" d="M66.55,64.67a24.29,24.29,0,0,0-37.8,0" />
    <path
      className="mouth mouth--semi-happy"
      d="M67.18,57.37c-4.46,2.75-11.27,4.52-18.91,4.52s-14.45-1.77-18.9-4.52"
    />
    <path className="mouth mouth--happy " d="M67.18,57.37a24.3,24.3,0,0,1-37.81,0" />
  </svg>
);

export default SVGComponent;

import React from "react";

const SVGIcon = ({ width, height, viewBox, xlinkHref, className = "" }) => {
  return (
    <span className={`mx-2 ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <use xlinkHref={xlinkHref} />
      </svg>
    </span>
  );
};

export default SVGIcon;

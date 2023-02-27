import React from "react";

const Loader = ({ size, color }) => {
  let styles = "";

  switch (size) {
    case "sm":
      styles = "lds-ellipsis_small";
      break;
    case "lg":
      styles = "lds-ellipsis";
      break;
    default:
      styles = "lds-ellipsis";
  }
  const colors = color === "white" ? "lds-ellipsis_white" : "";

  return (
    <div className={[styles, colors].join(" ")}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;

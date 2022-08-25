import React from "react";

const Button = ({ type, children, onClick }) => {
  let styles = "";

  switch (type) {
    case "btnModalGrey":
      styles = "btnModalGrey";
      break;
    case "btnFooter":
      styles = "btnFooter";
      break;
    default:
      styles = "btnDefault";
  }
  return (
    <div onClick={onClick} className={`btn ${styles} `}>
      {children}
    </div>
  );
};

export default Button;

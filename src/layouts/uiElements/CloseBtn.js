import React from "react";

const CloseBtn = ({ clickHandler }) => {
  return (
    <div className="closeBtn" onClick={clickHandler}>
      <div className="close-button">
        <div className="in">
          <div className="close-button-block"></div>
          <div className="close-button-block"></div>
        </div>
        <div className="out">
          <div className="close-button-block"></div>
          <div className="close-button-block"></div>
        </div>
      </div>
    </div>
  );
};

export default CloseBtn;

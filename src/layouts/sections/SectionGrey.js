import React from "react";
import "../../App.css";


const SectionGrey = ({ children}) => {
    return (
        <div className="section grey__section">
          <div className="section__container">{children}</div>
        </div>
      );
};

export default SectionGrey;
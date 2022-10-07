import React from "react";
import NavBar from "../../components/NavBar";

const MainTop = () => {
  return (
    <section className="section mainTop">
      <div className="mainTop__Wrap">
        <NavBar />
        <div className="sectionWrap sectionWrap_noFlex">
          <div className="mainTop__blue">
            <div className="mainTop__title">Invest deal-by-deal together with experienced VCs</div>
            <div className="mainTop__blue__bot">
              <div className="mainTop__becomeBtn">Become a member</div>
              <div className="mainTop__AboutBtn">About membership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTop;

import React, { useEffect, useState } from "react";

const MainTop = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  console.log(isMobile);
  return (
    <section className="section mainTop" autoPlay loop muted>
      {!isMobile ? (
        <video className="videoMain" autoPlay loop muted>
          <source src="img/videoBg.mp4" type="video/mp4" />
        </video>
      ) : (
        <img className="mobileImgMain" src="img/mobileMain.jpg" alt="MobileImage" />
      )}
      <div className="mainTop__Wrap">
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

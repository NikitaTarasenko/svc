import React from "react";
import TextBG from "../uiElements/TextBG";

const WhatIsSI = () => {
  return (
    <div className="sectionWrap">
    <section className="section sectionWisinc ">
      <div className="secTitle">What is Statup.Inc?</div>
      <div className="wisinc">
        <div className="wisinc__left">
          <div className="wisinc__left__text">
            <TextBG>Startup.Inc</TextBG> is our investment platform with a personal investor account, created for our club members
          </div>
          <div className="wisinc__left__flex">
            <div className="wisinc__left__flex__block">
              <div className="wisinc__left__flex__block__title">Invest in few clicks</div>
              <div className="wisinc__left__flex__block__text">
                Choose the deal, sign documents online and get an invoice.
              </div>
            </div>

            <div className="wisinc__left__flex__block">
              <div className="wisinc__left__flex__block__title">News and club events</div>
              <div className="wisinc__left__flex__block__text">
                Regular news on your investment portfolio and all club events are gathered there.
              </div>
            </div>

            <div className="wisinc__left__flex__block">
              <div className="wisinc__left__flex__block__title">Investment portfolio</div>
              <div className="wisinc__left__flex__block__text">
                Your investment portfolio is sorted with detailed descriptions of all your startups and documents.
              </div>
            </div>

            <div className="wisinc__left__flex__block">
              <div className="wisinc__left__flex__block__title">Secured and safe</div>
              <div className="wisinc__left__flex__block__text">
                The platform is protected from unauthorized changes thanks to blockchain technology.
              </div>
            </div>
          </div>
        </div>
        <div className="wisinc__right">
          <img src="img/menuImg.png" alt="img..." />
        </div>
      </div>
    </section>
    </div>
  );
};

export default WhatIsSI;

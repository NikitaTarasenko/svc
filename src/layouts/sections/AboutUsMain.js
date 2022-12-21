import React from "react";
import VerySmallArrowDown from "../svgs/VerySmallArrowDown";

const AboutUsMain = () => {
  return (
    <div>
      <section className="section secAboutUs secAboutUs_config">
        <div className="sectionWrap">
          <div className="secAboutUs__left">
            <div className="h4_secitonTitle">About us</div>
            <div className="secAboutUs__left__text">
              <p>
               
                <span>SiliconValley Club</span> was started in 2020.
              </p>
              <p>
                In 2021 we have reached a very important stage and invested in 28 startups overall. It was the year of
                our first US exit with <a href="/">Volumetric</a> startup.
              </p>
              <p>We plan to invest in at least 25 more startups this year.</p>
            </div>

         
          </div>
          <div className="secAboutUs__right">
            <div className="secAboutUs__right__trac">
              <VerySmallArrowDown /> Our traction
            </div>

            <div className="secAboutUs__right__flex">
              <div className="secAboutUs__right__item">
                <div className="secAboutUs__right__item__count">$5mln</div>
                <div className="secAboutUs__right__item__desrc">invested</div>
              </div>

              <div className="secAboutUs__right__item">
                <div className="secAboutUs__right__item__count">28</div>
                <div className="secAboutUs__right__item__desrc">startups</div>
              </div>

              <div className="secAboutUs__right__item">
                <div className="secAboutUs__right__item__count">150</div>
                <div className="secAboutUs__right__item__desrc">accredited investors</div>
              </div>

              <div className="secAboutUs__right__item">
                <div className="secAboutUs__right__item__count">2.87x</div>
                <div className="secAboutUs__right__item__desrc">current multiplier<div className="textStar">*</div></div>
              </div>
            </div>

            <div className="displayFlexBlock aboutUs_startext">
              <div className="textStar">*</div>
              <div className="section__bottom__smallText">Full exit opportunities 32x ($400mln)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsMain;

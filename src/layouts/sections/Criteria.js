import React from "react";
import Globe from "../svgs/Globe";
import Money from "../svgs/Money";
import Sun from "../svgs/Sun";
import Umbrella from "../svgs/Umbrella";
import Uniq from "../svgs/Uniq";
import VerySmallArrowDown from "../svgs/VerySmallArrowDown";

const Criteria = () => {
  return (
    <div className="section section__criteria">
      <div className="h4_secitonTitle">Our investment criteria</div>
      <div className="displayFlexBlock">
        <div className="section__criteria__left">
          <div className="section__criteria__left__text">
            We are looking for startups with the potential to grow to <span>Unicorn</span> concentrating our efforts on
            startups that are based in Silicon Valley or going to relocate to <span>Silicon Valley</span> or other parts
            of the United States.
          </div>
          <div className="section__criteria__fEnd">
            <div>
              <div className="secAboutUs__right__trac">
                <VerySmallArrowDown /> Our asessment
              </div>
              <div className="section__criteria__fEnd__text">
                The assessment is carried out according to hundreds of criteria that are individual for each project:
                financial performance, business model, revenue, competitors, and others.
              </div>
            </div>
          </div>

          <a href="/" className="section__criteria__btn">
            Apply as startup
          </a>
        </div>
        <div className="section__criteria__right">
            <div className="section__criteria__right__item">
                <Globe/>
                <span>Located in the US or Europe</span>
            </div>
            <div className="section__criteria__right__item">
                <Sun/>
                <span>Registration in the US</span>
            </div>
            <div className="section__criteria__right__item">
                <Uniq/>
                <span>Unique technology</span>
            </div>
            <div className="section__criteria__right__item">
                <Money/>
                <span>$100k+ profit per year</span>
            </div>
            <div className="section__criteria__right__item">
                <Umbrella/>
                <span>Invested by large venture funds or capitalists</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria;

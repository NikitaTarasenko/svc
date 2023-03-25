import React from "react";
import Done from "../svgs/Done";


const Criteria = () => {
  return (
    <div className="section section__criteria">
      <div className="sectionWrap sectionWrap_noFlex">
        <div className="displayFlexBlock">
          <div className="section__criteria__left">
            <div className="h4_secitonTitle">Our criteria</div>
            <div className="section__criteria_smallTitle">for investing</div>
            <div className="section__criteria__left__text">
              We are investing in startups with the potential to grow to
              <span>
                Unicorn
                <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.3067 30.5L16.3933 25.0647C15.9688 24.2727 16.7231 23.3662 17.5791 23.6398L29.0767 27.3137C29.9779 27.6017 30.9548 27.1926 31.382 26.3485V26.3485C31.7521 25.617 31.6188 24.7314 31.0498 24.1414L22.9325 15.7239L32.0001 1.5L17.9456 11.694C9.00012 11 2.00012 15.7239 2.00012 27.8134"
                    stroke="#252627"
                    strokeWidth="3.5"
                  />
                </svg>
              </span>
              and focusing our efforts on teams that are based in
              <span>
                Silicon Valley
                <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 19.2216L34 19.2216" stroke="#252627" strokeWidth="3.5" />
                  <path d="M17 28L17 4.23399e-07" stroke="#252627" strokeWidth="3.5" />
                  <path d="M14 0C14 7.82216 7.73198 14.1633 0 14.1633" stroke="#252627" strokeWidth="3.5" />
                  <path d="M20 0C20 7.82216 26.268 14.1633 34 14.1633" stroke="#252627" strokeWidth="3.5" />
                </svg>
              </span>
              or going to relocate to Silicon Valley or other parts of the United States.
            </div>
          </div>
          <div className="section__criteria__right">
            <div className="section__criteria__right__item">
              <div className="section__criteria__right__item__circle">
                {" "}
                <Done />
              </div>
              <span>Geographically agnostic</span>
            </div>
            <div className="section__criteria__right__item">
              <div className="section__criteria__right__item__circle">
                {" "}
                <Done />
              </div>
              <span>Registration in the US</span>
            </div>
            <div className="section__criteria__right__item">
              <div className="section__criteria__right__item__circle">
                {" "}
                <Done />
              </div>
              <span>Unique technology</span>
            </div>
            <div className="section__criteria__right__item">
              <div className="section__criteria__right__item__circle">
                {" "}
                <Done />
              </div>
              <span>$1mln revenue per year</span>
            </div>
            <div className="section__criteria__right__item">
              <div className="section__criteria__right__item__circle">
                {" "}
                <Done />
              </div>
              <span>Invested by experienced venture funds or capitalists</span>
            </div>
          </div>
        </div>
        <a href="/" className="section__criteria__btn">
          Apply as startup
        </a>
      </div>
    </div>
  );
};

export default Criteria;

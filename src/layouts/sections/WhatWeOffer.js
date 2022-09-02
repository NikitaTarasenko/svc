import React from "react";
import ArrowSmallRight from "../svgs/ArrowSmallRight";
import ArrowUp from "../svgs/ArrowUp";

const WhatWeOffer = () => {
  return (
    <div>
      <div className="section grey__section">
        <div className="offerSection__container">
          <div className="offer__title">The easiest way to discover promising companies and exclusive deals.</div>
          <div className="arrowDown">
            <ArrowUp />
          </div>
          <div className="offerBlock">
            <div className="offerBlock__topRow">
              <div className="offerBlock__topRow__left">What we offer?</div>
              <div className="offerBlock__topRow__right">
                Let's join forces to invest in exclusive deals backed up by lead vc on a deal-by-deal basis
              </div>
            </div>
            <div className="offerBlock__bottomRow">
              <div className="offerBlock__bottomRow__left">
                <div className="offerBlock__bottomRow__left__block">
                  <div className="offerBlock__bottomRow__left__head">
                    <div className="offerBlock__bottomRow__left__head__title">FAQs</div>
                    <ArrowSmallRight />
                  </div>
                  <div className="offerBlock__bottomRow__left__text">Got questions? We've got answers.</div>
                </div>
              </div>
              <div className="offerBlock__bottomRow__right">
                <div className="offerBlock__bottomRow__right__block">
                  <div className="offerBlock__bottomRow__right__block__title">Invest priority</div>
                  <div className="offerBlock__bottomRow__right__block__text">
                    As a member you will get a priority participation in the current club deals
                  </div>
                </div>

                <div className="offerBlock__bottomRow__right__block">
                  <div className="offerBlock__bottomRow__right__block__title">Startups database</div>
                  <div className="offerBlock__bottomRow__right__block__text">
                    Free access to 5M+ database of startups
                  </div>
                </div>

                <div className="offerBlock__bottomRow__right__block">
                  <div className="offerBlock__bottomRow__right__block__title">Meetups access</div>
                  <div className="offerBlock__bottomRow__right__block__text">
                    Free access to our Unicorn.Events and club meetings
                  </div>
                </div>

                <div className="offerBlock__bottomRow__right__block">
                  <div className="offerBlock__bottomRow__right__block__title">Personal manager</div>
                  <div className="offerBlock__bottomRow__right__block__text">
                    Personal manager accompanying at all stages of cooperation
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="howToJ">How to join us?</div>
          <div className="stepStep">The step-by-step guide</div>

          <div className="steps">
            <div className="step__block">
              <div className="step__block__count">1</div>
              <div className="step__block__text">
                <div className="step__block__text__title">Create account</div>
                <p>
                  You will be redirected to our <span>Startup.Inc</span> platform. You will fill out the online KYC form (as an
                  entity or private investor).
                </p>
                <p>
                  For our <span>premium membership</span> our manager will contact you.
                </p>
              </div>
            </div>

            <div className="step__block">
              <div className="step__block__count">2</div>
              <div className="step__block__text">
                <div className="step__block__text__title">Choose deal to invest</div>
              <p>
                After creating account you will get access to our club's current deals and decide on an investment
                amount from $5,000 to $250,000 at your discretion.
              </p>
              </div>
            </div>

            <div className="step__block">
              <div className="step__block__count">3</div>
              <div className="step__block__text">
                <div className="step__block__text__title">Sign documents online</div>
              <p>
                Sign 3 documents online: Operating Agreement, Sophisticated Investor and KYC. After that money will be
                sent to the fund account.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

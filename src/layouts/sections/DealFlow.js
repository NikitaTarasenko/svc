import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DFlow1 from "../svgs/DFlow1";
import DFlow2 from "../svgs/DFlow2";
import DFlow3 from "../svgs/DFlow3";

const DealFlow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const boxes = gsap.utils.toArray(".step");

    boxes.forEach((box, i) => {
      gsap.fromTo(
        box,
        {
          opacity: 0,
          scale: 0.2,
          y: -120,
          duration: 2.4,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2.4,
          ease: "none",
          scrollTrigger: {
            trigger: box,
            toggleActions: "play none none reverse",
            start: "top 90%",
            end: () => `+=${box.offsetHeight}`,
            scrub: true,
          
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="section grey__section ">
      <div className="offerSection__container">
        <div className="howToJ">Our dealflow process</div>
        <div className="stepStep">every month</div>

        <div className="steps">
          <div className="step step__block_dealFlow">
            <div className="step__left">
              <div className="step__block_dealFlow__count">1</div>
              <div className="step__block__text__deaflow">Sourcing deals</div>
              <div className="step__left__descr__deaflow">
                We receive over 1000 applications per month via our partners <span>Unicorn.Events</span> and
                <span>Startup.Network</span>.
              </div>
            </div>
            <div className="step__right">
              <div className="step__right__block">
                <div className="step__right__block__count">1000+</div>
                <div className="step__right__block__title">startup aplications</div>
                <div className="step__right__block__logo"><DFlow1/></div>
              </div>
            </div>
          </div>

          <div className="step step__block_dealFlow">
            <div className="step__left">
              <div className="step__block_dealFlow__count">2</div>
              <div className="step__block__text__deaflow">Evaluating and looking for the lead</div>
              <div className="step__left__descr__deaflow">
              At this step we screen deals and with the help of <span>VC.House</span> look for the lead investors.
              </div>
            </div>
            <div className="step__right">
              <div className="step__right__block">
                <div className="step__right__block__count">100</div>
                <div className="step__right__block__title">pre-selected deals</div>
                <div className="step__right__block__logo"><DFlow2/></div>
              </div>
            </div>
          </div>


          <div className="step step__block_dealFlow">
            <div className="step__left">
              <div className="step__block_dealFlow__count">3</div>
              <div className="step__block__text__deaflow">Investing with the club</div>
              <div className="step__left__descr__deaflow">
              We organize online meetings with the best and decide on investing with club members.
              </div>
            </div>
            <div className="step__right">
              <div className="step__right__block">
                <div className="step__right__block__count">2-4</div>
                <div className="step__right__block__title">invested deals per month</div>
                <div className="step__right__block__logo"><DFlow3/></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DealFlow;

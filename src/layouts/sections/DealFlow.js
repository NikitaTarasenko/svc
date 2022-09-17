import React, { useEffect, useState } from "react";
import SectionGrey from "./SectionGrey";
// import { CSSTransition } from "react-transition-group";

const DealFlow = () => {
  const [hoverItem, setHoverItem] = useState(0);
  // const [anime, setAnime] = useState(false);
  const [prevHoverItem, setPrevHoverItem] = useState(0);
  const [firsth0verDone, setFirsth0verDone] = useState(false);
  const [step, setStep] = useState([
    {
      id: 0,
      title: "Sourcing deals",
      text: `We receive over 1000 applications per month with the help of our partners <span>Unicorn.Events</span> and
    <span> Startup.Network</span>.`,
    },
    {
      id: 1,
      title: "Evaluation and looking for lead",
      text: `At this step we screen deals more precisely and with the help of <span>VC.House</span> look for the lead investors to back up the deal.`,
    },
    {
      id: 2,
      title: "Investing with the club",
      text: `We select the best and organize online meeting with founders and club memebers to decide on investing.`,
    },
  ]);
  const [currentStep, setCurrentStep] = useState(step[0])
 

  useEffect(() => {
    const hoverBG = document.querySelector(".dealFlow__left__item__hover");
    if (firsth0verDone) {
      hoverBG.classList.remove(`dealFlow__left__item__hover_${prevHoverItem}`);
    }

    hoverBG.classList.add(`dealFlow__left__item__hover_${hoverItem}`);
    const timeoutStepCount = setTimeout(()=>{
      setCurrentStep(step[hoverItem]);
    },500)
    setPrevHoverItem(hoverItem);
    setFirsth0verDone(true);
    // setAnime(false);

    return()=>{
      clearTimeout(timeoutStepCount);
    }
  }, [hoverItem]);

  return (
    <SectionGrey>
      <div className="section__title__regText">Our dealflow process</div>
      <div className="section__title__date section__title__date_low">every month</div>

      <div className="dealFlow">
        <div className="dealFlow__left">
          <div
            className="dealFlow__left__item"
            onMouseEnter={() => {
              setHoverItem(0);
              // setAnime(true);
            }}
          >
            <div className="dealFlow__left__count">1,500</div>
            <div className="dealFlow__left__descr">startup applications</div>
          </div>

          <div
            className="dealFlow__left__item"
            onMouseEnter={() => {
              setHoverItem(1);
              // setAnime(true);
            }}
          >
            <div className="dealFlow__left__count">200</div>
            <div className="dealFlow__left__descr">pre-selected deals</div>
          </div>

          <div
            className="dealFlow__left__item"
            onMouseEnter={() => {
              setHoverItem(2);
              // setAnime(true);
            }}
          >
            <div className="dealFlow__left__count">3-4</div>
            <div className="dealFlow__left__descr">invested deals</div>
          </div>

          <div className="dealFlow__left__item__hover"></div>
        </div>
        <div className="dealFlow__right">
          <>
            {/* <CSSTransition in={anime} classNames="dealFlowWhite" timeout={400}> */}
              <div className="dealFlow__right__count"> Step {currentStep.id + 1} </div>
            {/* </CSSTransition> */}
            {/* <CSSTransition in={anime} classNames="dealFlowWhite" timeout={600}> */}
              <div className="dealFlow__right__title">{currentStep.title}</div>
            {/* </CSSTransition> */}
            {/* <CSSTransition in={anime} classNames="dealFlowWhite" timeout={600}> */}
              <div className="dealFlow__right__text" dangerouslySetInnerHTML={{ __html: currentStep.text }}></div>
            {/* </CSSTransition> */}
          </>
        </div>
      </div>
    </SectionGrey>
  );
};

export default DealFlow;

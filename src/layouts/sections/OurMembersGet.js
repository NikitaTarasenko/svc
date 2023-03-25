import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import "swiper/css/bundle";
import SliderLeft from "../svgs/SliderLeft";
import SliderRight from "../svgs/SliderRight";
import { ourMembersData } from "../../utils/ourMembersData";

const OurMembersGet = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width <= 888);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (width <= 888) {
      setIsMobile(true);
      makeMembers();
    } else {
      setIsMobile(false);
      makeMembers();
    }
  }, [width]);

  useEffect(() => {
    makeMembers();
  }, []);

  function makeMembers() {

    gsap.registerPlugin(ScrollTrigger);
    if (!isMobile) {
      const thisAnimWrap = document.querySelector(".timeLineFull");
      const getToValue = (marginValue) =>
        -(thisAnimWrap.scrollWidth + (window.innerWidth / marginValue + 10) - window.innerWidth);

      const initGsap = (marginValue, start) => {
        gsap.fromTo(
          ".timeLineFull",
          {
            x: 0,
          },
          {
            x: () => getToValue(marginValue),
            ease: "slow",
            scrollTrigger: {
              trigger: ".section__OurMembersGet",
              start,
              id: "my-id",
              end: "150%",
              pin: ".timeLine",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
              // duration: 4,
              // anticipatePin: 1, // may help avoid jump
              scrub: 2.8,
              //markers: true,
            },
          }
        );
      };

      ScrollTrigger.matchMedia({
        // desktop
        "(min-height: 921px) and (min-width: 2400px)": function () {    
          // console.log(1);
          initGsap(1, "top 25%");
        },
        "(min-height: 921px) and (max-width: 2399px)": function () {
          // console.log(2);
          initGsap(2, "top 15%");
        },
        "(min-height: 791px) and (max-height: 920px)": function () {
          // console.log(2);
          initGsap(2, "top 15%");
        },
        "(min-height: 620px) and (max-height: 790px)": function () {
          // console.log(3);
          initGsap(3, "top 10%");
        },
        "(min-height: 500px) and (max-height: 619px)": function () {
          // console.log(4);
          initGsap(4, "top 7%");
        },
      });
    } else {
  
      const swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".SliderRight",
          prevEl: ".SliderLeft",
        },
        breakpoints: {
          900: {
            slidesPerView: 2,
            spaceBetweenSlides: 20,
          },
          800: {
            slidesPerView:2,
            spaceBetweenSlides: 20,
          },
          // when window width is <= 499px
           199: {
            slidesPerView: 1,
            spaceBetweenSlides: 20,
          },
        },
      });
    }
  }

  return (
    <>
      <section className="section section__OurMembersGet">
        <div className="sectionWrap sectionWrap_noFlex">
          <div className="timeLine">
            <div className="ourMembersGetTitleMob">
              <div className="h4_secitonTitle section__OurMembersGe__h4">Our members get</div>
              <div className="slider__nav">
                <SliderLeft />
                <SliderRight />
                <div className="slider__nav__bg"></div>
              </div>
            </div>

            <div className="timeLineFull to-right">
              {ourMembersData.map((card) => (
                <div className="timeLine__item" key={card.key}>
                  <div className="timeLine__item__title">{card.title}</div>
                  {card.logo}
                  <div className="timeLine__item__text">{card.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section__OurMembersGet2">
        <div className="  sectionWrap_noFlex">
          <div className="ourMembersGetTitleMob">
            <div className="h4_secitonTitle section__OurMembersGe__h4">Our members get</div>
            <div className="slider__nav">
              <SliderLeft />
              <SliderRight />
              <div className="slider__nav__bg"></div>
            </div>
          </div>
          <div className="slider__wraper">
            <div className="swiper mySwiper2">
              <div className="swiper-wrapper">
                {ourMembersData.map((card) => (
                  <div className="swiper-slide" key={card.key}>
                    <div className="timeLine__item">
                      <div className="timeLine__item__title">{card.title}</div>
                      {card.logo}
                      <div className="timeLine__item__text">{card.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMembersGet;



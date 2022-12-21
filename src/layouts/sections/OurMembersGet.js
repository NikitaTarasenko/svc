import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurMembersGet = () => {
  useEffect(() => {
    // const thisPinWrap = document.querySelector(".timeLine");
    const thisAnimWrap = document.querySelector(".timeLineFull");

    const getToValue = (marginValue) => -(thisAnimWrap.scrollWidth + (window.innerWidth / marginValue + 10) - window.innerWidth);
    console.log(window.innerWidth);
    gsap.registerPlugin(ScrollTrigger);

    const initGsap = (marginValue) => {
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
            start: "top 20%",
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
      "(min-width: 2400px)": function () {
        console.log(1);
        initGsap(1);
      },
      "(min-height: 921px) and (max-width: 2399px)": function () {
        console.log(2);
        initGsap(2);
      },
      "(min-height: 791px) and (max-height: 920px)": function () {
        console.log(3);
        initGsap(3);
      },
      "(min-height: 500px) and (max-height: 790px)": function () {
        console.log(10);
        initGsap(10);
      },
    });
  }, []);

  return (
    <section className="section section__OurMembersGet">
      <div className="sectionWrap sectionWrap_noFlex">
        <div className="timeLine">
          <div className="h4_secitonTitle section__OurMembersGe__h4">Our members get</div>
          <div className="timeLineFull to-right">
            <div className="timeLine__item">
              <div className="timeLine__item__title">Secured deals by known VCs</div>
              <div className="timeLine__item__text">
                We are investing together only with experienced VCs into the best startups that we are able to find via
                our ecosystem
              </div>
            </div>

            <div className="timeLine__item">
              <div className="timeLine__item__title">Nicely refined deal flow</div>
              <div className="timeLine__item__text">
                We receive over 1500 applications per month, from which our members are presented with the top 3-4 to
                evaluate. We make quite a job looking for the best.
              </div>
            </div>

            <div className="timeLine__item">
              <div className="timeLine__item__title">Global network of oportunities</div>
              <div className="timeLine__item__text">
                A community of like-minded people around the world in more than 22 countries. You will be learning from
                highly skilled and experienced individuals and forming lasting friendships.
              </div>
            </div>

            <div className="timeLine__item">
              <div className="timeLine__item__title">Education for conscious investment</div>
              <div className="timeLine__item__text">
                Formalized education sessions, on topics such as Term Sheets or Governance, are held periodically and
                guest speakers address the group monthly on trends driving our industry.
              </div>
            </div>

            <div className="timeLine__item">
              <div className="timeLine__item__title">Education for conscious investment</div>
              <div className="timeLine__item__text">
                Formalized education sessions, on topics such as Term Sheets or Governance, are held periodically and
                guest speakers address the group monthly on trends driving our industry.
              </div>
            </div>

            <div className="timeLine__item">
              <div className="timeLine__item__title">Education for conscious investment</div>
              <div className="timeLine__item__text">
                Formalized education sessions, on topics such as Term Sheets or Governance, are held periodically and
                guest speakers address the group monthly on trends driving our industry.
              </div>
            </div>

            <div className="timeLine__item">
              <div className="timeLine__item__title">Education for conscious investment</div>
              <div className="timeLine__item__text">
                Formalized education sessions, on topics such as Term Sheets or Governance, are held periodically and
                guest speakers address the group monthly on trends driving our industry.
              </div>
            </div>

            <div className="timeLine__item">
              <div className="timeLine__item__title">Education for conscious investment</div>
              <div className="timeLine__item__text">
                Formalized education sessions, on topics such as Term Sheets or Governance, are held periodically and
                guest speakers address the group monthly on trends driving our industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMembersGet;

// const arrayItems = document.querySelectorAll(".timeLine__item");
// const lenthOfContainer = document.querySelector(".timeLine").clientWidth;
// const fullWidthOfTimeLine = 5 * (arrayItems[0].clientWidth + 36); //5 - количество блоков *...
// const transformIt = fullWidthOfTimeLine - lenthOfContainer;
// console.log(arrayItems);
// console.log(fullWidthOfTimeLine);
// console.log(transformIt);
// ScrollTrigger.matchMedia({
//   // desktop
//   "(min-height: 1005px)": function () {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".section__OurMembersGet",

//         duration: 2.4,
//         start: "top 21%",
//         end: () => `+=${arrayItems[0].offsetHeight - 150}`,
//         toggleActions: "play none none reverse",
//         scrub:3,

//       },
//     });
//     tl.fromTo(".timeLine__item", { x: 0 },
//      { x: -transformIt }, 0);
//   },
//   // mobile
//   "(max-height: 1004px) and (min-height: 861px)": function () {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".section__OurMembersGet",

//         duration: 2.4,
//         start: "top 19%",
//         end: () => `+=${arrayItems[0].offsetHeight - 180}`,
//         toggleActions: "play none none reverse",
//         scrub:3,

//       },
//     });
//     tl.fromTo(".timeLine__item", { x: 0 },
//     { x: -transformIt }, 0);
//   },
//   // mobile
//   "(max-height:860px) and (min-height:721px)": function () {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".section__OurMembersGet",

//         duration: 2.4,
//         start: "top 5%",
//         end: () => `+=${arrayItems[0].offsetHeight - 230}`,
//         toggleActions: "play none none reverse",
//         scrub:3,

//       },
//     });
//     tl.fromTo(".timeLine__item", { x: 0 },
//     { x: -transformIt }, 0);
//   },
//   // mobile
//   "(max-height: 720px)": function () {
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".section__OurMembersGet",

//         duration: 2.4,
//         start: "top 10%",
//         end: () => `+=${arrayItems[0].offsetHeight - 230}`,
//         toggleActions: "play none none reverse",
//         scrub:3,

//       },
//     });
//     tl.fromTo(".timeLine__item", { x: 0 },
//     { x: -transformIt }, 0);
//   },

// });

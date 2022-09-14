import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurMembersGet = () => {
  useEffect(() => {
    const arrayItems = document.querySelectorAll(".timeLine__item");
    const lenthOfContainer = document.querySelector(".timeLine").clientWidth;
    const fullWidthOfTimeLine = 4 * (arrayItems[0].clientWidth + 46);
    const transformIt = fullWidthOfTimeLine - lenthOfContainer;
    console.log(arrayItems);
    console.log(fullWidthOfTimeLine);
   console.log(transformIt);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeLine__item",
         markers: true,
         duration: 2.4,
        start: "top 30%",
        end: ()=> `+=${arrayItems[0].offsetHeight - 50}`,
        toggleActions: "play none none reverse",
        scrub: 1,
        // pin: '.timeLine',
        // pinSpacing: false,
      },
    });

    tl.to('.timeLine__item', {x : -transformIt,})
  }, []);

  return (
    <section className="section section__OurMembersGet">
      <div className="h4_secitonTitle">Our members get</div>

      <div className="timeLine">
        <div className="timeLineFull">
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
{/* 
          <div className="timeLine__item">
            <div className="timeLine__item__title">Education for conscious investment</div>
            <div className="timeLine__item__text">
              Formalized education sessions, on topics such as Term Sheets or Governance, are held periodically and
              guest speakers address the group monthly on trends driving our industry.
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurMembersGet;

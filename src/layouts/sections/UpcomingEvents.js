import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowRight from "../svgs/ArrowRight";
import ArrowRR from "../svgs/ArrowRR";

const UpcomingEvents = () => {
  useEffect(() => {
    const arrayItems = document.querySelectorAll(".timeLineEvents__item");
    const lenthOfContainer = document.querySelector(".timeLineEvents").clientWidth;
    const fullWidthOfTimeLine = 5 * (arrayItems[0].clientWidth + 36); //5 - количество блоков *...
    const transformIt = fullWidthOfTimeLine - lenthOfContainer;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      // desktop
      "(min-height: 955px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".s__upcomingEvents",
            // markers: true,
            duration: 2.4,
            start: "top 25%",
            end: () => `+=${arrayItems[0].offsetHeight + 10}`,
            toggleActions: "play none none reverse",
            scrub: 3,
            // pin: '.timeLine',
            // pinSpacing: false,
          },
        });
        tl.fromTo(".timeLineEvents__item", { x: 0 }, { x: -transformIt }, 0);
      },
      // mobile
      "(max-height: 954px) and (min-height:850px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".s__upcomingEvents",
            //  markers: true,
            duration: 2.4,
            start: "top 15%",
            end: () => `+=${arrayItems[0].offsetHeight + 10}`,
            toggleActions: "play none none reverse",
            scrub: 2.4,
          },
        });

        tl.fromTo(".timeLineEvents__item", { x: 0 }, { x: -transformIt }, 0);
      },

      "(max-height: 849px) and (min-height:751px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".s__upcomingEvents__head",
            // markers: true,
            duration: 2.4,
            start: "top 15%",
            end: () => `+=${arrayItems[0].offsetHeight - 90}`,
            toggleActions: "play none none reverse",
            scrub: 2.4,
          },
        });

        tl.fromTo(".timeLineEvents__item", { x: 0 }, { x: -transformIt }, 0);
      },

      "(max-height: 750px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".s__upcomingEvents__head",
            // markers: true,
            duration: 2.4,
            start: "top 10%",
            end: () => `+=${arrayItems[0].offsetHeight - 150}`,
            toggleActions: "play none none reverse",
            scrub: 2.4,
          },
        });

        tl.fromTo(".timeLineEvents__item", { x: 0 }, { x: -transformIt }, 0);
      },
    });

    const arrayAnimeBlocks = document.querySelectorAll(".timeLineEvents__item__animeBlock");

    arrayItems.forEach((item, index) => {
      item.addEventListener(
        "mouseenter",
        (e) => {
          e.stopPropagation();
          arrayAnimeBlocks[index].classList.add("timeLineEvents__item__animeBlock_hovered");
        },
        false
      );

      item.addEventListener(
        "mouseleave",
        (e) => {
          e.stopPropagation();
          arrayAnimeBlocks[index].classList.remove("timeLineEvents__item__animeBlock_hovered");
        },
        false
      );
    });
  }, []);

  return (
    <section className="section s__upcomingEvents">
      <div className="s__upcomingEvents__head">
        <div className="h4_secitonTitle">Upcomming events</div>
        <a href="/" className="section__criteria__btn s__upcomingEvents_Btn">
          All events
          <ArrowRight />
        </a>
      </div>

      <div className="timeLineEvents">
        <div className="timeLineFullEvents">
          <div className="timeLineEvents__item">
            <div className="timeLineEvents__item__head">
              <div className="timeLineEvents__item__head__time">
                <div className="timeLineEvents__item__head__time__date">21.05</div>
                <div className="timeLineEvents__item__head__time__hours">5 pm GMT</div>
              </div>
              <div className="timeLineEvents__item__head__status">online</div>
            </div>

            <div className="timeLineEvents__item__title">Unicorn.Events Final Cup</div>
            <div className="timeLineEvents__item__descr">Free for memebers</div>

            <div className="timeLineEvents__item__animeBlock">
              <div className="timeLineEvents__item__btn">
                Event details
                <ArrowRR />
              </div>
              <div className="timeLineEvents__item__img">
                <img src="img/svsmini.png" alt="svs" />
              </div>
            </div>
          </div>

          <div className="timeLineEvents__item">
            <div className="timeLineEvents__item__head">
              <div className="timeLineEvents__item__head__time">
                <div className="timeLineEvents__item__head__time__date">29.05</div>
                <div className="timeLineEvents__item__head__time__hours">09 am GMT</div>
              </div>
              <div className="timeLineEvents__item__head__status">online</div>
            </div>

            <div className="timeLineEvents__item__title">Learn how to invest with Jiazi Guo</div>
            <div className="timeLineEvents__item__descr">Free, registration needed</div>

            <div className="timeLineEvents__item__animeBlock">
              <div className="timeLineEvents__item__btn">
                Event details
                <ArrowRR />
              </div>
              <div className="timeLineEvents__item__img">
                <img src="img/ev2.png" alt="svs" />
              </div>
            </div>
          </div>

          <div className="timeLineEvents__item">
            <div className="timeLineEvents__item__head">
              <div className="timeLineEvents__item__head__time">
                <div className="timeLineEvents__item__head__time__date">15.06</div>
                <div className="timeLineEvents__item__head__time__hours">01 pm GMT</div>
              </div>
              <div className="timeLineEvents__item__head__status">online</div>
            </div>

            <div className="timeLineEvents__item__title">Svsy.club online open day</div>
            <div className="timeLineEvents__item__descr">Free, registration needed</div>

            <div className="timeLineEvents__item__animeBlock">
              <div className="timeLineEvents__item__btn">
                Event details
                <ArrowRR />
              </div>
              <div className="timeLineEvents__item__img">
                <img src="img/svsmini.png" alt="svs" />
              </div>
            </div>
          </div>

          <div className="timeLineEvents__item">
            <div className="timeLineEvents__item__head">
              <div className="timeLineEvents__item__head__time">
                <div className="timeLineEvents__item__head__time__date">12.09</div>
                <div className="timeLineEvents__item__head__time__hours">01 pm GMT</div>
              </div>
              <div className="timeLineEvents__item__head__status">online</div>
            </div>

            <div className="timeLineEvents__item__title">Svsy.club meetup in Berlin</div>
            <div className="timeLineEvents__item__descr">Free, registration needed</div>

            <div className="timeLineEvents__item__animeBlock">
              <div className="timeLineEvents__item__btn">
                Event details
                <ArrowRR />
              </div>
              <div className="timeLineEvents__item__img">
                <img src="img/ev4.png" alt="svs" />
              </div>
            </div>
          </div>

          <div className="timeLineEvents__item">
            <div className="timeLineEvents__item__head">
              <div className="timeLineEvents__item__head__time">
                <div className="timeLineEvents__item__head__time__date">21.05</div>
                <div className="timeLineEvents__item__head__time__hours">5 pm GMT</div>
              </div>
              <div className="timeLineEvents__item__head__status">online</div>
            </div>

            <div className="timeLineEvents__item__title">Unicorn.Events Final Cup</div>
            <div className="timeLineEvents__item__descr">Free for memebers</div>

            <div className="timeLineEvents__item__animeBlock">
              <div className="timeLineEvents__item__btn">
                Event details
                <ArrowRR />
              </div>
              <div className="timeLineEvents__item__img">
                <img src="img/svsmini.png" alt="svs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

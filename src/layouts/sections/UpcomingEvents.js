import React, { useEffect } from "react";
import ArrowRR from "../svgs/ArrowRR";
import SliderLeft from "../svgs/SliderLeft";
import SliderRight from "../svgs/SliderRight";
import { UpcomEvData } from "../../utils/UpcomEvData";
import Swiper from "swiper";

const UpcomingEvents = () => {
  useEffect(() => {
    const arrayItems = document.querySelectorAll(".timeLineEvents__item");
    const arrayAnimeBlocks = document.querySelectorAll(".timeLineEvents__item__animeBlock");

    const swiper = new Swiper(".mySwiper3", {
      slidesPerView: 4,
      spaceBetween: 27,
      loop: false,
      navigation: {
        nextEl: ".SliderRight",
        prevEl: ".SliderLeft",
      },
      breakpoints: {
        1460: {
          slidesPerView: 4,
          spaceBetweenSlides: 27,
        },
        1160: {
          slidesPerView: 3,
          spaceBetweenSlides: 27,
        },
    
        790: {
          slidesPerView: 2,
          spaceBetweenSlides:27,
        },
        // when window width is <= 499px
        1: {
          slidesPerView: 1,
          spaceBetweenSlides: 20,
        },
      },
    });

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
    <div className="sectionWrap">
      <section className="section s__upcomingEvents">
        <div className="s__upcomingEvents__head">
          <div className="h4_secitonTitle">Upcomming events</div>

          <div className="slider__nav">
            <SliderLeft />
            <SliderRight />
            <div className="slider__nav__bg"></div>
          </div>
        </div>

        <div className="slider__wraper">
          <div className="swiper mySwiper3">
            <div className="swiper-wrapper">
              {UpcomEvData.map((card) => (
                <div className="swiper-slide" key={card.id}>
                  <div className="timeLineEvents__item">
                    <div className="timeLineEvents__item__head">
                      <div className="timeLineEvents__item__head__time">
                        <div className="timeLineEvents__item__head__time__date">{card.date}</div>
                        <div className="timeLineEvents__item__head__time__hours">{card.time}</div>
                      </div>
                      <div className="timeLineEvents__item__head__status">{card.status}</div>
                    </div>

                    <div className="timeLineEvents__item__type">{card.type}</div>
                    <div className="timeLineEvents__item__descr">{card.text}</div>

                    <div className="timeLineEvents__item__animeBlock">
                      <div className="timeLineEvents__item__btn">
                        Show details
                        <ArrowRR />
                      </div>
                      <div className="timeLineEvents__item__img">
                        <img src={card.img} alt="svs" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;

// const lenthOfContainer = document.querySelector(".timeLineEvents").clientWidth;
// const fullWidthOfTimeLine = 5 * (arrayItems[0].clientWidth + 36); //5 - количество блоков *...
// const transformIt = fullWidthOfTimeLine - lenthOfContainer;
// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.matchMedia({
//   // desktop
//   "(min-height: 955px)": function () {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".s__upcomingEvents",
//         // markers: true,
//         duration: 2.4,
//         start: "top 25%",
//         end: () => `+=${arrayItems[0].offsetHeight + 10}`,
//         toggleActions: "play none none reverse",
//         scrub: 3,
//         // pin: '.timeLine',
//         // pinSpacing: false,
//       },
//     });
//     tl.fromTo(".timeLineEvents__item", { x: 0 }, { x: -transformIt }, 0);
//   },
//   // mobile
//   "(max-height: 954px) and (min-height:850px)": function () {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".s__upcomingEvents",
//         //  markers: true,
//         duration: 2.4,
//         start: "top 15%",
//         end: () => `+=${arrayItems[0].offsetHeight + 10}`,
//         toggleActions: "play none none reverse",
//         scrub: 2.4,
//       },
//     });

//     tl.fromTo(".timeLineEvents__item", { x: 0 }, { x: -transformIt }, 0);
//   },

//   "(max-height: 849px) and (min-height:751px)": function () {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".s__upcomingEvents__head",
//         // markers: true,
//         duration: 2.4,
//         start: "top 15%",
//         end: () => `+=${arrayItems[0].offsetHeight - 90}`,
//         toggleActions: "play none none reverse",
//         scrub: 2.4,
//       },
//     });

//     tl.fromTo(".timeLineEvents__item", { x: 0 }, { x: -transformIt }, 0);
//   },

//   "(max-height: 750px)": function () {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".s__upcomingEvents__head",
//         // markers: true,
//         duration: 2.4,
//         start: "top 10%",
//         end: () => `+=${arrayItems[0].offsetHeight - 150}`,
//         toggleActions: "play none none reverse",
//         scrub: 2.4,
//       },
//     });

//     tl.fromTo(".timeLineEvents__item", { x: 0 }, { x: -transformIt }, 0);
//   },
// });

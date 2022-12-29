import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
// Import Swiper styles
import "swiper/css/bundle";
import SliderLeft from "../layouts/svgs/SliderLeft";
import SliderRight from "../layouts/svgs/SliderRight";

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView:6,
      spaceBetween: 67,
      loop: true,
      navigation: {
        nextEl: ".SliderRight",
        prevEl: ".SliderLeft",
      },
      breakpoints: {
        1460: {
          slidesPerView: 6,
          spaceBetweenSlides: 67,
        },
        1160: {
          slidesPerView: 4,
          spaceBetweenSlides: 67,
        },
        900: {
          slidesPerView: 3,
          spaceBetweenSlides: 77,
        },
        700: {
          slidesPerView: 2,
          spaceBetweenSlides: 77,
        },
        // when window width is <= 499px
        499: {
          slidesPerView: 1,
          spaceBetweenSlides: 50,
        },
      },
    });
  }, []);

  return (
    <section className="section section__slider">
      <div className="sectionWrap sectionWrap_noFlex">
        <div className="slider__top">
          <div>
            <h3>Co-investing together with</h3>
            <div className="slider__title">experienced tVCs and investors</div>
          </div>
          <div className="slider__nav">
            <SliderLeft />
            <SliderRight />
            <div className="slider__nav__bg"></div>
          </div>
        </div>

        <div className="slider__wraper">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="img/soft.svg" alt="Soft" />
              </div>
              <div className="swiper-slide">
                <img src="img/rock2.svg" alt="rock" />
              </div>
              <div className="swiper-slide">
                <img src="img/lux.svg" alt="lux" />
              </div>
              <div className="swiper-slide">
                <img src="img/tmt.svg" alt="tmt" />
              </div>
              <div className="swiper-slide">
                <img src="img/nvc.svg" alt="nvc" />
              </div>
            </div>
          </div>
          {/* <!-- Add Arrows --> */}
        </div>
      </div>
    </section>
  );
};

export default Slider;

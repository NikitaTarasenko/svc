import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
// Import Swiper styles
import "swiper/css/bundle";
import SliderLeft from "../layouts/svgs/SliderLeft";
import SliderRight from "../layouts/svgs/SliderRight";

const Slider = () => {
useEffect(() => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 67,
    // slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".SliderRight",
      prevEl: ".SliderLeft",
    },
  });
}, [])

  return (
    <section className="section section__slider">
      <h3>Co-investing together with</h3>
      <div className="slider__title">experienced tVCs and investors</div>

      <div className="slider__wraper">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="img/soft.svg" alt="Soft"/></div>
            <div className="swiper-slide"><img src="img/rock.svg" alt="rock"/></div>
            <div className="swiper-slide"><img src="img/lux.svg" alt="lux"/></div>
            <div className="swiper-slide"><img src="img/tmt.svg" alt="tmt"/></div>
            <div className="swiper-slide"><img src="img/nvc.svg" alt="nvc"/></div>
  
          </div>
        </div>
        {/* <!-- Add Arrows --> */}
        <SliderLeft/>
        <SliderRight/>
       
      </div>
    </section>
  );
};

export default Slider;
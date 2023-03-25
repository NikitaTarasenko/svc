import React, { useEffect } from "react";
import ArrowRR from "../svgs/ArrowRR";
import SliderLeft from "../svgs/SliderLeft";
import SliderRight from "../svgs/SliderRight";
import Swiper from "swiper";
import axios from "axios";
import { useState } from "react";
import Loader from "../uiElements/Loader";
 

const UpcomingEvents = () => {
 
  const [events, setEvents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNotLoadedImg, setNotLoadedImg] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      animationOnHover();
    }
  }, [events]);

  async function getData() {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      " Access-Control-Allow-Origin": "http://spr.sv.club"
    };

    try {
      const response = await axios.get("/rest.php?target=event", { headers });
      setEvents(response.data);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const mySwiper = new Swiper(".mySwiper3", {
      slidesPerView: 4,
      spaceBetween: 25,
      renderExternalUpdate: true,
      observer: true,
      observeParents: true,
      loop: false,
      navigation: {
        nextEl: ".SliderRight",
        prevEl: ".SliderLeft"
      },
      breakpoints: {
        1645: {
          slidesPerView: 4,
          spaceBetweenSlides: 27
        },
        1160: {
          slidesPerView: 3,
          spaceBetweenSlides: 25
        },

        790: {
          slidesPerView: 2,
          spaceBetweenSlides: 25
        },
        // when window width is <= 499px
        1: {
          slidesPerView: 1,
          spaceBetweenSlides: 20
        }
      }
    });
    mySwiper.update();
  }, []);

  const animationOnHover = () => {
    const arrayItems = document.querySelectorAll(".timeLineEvents__item");
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
  };
  const checkForLoader = (data, size) => {
    if (Boolean(data)) {
      return data;
    } else {
      return <Loader size={size} />;
    }
  };
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
              {Object.values(!isLoaded ? {} : events).map((card) => (
                <div className="swiper-slide" key={card.id}>
                  <div className="timeLineEvents__item">
                    <div className="timeLineEvents__item__head">
                      <div className="timeLineEvents__item__head__time">
                        <div className="timeLineEvents__item__head__time__date">{checkForLoader(card.date, "sm")}</div>
                        <div className="timeLineEvents__item__head__time__hours">{checkForLoader(card.time, "sm")}</div>
                      </div>
                      <div className="timeLineEvents__item__head__status">{card.status}</div>
                    </div>

                    <div className="timeLineEvents__item__type">{checkForLoader(card.type, "sm")}</div>
                    <div className="timeLineEvents__item__descr">{checkForLoader(card.text, "lg")}</div>

                    <div className="timeLineEvents__item__animeBlock">
                      <div
                        className="timeLineEvents__item__btn"
                        onClick={() => window.open(card.link_showDetails, "_blank")}
                      >
                        Show details
                        <ArrowRR />
                      </div>
                      <div className="timeLineEvents__item__img">
                        {!isNotLoadedImg ? (
                          <img
                            src={card.img}
                            alt="svs"
                            onLoad={() => setNotLoadedImg(false)}
                            onError={() => setNotLoadedImg(true)}
                          />
                        ) : (
                          <Loader size="lg"   />
                        )}
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

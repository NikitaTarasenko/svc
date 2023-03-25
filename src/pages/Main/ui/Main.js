/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import Container from "../../../layouts/Container";
import SectionGrey from "../../../layouts/sections/SectionGrey";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { toJS } from "mobx";
import Footer from "../../../components/Footer";
import OurMembersGet from "../../../layouts/sections/OurMembersGet";
import AboutUsMain from "../../../layouts/sections/AboutUsMain";
import Slider from "../../../components/Slider";
import Criteria from "../../../layouts/sections/Criteria";
import DealFlow from "../../../layouts/sections/DealFlow";
import UpcomingEvents from "../../../layouts/sections/UpcomingEvents";
import MainTop from "../../../layouts/sections/MainTop";
import NavBar from "../../../components/NavBar";
import axios from "axios";
import Loader from "../../../layouts/uiElements/Loader";

const Main = observer(() => {
  const { list } = useContext(Context);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState("");
  const [isSeenImg, setIsSeenImg] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [imgStyle, setImgStyle] = useState("");
  const [isNotLoadedImg, setNotLoadedImg] = useState(true);
 

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setImgStyle(isSeenImg ? "showImg" : "hideImg");
  }, [isSeenImg]);

  async function getData() {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      " Access-Control-Allow-Origin": "http://spr.sv.club"
    };

    try {
      const response = await axios.get("/rest.php?target=portfolio", { headers });
      list.setListData(response.data);
      setData(toJS(list.listData));

      if (toJS(list.listData)[0] !== null) {
        setIsLoading(false);
      }

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    if (!isLoading) {
      const links = document.querySelectorAll(".section__list__item");

      links.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          setIsSeenImg(true);
        });
        item.addEventListener("mouseleave", () => {
          setIsSeenImg(false);
          setCurrentImg("");
        });
      });
    }
  }, [isLoading]);

  useEffect(() => {
    if (currentImg !== "") {
      setNotLoadedImg(false);
    }  
  }, [currentImg]);

  const handleMouseOver = (data) => {
    setCurrentImg(data.hoverImg);
  };

  const openModal = () => {
    document.body.style.overflowY = "hidden";
    document.body.style.height = "100vh";
    setIsOpenModal(true);
  };

  const handleListClick = (index) => {
    openModal();
    list.setCurrentListItem(index);
  };

  const clickOutSide = () => {
    setIsOpenModal(false);
    document.body.style.overflowY = "scroll";
    document.body.style.height = "auto";
  };

  const checkForLoader = (data, size) => {
    if (Boolean(data)) {
      return data;
    } else {
      return <Loader size={size} />;
    }
  };

  return (
    <div className="zindexsht">
      <Container>
        <NavBar />
        <MainTop />
        <OurMembersGet />
        <AboutUsMain />

        <SectionGrey>
          <div className="sectionWrap sectionWrap_noFlex">
            <div className="section__title">
              <div className="section__title__regText">Our portfolio</div>
              <div className="section__title__date">2020-2023©</div>
            </div>

            <div className="section__list">
              {isLoading
                ? "Loading."
                : Object.keys(data).map((key, index) => (
                    <div
                      className={`section__list__item + ${
                        data.currentListItem === index && isOpenModal ? " section__list__item_selected" : ""
                      }`}
                      key={index}
                      onMouseOver={() => handleMouseOver(data[key])}
                      onClick={() => handleListClick(index)}
                    >
                      {checkForLoader(data[key].name, "sm")}.
                    </div>
                  ))}
              ..
            </div>
            <div className="displayFlexBlock">
              <div className="textStar">*</div>
              <div className="section__bottom__smallText">Exit</div>
            </div>
            <div className={`section__list__img ${imgStyle} `}>
              {!isNotLoadedImg ? (
                <img
                  src={currentImg}
                  alt="svs"
                  onLoad={() => setNotLoadedImg(false)}
                  onError={() => setNotLoadedImg(true)}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </SectionGrey>

        <Criteria />
        <Slider />
        <DealFlow />
        <UpcomingEvents />
        <Footer />
      </Container>

      <Modal isOpen={isOpenModal} clickOutSide={() => clickOutSide()} />
    </div>
  );
});

export default Main;

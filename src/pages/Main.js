/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Modal from "../components/Modal";
import Container from "../layouts/Container";
import SectionGrey from "../layouts/sections/SectionGrey";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { toJS } from "mobx";
import Footer from "../components/Footer";
import OurMembersGet from "../layouts/sections/OurMembersGet";
import AboutUsMain from "../layouts/sections/AboutUsMain";
import Slider from "../components/Slider";
import Criteria from "../layouts/sections/Criteria";
import DealFlow from "../layouts/sections/DealFlow";
import UpcomingEvents from "../layouts/sections/UpcomingEvents";
import MainTop from "../layouts/sections/MainTop";
import NavBar from "../components/NavBar";
import axios from "axios";

const Main = observer(() => {
  const { list } = useContext(Context);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState("");
  const [isSeenImg, setIsSeenImg] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  //  const [isClickedItem, setClickedItem] = useState(false);
  const imgStyle = isSeenImg ? "showImg" : "hideImg";

  useEffect(() => {
    getData();
  }, []);

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
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleMouseOver = (data) => {
    setCurrentImg(data.hoverImg);
    setIsSeenImg(true);
  };

  const handleMouseOut = () => {
    setIsSeenImg(false);
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
              <div className="section__title__date">2021-2022©</div>
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
                      onMouseOut={handleMouseOut}
                      onClick={() => handleListClick(index)}
                    >
                      {data[key].name}.
                    </div>
                  ))}
              ..
            </div>
            <div className="displayFlexBlock">
              <div className="textStar">*</div>
              <div className="section__bottom__smallText">Exit</div>
            </div>
            <div
              className={`section__list__img ${imgStyle} `}
              style={currentImg ? { background: `url(${currentImg}) no-repeat center center` } : {}}
            ></div>
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

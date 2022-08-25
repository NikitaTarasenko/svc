/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import Container from "../layouts/Container";
import SectionGrey from "../layouts/sections/SectionGrey";
import { observer } from "mobx-react-lite";
import {Context} from "../index"
import { toJS } from "mobx";


const Main = observer(() => {
  const {list} = useContext(Context);

  const [data, setData] = useState([])
  const [currentImg, setCurrentImg] = useState("");
  const [isSeenImg, setIsSeenImg] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const imgStyle = isSeenImg ? "showImg" : "hideImg";

  useEffect(()=>{
   
    setData(toJS(list.listData))
    // console.log(toJS(list.listData))
  
  },[])

  
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
    list.setCurrentListItem(index)
     console.log(toJS(list.currentListItem))
  };

  const clickOutSide = () => {
    setIsOpenModal(false);
    document.body.style.overflowY = "scroll";
    document.body.style.height = "auto";
  };

  return (
    <div className="zindexshit">
      <Container>
        <NavBar />
        <SectionGrey>
          <div className="section__title">
            <div className="section__title__regText">Our portfolio</div>
            <div className="section__title__date">2021-2022©</div>
          </div>

          <div className="section__list">
            {Object.keys(data).map((key, index) => (
              <div
                className="section__list__item"
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
        </SectionGrey>
      </Container>

      <Modal isOpen={isOpenModal} clickOutSide={() => clickOutSide()} />
    </div>
  );
});

export default Main;

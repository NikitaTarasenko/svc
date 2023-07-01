import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import Button from "../layouts/uiElements/Button";
import Tag from "../layouts/uiElements/Tag";
import { Context } from "../index";
import { toJS } from "mobx";
import CloseBtn from "../layouts/uiElements/CloseBtn";
import Loader from "../layouts/uiElements/Loader";
import db from "../utils/db.json";

const Modal = observer(({ isOpen, clickOutSide }) => {
  const { list } = useContext(Context);

  const [isNotLoadedImg, setNotLoadedImg] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const visibilityModal = isOpen ? "modalWrapper_open" : "modalWrapper_closed";
  const visibilityContent = isOpen ? "modalBlock_open" : "modalBlock_closed";

  useEffect(() => {
    list.setListData(db.listJSON);
    // console.log(list.listData);
    setCurrentData(toJS(list.listData[list.currentListItem]));
    setIsLoaded(true)
  }, [list]);


  useEffect(() => {
    const data = toJS(list.listData);
    setCurrentData(data[list.currentListItem]);
    setCurrentIndex(list.currentListItem);

  }, [list.currentListItem]);

  const handleClick = () => {
    if (currentIndex + 1 === list.listData.length) {
      list.setCurrentListItem(0);
    } else {
      list.setCurrentListItem(currentIndex + 1);
    }
  };

  
  return (
    <div className={`modalWrapper ${visibilityModal}`} onClick={clickOutSide}>
      <div className={`modalBlock ${visibilityContent}`} onClick={(e) => e.stopPropagation()}>
        <div className="modalBlock__content">
          <div>
            <div className="modalBlock__content__head">
              <div className="modalBlock__content__head__title">{currentData.name}</div>
              <div className="closeBtn" onClick={clickOutSide}>
                <div className="close-button">
                  <div className="in">
                    <div className="close-button-block"></div>
                    <div className="close-button-block"></div>
                  </div>
                  <div className="out">
                    <div className="close-button-block"></div>
                    <div className="close-button-block"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modalBlock__content__wrapper">
              <div className="modalBlock__content__tags">
                {currentData.tags && currentData.tags.map((tag, index) => (
                  <Tag key={index + 1111}>{tag}</Tag>
                ))}
              </div>

              <div className="modalBlock__content__location">
                <img src="img/location.svg" alt="Location" />
                <div className="modalBlock__content__location__text">{currentData.location}</div>
              </div>

              <div className="modalBlock__content__description">{currentData.description}</div>

              <div className="modalBlock__content__date">{currentData.date}</div>

              <div className="modalBlock__content__logo">
                <img src={currentData.img} alt="logo" />
              </div>
            </div>
          </div>

          {/* <div className="modal__bottom"> */}
            <Button type="btnModalGrey" onClick={handleClick}>
              Next deal
            </Button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
});

export default Modal;
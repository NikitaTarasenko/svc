import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import Button from "../layouts/uiElements/Button";
import Tag from "../layouts/uiElements/Tag";
import { Context } from "../index";
import { toJS } from "mobx";
import CloseBtn from "../layouts/uiElements/CloseBtn";
import Loader from "../layouts/uiElements/Loader";

const Modal = observer(({ isOpen, clickOutSide }) => {
  const { list } = useContext(Context);

  const [isNotLoadedImg, setNotLoadedImg] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const visibilityModal = isOpen ? "modalWrapper_open" : "modalWrapper_closed";
  const visibilityContent = isOpen ? "modalBlock_open" : "modalBlock_closed";

  useEffect(() => {
    const data = toJS(list.listData);
    if (data.length !== 0 && data[0] !== null) {
      setCurrentData(data[list.currentListItem]);
      setIsLoaded(true);
    }
  }, [list.listData]);

  // useEffect(() => {
  //   if (
  //     JSON.stringify(currentData) !== "{}" &&
  //     typeof currentData !== "undefined" &&
  //     typeof currentData.links === "object"
  //   ) {
  //     setIsLoaded(true);
  //   }
  // }, [currentData]);

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
        {isLoaded ? (
          <div className="modalBlock__content">
            <div>
              <div className="modalBlock__content__head">
                <div className="modalBlock__content__head__title">{currentData.name}</div>
                <CloseBtn clickHandler={clickOutSide} />
              </div>
              <div className="modalBlock__content__wrapper">
                <div className="modalBlock__content__tags">
                  {Object.entries(currentData.links).map(([linkName, value], index) => (
                    <Tag key={index} link={value}>
                      {linkName}
                    </Tag>
                  ))}
                </div>

                <div className="modalBlock__content__location">
                  <img src="img/location.svg" alt="Location" />
                  <div className="modalBlock__content__location__text">{currentData.location}</div>
                </div>

                <div className="modalBlock__content__description">{currentData.description}</div>

                <div className="modalBlock__content__date">{currentData.date}</div>

                <div className="modalBlock__content__logo">
                  {!isNotLoadedImg ? (
                    <img
                      src={currentData.logo}
                      alt="logo"
                      onLoad={() => setNotLoadedImg(false)}
                      onError={() => setNotLoadedImg(true)}
                    />
                  ) : (
                   <div className="modal_loader">
                     <Loader size="lg"  />
                   </div>
                  )}
                </div>
              </div>
            </div>

 
            <Button type="btnModalGrey" onClick={handleClick}>
              Next deal
            </Button>
 
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
});

export default Modal;

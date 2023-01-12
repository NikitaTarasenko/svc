import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import More from "../layouts/svgs/More";
import { ABOUTUS_ROUTE, FAQ_ROUTE, MAINPAGE_ROUTE, MEMBERSHIP_ROUTE } from "../utils/consts";

const NavBar = () => {
  const navigate = useNavigate();
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const clickMenuBtnHandle = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const nav = document.querySelector(".nav");
    if (isClicked) {
      nav.classList.add("nav_mob_opened");
    } else {
      nav.classList.remove("nav_mob_opened");
    }
  }, [isClicked]);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const nav = document.querySelector(".nav");
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;

      if (scrollY === 0) {
        nav.classList.remove("nav_scrolled");
      }
      if (scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
        nav.classList.add("nav_hidden");
        nav.classList.remove("nav_scrolled");
      }
    };
    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up

      if (scrollDirection === "down") {
        nav.classList.add("nav_scrolled");
        nav.classList.remove("nav_hidden");
      }
      if (scrollDirection === "up") {
        nav.classList.add("nav_hidden");
        nav.classList.remove("nav_scrolled");
      }
    };
  }, [scrollDirection]);

  return (
    <div className="sectionWrap sectionWrap_noFlex">
      <div className="nav  nav_NoScrolled ">
        <div className="nav_flex_mob">
          <div className="nav__logo" onClick={() => navigate(MAINPAGE_ROUTE)}>
            SiliconValleyClub
          </div>
          <div className="nav__nav">
            <div className="nav__nav__link" onClick={() => navigate(ABOUTUS_ROUTE)}>
              About us
            </div>
            <div className="nav__nav__link" onClick={() => navigate(MEMBERSHIP_ROUTE)}>
              Membership
            </div>
            <div className="nav__nav__link" onClick={() => navigate(FAQ_ROUTE)}>
              FAQ’s
            </div>
          </div>
          <div className="nav__registration">
            <div className="nav__registration_in">Log in</div>
            <div className="nav__registration_up">Sign up</div>
            <div className="nav__registration__bg"></div>
          </div>

          <div className="nav_mobileBtn">
            {!isClicked ? (
              <More onClickHandle={clickMenuBtnHandle} />
            ) : (
              <div className="closeBtn" onClick={clickMenuBtnHandle}>
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
            )}
          </div>
        </div>
          <div className="nav__nav_mob">
            <div className="nav__nav__link_mob" onClick={() => navigate(ABOUTUS_ROUTE)}>
              About us
            </div>
            <div className="nav__nav__link_mob" onClick={() => navigate(MEMBERSHIP_ROUTE)}>
              Membership
            </div>
            <div className="nav__nav__link_mob" onClick={() => navigate(FAQ_ROUTE)}>
              FAQ’s
            </div>

            <div className="nav__registration_mob">
            <div className="nav__registration_in">Log in</div>
            <div className="nav__registration_up">Sign up</div>
            <div className="nav__registration__bg"></div>
          </div>
          </div>

    

      </div>
    </div>
  );
};

export default NavBar;

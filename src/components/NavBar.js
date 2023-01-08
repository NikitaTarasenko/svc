import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { ABOUTUS_ROUTE, FAQ_ROUTE, MAINPAGE_ROUTE, MEMBERSHIP_ROUTE } from "../utils/consts";

const NavBar = () => {
  const navigate = useNavigate();
  const [scrollDirection, setScrollDirection] = useState(null);


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
          <div className="nav__registration_in">Sign in</div>
          <div className="nav__registration_up">Sign up</div>
          <div className="nav__registration__bg"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

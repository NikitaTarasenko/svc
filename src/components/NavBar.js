import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { ABOUTUS_ROUTE, FAQ_ROUTE, MAINPAGE_ROUTE, MEMBERSHIP_ROUTE } from "../utils/consts";

const NavBar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".main-menu",
      start: "top -150",
      end: 99999,
      onUpdate: (self) => {
        console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "isActive:", self.isActive);
        let { direction, isActive } = self;
        const featureBoxes = document.querySelectorAll(".main-menu");
        if (direction == -1) {
          featureBoxes[0].classList.add("is-sticky");
          featureBoxes[0].classList.remove("is-hidden");
        }
        if (direction == 1) {
          featureBoxes[0].classList.add("is-hidden");
          featureBoxes[0].classList.remove("is-sticky");
        }
        if (isActive == true) {
          featureBoxes[0].classList.remove("is-at-top");
        } else if (isActive == false) {
          featureBoxes[0].classList.add("is-at-top");
          featureBoxes[0].classList.remove("is-sticky");
        }
      },
    });
  }, []);

  return (
    <div className="sectionWrap sectionWrap_noFlex">
      <div className="nav nav_scrolled">
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

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import "../App.css";
import { ABOUTUS_ROUTE, FAQ_ROUTE, MAINPAGE_ROUTE, MEMBERSHIP_ROUTE } from "../utils/consts";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initG = ()=>{
    ScrollTrigger.refresh();
    gsap.registerPlugin(ScrollTrigger);
    const height = document.body.scrollHeight;
    const nav = document.querySelector(".nav");
    console.log('----------------------------')
    console.log(height)
    console.log('----------------------------')
    
    

    ScrollTrigger.create({
      trigger: ".container",
      start: "top",
      markers: true,
      end: 500,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        
        let { direction, isActive } = self;
       
        if (direction === -1) {
          nav.classList.add("nav_scrolled");
          nav.classList.remove("nav_hidden");
        }
        if (direction === 1) {
          nav.classList.add("nav_hidden");
          nav.classList.remove("nav_scrolled");
        }
        if (isActive === true) {
          nav.classList.remove("is-at-top");
        } else if (isActive === false) {
          nav.classList.add("is-at-top");
          nav.classList.remove("nav_scrolled");
        }
      },
    });
  }
  useEffect(() => {
    initG()
  }, []);

  useEffect(()=>{
    ScrollTrigger.refresh();
  },[location.pathname])

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

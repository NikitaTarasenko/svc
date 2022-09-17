import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { ABOUTUS_ROUTE, FAQ_ROUTE, MAINPAGE_ROUTE, MEMBERSHIP_ROUTE } from "../utils/consts";


const NavBar = () => {
  const navigate = useNavigate();


  return (
   
      <div className="nav">
        <div className="nav__logo" onClick={()=> navigate(MAINPAGE_ROUTE)}>SiliconValleyClub</div>
        <div className="nav__nav">
          <div className="nav__nav__link" onClick={()=> navigate(ABOUTUS_ROUTE)}>About us</div>
          <div className="nav__nav__link" onClick={()=> navigate(MEMBERSHIP_ROUTE)}>Membership</div>
          <div className="nav__nav__link" onClick={()=> navigate(FAQ_ROUTE)}>FAQ’s</div>
        </div>
        <div className="nav__registration">
          <div className="nav__registration_in">Sign in</div>
          <div className="nav__registration_up">Sign up</div>
          <div className="nav__registration__bg"></div>
        </div>
      </div>
     
  );
};

export default NavBar;

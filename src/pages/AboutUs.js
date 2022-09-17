import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Container from "../layouts/Container";
import AboutUsAbout from "../layouts/sections/AboutUsAbout";
import Advisory from "../layouts/sections/Advisory";
import Team from "../layouts/sections/Team";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <Container>
        <div className="section headSection">
          <NavBar />
          aboutus
        </div>
        <AboutUsAbout/>
        <Advisory/>
        <Team/>
        <Footer/>
      </Container>
    </div>
  );
};

export default AboutUs;

import React from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import Container from "../../../layouts/Container";
import FaqQuestions from "../../../layouts/sections/FaqQuestions";

const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <div className="section headSection">
          <NavBar />
          <div className="top__title">
            <h1 className="top__h1">FAQ</h1>
          </div>
        </div>
        <FaqQuestions />
        <Footer />
      </Container>
    </div>
  );
};

export default Faq;

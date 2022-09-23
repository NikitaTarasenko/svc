import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Container from "../layouts/Container";
import FaqQuestions from "../layouts/sections/FaqQuestions";

const Faq = () => {
  return (
    <div>
      <Container>
        <div className="section headSection">
          <NavBar />
          фак
        </div>
        <FaqQuestions/>
        <Footer />
      </Container>
    </div>
  );
};

export default Faq;

import React from "react";
import NavBar from "../components/NavBar";
import Container from "../layouts/Container";
import WhatWeOffer from "../layouts/sections/WhatWeOffer";
import Members from "../layouts/sections/Members";
import WhatIsSI from "../layouts/sections/WhatIsSI";
import Footer from "../components/Footer";

const Membership = () => {
  return (
    <div className="membership">
      <Container>
        <div className="section headSection">
          <NavBar />
        </div>
        <Members />
        <WhatWeOffer />
        <WhatIsSI />
        <Footer/>
      </Container>
    </div>
  );
};

export default Membership;

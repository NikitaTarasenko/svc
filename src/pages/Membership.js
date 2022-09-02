import React from "react";
import NavBar from "../components/NavBar";
import Container from "../layouts/Container";
import WhatWeOffer from "../layouts/sections/WhatWeOffer";
import Members from "../layouts/sections/Members";


const Membership = () => {
  return (
    <div className="membership">
      <Container>
        <div className="section headSection">
          <NavBar />
        </div>
        <Members />
        <WhatWeOffer />
      </Container>
    </div>
  );
};

export default Membership;

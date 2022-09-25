import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import Container from "../layouts/Container";
import WhatWeOffer from "../layouts/sections/WhatWeOffer";
import Members from "../layouts/sections/Members";
import WhatIsSI from "../layouts/sections/WhatIsSI";
import Footer from "../components/Footer";
import OurMembersGet from "../layouts/sections/OurMembersGet";

const Membership = () => {
  const ref = useRef(null);


  return (
    <div className="membership" ref={ref}>
      <Container>
        <div className="section headSection">
          <NavBar />
          <div className="top__title">
            <h1 className="top__h1">Membership</h1>
            <div className="top__title__blue">Welcome to the club</div>
          </div>
        </div>
        <Members />
        <OurMembersGet/>
        <WhatWeOffer reff={ref} />
        <WhatIsSI />
        <Footer/>
      </Container>
    </div>
  );
};

export default Membership;

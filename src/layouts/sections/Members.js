import React from "react";
import ArrowSmallDown from "../svgs/ArrowSmallDown";
import ArrowUp from "../svgs/ArrowUp";

const Members = () => {
  return (
    <div>
      <section className="  guys">
        <div className="guysPhotos">
          <div className="guysPhotos__circle">
            <img src="img/man1.png" alt="people..." />
          </div>
          <div className="guysPhotos__circle">
            <img src="img/man2.png" alt="people..." />
          </div>
          <div className="guysPhotos__circle">
            <img src="img/man3.png" alt="people..." />
          </div>
          <div className="guysPhotos__circle">
            <img src="img/man4.png" alt="people..." />
          </div>
          <div className="guysPhotos__circle">150+</div>
        </div>
        <div className="guysPhotosText">
          Silicon Valley Club is the community of 150+ investors from all around the world. We make investments into
          Late Seed and Round A deals alongside top VCs with minimum check of $5,000.
        </div>
      </section>

      <section className="becomeMember">
        <ArrowUp />
        <div className="becomeMember__text">
          Our club is based on accredited investors who are professionals, entrepreneurs and industry experts. But we
          are big supporters of learning the next generation of VC investors in gaining proficiency.
        </div>

        <div className="btn becomeMember__btn">Become a member</div>
      </section>

      <div className="bigWhyUs">
        Why us
        <div>
          <ArrowSmallDown />
        </div>
      </div>
    </div>
  );
};

export default Members;

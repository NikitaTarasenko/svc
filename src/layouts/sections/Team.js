import React from "react";

const Team = () => {
  return (
    <div className="section s_team">
      <div className="sectionWrap  sectionWrap_noFlex">
        <div className="s_advisory__title">Our team</div>
        <div className="s_team__row">
          <div className="s_team__row__item">
            <div className="s_advisory__content__item__img">
              <img src="img/t1.png" alt="team" />
            </div>
            <div className="s_advisory__content__item__name">Alexander Soroka</div>
            <div className="s_advisory__content__item__descr">
              Venture Partner at FYDA Growth Partners, Startup Advisor, C-Level Exec, Keynote Speaker
            </div>
          </div>

          <div className="s_team__row__item">
            <div className="s_advisory__content__item__img">
              <img src="img/t2.png" alt="team" />
            </div>
            <div className="s_advisory__content__item__name">Andrii Moroz</div>
            <div className="s_advisory__content__item__descr">
              Founder of IPA Equities, is a serial entrepreneur and advocate for disruptive and innovative blockchain
              technologies
            </div>
          </div>

          <div className="s_team__row__item">
            <div className="s_advisory__content__item__img">
              <img src="img/t3.png" alt="team" />
            </div>
            <div className="s_advisory__content__item__name">Julia Prysiazhniuk</div>
            <div className="s_advisory__content__item__descr">
              Partner of DFJ VTB Capital Aurora, President of the Global Technology Symposium
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

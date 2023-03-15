import axios from "axios";
import React, { useEffect, useState } from "react";
import Linkdn from "../svgs/Linkdn";
import Loader from "../uiElements/Loader";

const Advisory = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotLoadedImg, setNotLoadedImg] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      " Access-Control-Allow-Origin": "http://spr.sv.club"
    };

    try {
      const response = await axios.get("/rest.php?target=advisory", { headers });
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="section s_advisory">
      <div className="sectionWrap sectionWrap_noFlex">
        <div className="s_advisory__title">Advisory board</div>
        <div className="s_advisory__content">
          {Object.values(isLoading ? {} : data).map((card) => (
            <div className="s_advisory__content__item" key={card.id}>
              <div className="s_advisory__content__item__img">
                {!isNotLoadedImg ? (
                  <img
                    src={card.memberPhoto}
                    alt="people"
                    onLoad={() => setNotLoadedImg(false)}
                    onError={() => setNotLoadedImg(true)}
                  />
                ) : (
                  <Loader size="lg" />
                )}
              </div>
              <div className="s_advisory__content__item__name">
                {card.name}   
                <div className="s_advisory__content__item__name__flag">
                   <img src={card.logo_flag} alt="flag" /> 
                </div>
              </div>
              <div className="s_advisory__content__item__descr">{card.description}</div>
              <a href={card.linkdn} target="_blank" rel="noreferrer">
                <Linkdn />
              </a>
            </div>
          ))}
          {/* <div className="s_advisory__content__item">
            <div className="s_advisory__content__item__img">
              <img src="img/a2.png" alt="people" />
            </div>
            <div className="s_advisory__content__item__name">
              Keith Hermann
              <div className="s_advisory__content__item__name__flag">
                <img src="img/flag.png" alt="flag" />
              </div>
            </div>
            <div className="s_advisory__content__item__descr">
              Founder of IPA Equities, is a serial entrepreneur and advocate for disruptive and innovative blockchain
              technologies
            </div>
            <a href="/">
              <Linkdn />
            </a>
          </div>

          <div className="s_advisory__content__item">
            <div className="s_advisory__content__item__img">
              <img src="img/a3.png" alt="people" />
            </div>
            <div className="s_advisory__content__item__name">
              Alexandra Sasha Johnson
              <div className="s_advisory__content__item__name__flag">
                <img src="img/flag.png" alt="flag" />
              </div>
            </div>
            <div className="s_advisory__content__item__descr">
              Partner of DFJ VTB Capital Aurora, President of the Global Technology Symposium
            </div>
            <a href="/">
              <Linkdn />
            </a>
          </div>

          <div className="s_advisory__content__item">
            <div className="s_advisory__content__item__img">
              <img src="img/a4.png" alt="people" />
            </div>
            <div className="s_advisory__content__item__name">
              Sudhir Kadam
              <div className="s_advisory__content__item__name__flag">
                <img src="img/flag.png" alt="flag" />
              </div>
            </div>
            <div className="s_advisory__content__item__descr">
              Venture Partner at FYDA Growth Partners, Startup Advisor, C-Level Exec, Keynote Speaker
            </div>
            <a href="/">
              <Linkdn />
            </a>
          </div>

          <div className="s_advisory__content__item">
            <div className="s_advisory__content__item__img">
              <img src="img/a5.png" alt="people" />
            </div>
            <div className="s_advisory__content__item__name">
              Sudhir Kadam
              <div className="s_advisory__content__item__name__flag">
                <img src="img/flag.png" alt="flag" />
              </div>
            </div>
            <div className="s_advisory__content__item__descr">
              Venture Partner at FYDA Growth Partners, Startup Advisor, C-Level Exec, Keynote Speaker
            </div>
            <a href="/">
              <Linkdn />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Advisory;

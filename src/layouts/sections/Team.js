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

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Linkdn from "../svgs/Linkdn";
// import Loader from "../uiElements/Loader";

// const Team = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isNotLoadedImg, setNotLoadedImg] = useState(false);

//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     const headers = {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       " Access-Control-Allow-Origin": "http://spr.sv.club"
//     };

//     try {
//       const response = await axios.get("/rest.php?target=team", { headers });
//       setData(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className="section s_team">
//       <div className="sectionWrap  sectionWrap_noFlex">
//         <div className="s_advisory__title">Our team</div>
//         <div className="s_team__row">
//           {Object.values(isLoading ? {} : data).map((card) => (
//             <div className="s_team__row__item" key={card.id}>
//               <div className="s_advisory__content__item__img">
//                 {!isNotLoadedImg ? (
//                   <img
//                     src={card.photo}
//                     alt="people"
//                     onLoad={() => setNotLoadedImg(false)}
//                     onError={() => setNotLoadedImg(true)}
//                   />
//                 ) : (
//                   <Loader size="lg" />
//                 )}
//               </div>
//               <div className="s_advisory__content__item__name">{card.name}</div>
//               <div className="s_advisory__content__item__descr">{card.descr}</div>
//               <a href={card.linkdn} target="_blank" rel="noreferrer">
//                 <Linkdn />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;

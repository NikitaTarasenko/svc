import React, { useContext, useEffect } from "react";
import Attention from "../layouts/svgs/Attention";
import FB from "../layouts/svgs/FB";
import Linkdn from "../layouts/svgs/Linkdn";
import Mirco from "../layouts/svgs/Mirco";
import Twit from "../layouts/svgs/Twit";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUTUS_ROUTE, FAQ_ROUTE, MAINPAGE_ROUTE, MEMBERSHIP_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";
// import pt from 'prop-types';
import { observer } from "mobx-react-lite";
import { Context } from "..";


const Footer = observer(() => {

  const { list } = useContext(Context);
  const navigate = useNavigate();

  const initGsap = ()=>{
    gsap.registerPlugin(ScrollTrigger);
    if(list.questionsIsOpened){
      console.log('gsap')
    }
    const fboxes = gsap.utils.toArray(".fAnimeBlock");

    fboxes.forEach((box, i) => {
      let number = box.getAttribute("data-n");
      gsap.fromTo(
        box,
        {
          opacity: 1,
          duration: 0.4,
        },
        {
          opacity: 1,
          // x: (i, target) => target.dataset.afterX,
          // y: (i, target) => target.dataset.afterY,

          duration: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: box,
            toggleClass: `fAnimeBlock_on${number}`,
            toggleActions: "play none none restart",
            start: "top 80%",
            endTrigger: 'footer__rights',
            end: () => `+=${box.offsetHeight + 600}`,
            // scrub: true,
            // markers: true,
            invalidateOnRefresh: true
            // markers: {
            //   startColor : "yellow",
            //   endColor : 'brown',
            //   fontSize : '5rem'
            // },
          },
        }
      );
    });
  }

  useEffect(() => {
    if(list.questionsIsOpened){
      ScrollTrigger.refresh()
    }
  },[list.questionsIsOpened]);

  useEffect(() => {
    initGsap();
  }, []);

  return (
    <section className=" section footer">
      <div className="footer__content">
        <div className="footer__content__left">
          <div className="footer__content__left__title">
            Start your membership now
            <div className="footer__attention">
              <Attention /> Don't miss deals
            </div>
          </div>

          <div className="btn getStrd__btn">Get started</div>
        </div>
        <div className="footer__right__container">
          <div className="fAnimeBlock footer__right" data-n="0">
            <div className="footer__right__head">
              <div className="footer__right__head__title">Current deal</div>
              <div className="footer__right__live">
                <div></div>LIVE
              </div>
            </div>
            <div className="footer__right__text">Fintech startup. Seed. $3.5bln valuation. $5mln raising.</div>
          </div>
          <div className="fAnimeBlock footer__right__opaciti1" data-n="1"></div>
          <div className="fAnimeBlock footer__right__opaciti2" data-n="2"></div>
        </div>
      </div>

      <div className="footer__black">
        <div className="footer__black__flex">
          <div className="footer__black__flex__logo">
            SiliconValleyClub
            <div className="footer__black__social">
              <a href="/">
                <Linkdn />
              </a>
              <a href="/">
                <FB />
              </a>
              <a href="/">
                <Twit />
              </a>
            </div>
          </div>

       <div className="footer__black__mob">
       <div className="footer__black__flex__col">
            <div className="footer__black__flex__col__li" onClick={() => navigate(ABOUTUS_ROUTE)}>
              About us
            </div>
            <div className="footer__black__flex__col__li" onClick={() => navigate(MEMBERSHIP_ROUTE)}>
              Membership
            </div>
            <div className="footer__black__flex__col__li" onClick={() => navigate(MAINPAGE_ROUTE)}>
              Events
            </div>
            <div className="footer__black__flex__col__li" onClick={() => navigate(FAQ_ROUTE)}>
              FAQ’s
            </div>
          </div>

          <div className="footer__black__flex__col">
            <div className="footer__black__flex__col__li greyLinks">Privacy policy</div>
            <div className="footer__black__flex__col__li greyLinks">DPA</div>
            <div className="footer__black__flex__col__li greyLinks">GDPR</div>
            <div className="footer__black__flex__col__li greyLinks">Cookie settings</div>
          </div>
       </div>
        </div>

        <div className="speaky">
          <div className="speaky__head">
            <div className="speaky__head__title">Contact us</div>
            <Mirco />
          </div>
          <div className="speaky__text">Got questions? Send us a message</div>

          <div className="btn speakyBtn">Send a voice message</div>

          <div className="speaky__bottom">
            Powered by <span>Speaky</span>
          </div>
        </div>

        <div className="footer__rights">© svsy.club, 2022</div>
      </div>
    </section>
  );
});


// Footer.propTypes = {
//   questionsIsOpened : pt.bool,
// }


export default Footer;

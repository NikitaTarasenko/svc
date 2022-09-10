import React from 'react';
import Attention from '../layouts/svgs/Attention';
import FB from '../layouts/svgs/FB';
import Linkdn from '../layouts/svgs/Linkdn';
import Mirco from '../layouts/svgs/Mirco';
import Twit from '../layouts/svgs/Twit';

const Footer = () => {
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
            <div className="footer__right">
              <div className="footer__right__head">
                <div className="footer__right__head__title">Current deal</div>
                <div className="footer__right__live">
                  <div></div>LIVE
                </div>
              </div>
              <div className="footer__right__text">Fintech startup. Seed. $3.5bln valuation. $5mln raising.</div>
            </div>
            <div className="footer__right__opaciti1"></div>
            <div className="footer__right__opaciti2"></div>
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
                  <Twit/>
                </a>
              </div>
            </div>

            <div className="footer__black__flex__col">
              <div className="footer__black__flex__col__li">About us</div>
              <div className="footer__black__flex__col__li">Membership</div>
              <div className="footer__black__flex__col__li">Events</div>
              <div className="footer__black__flex__col__li">FAQ’s</div>
            </div>

            <div className="footer__black__flex__col">
              <div className="footer__black__flex__col__li greyLinks">Privacy policy</div>
              <div className="footer__black__flex__col__li greyLinks">DPA</div>
              <div className="footer__black__flex__col__li greyLinks">GDPR</div>
              <div className="footer__black__flex__col__li greyLinks">Cookie settings</div>
            </div>
          </div>

          <div className="speaky">
            <div className="speaky__head">
              <div className="speaky__head__title">Contact us</div>
              <Mirco/>
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
};

export default Footer;
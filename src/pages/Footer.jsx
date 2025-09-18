import React from 'react';
import { HiArrowCircleUp } from 'react-icons/hi';
import { useTranslation } from 'react-i18next'; 
import navlogo from '../assets/logo.png';
import footerbackground from '../assets/footeroverlay.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <section className="pt-0 relative">
      <div className="DLine">
        <div className="Dline1"></div>
        <div className="Dline2"></div>
        <div className="Dline3"></div>
        <div className="Dline4"></div>
        <div className="Dline5"></div>
      </div>
      <div className="footer3">
        <div className='footernavmenu'>
          <span className='footerheads'>MZ Pharmed</span>
          <ul className='footermenulist'>
            <li>{t("Footer.About Us")}</li>
            <li>{t("Footer.Pricing")}</li> 
            <li>{t("Footer.Products")}</li>
            <li>{t("Footer.Our Services")}</li>
            <li>{t("Footer.Privacy Policy")}</li>
            <li>{t("Footer.Terms & Conditions")}</li>
          </ul>
        </div>

        <div className='footerFAQ'>
          <div className="footercontactsection">
            <span className='footerheads'>Contact Us</span>
            <ul className='footermenulist'>
              
            </ul>
            <div className="mt-2 flex justify-center md:justify-start w-full">
              <input
                id="email"
                name="email"
                className="w-[20em] h-[2.5em] p-2 rounded-lg"
                placeholder={t("Contactus.your email")}
                type="email"
              />
            </div>
            <div className="mt-3 flex justify-center md:justify-start w-full">
              <textarea
                id="comment"
                name="comment"
                className="w-[20em] h-[6em] p-2 rounded-lg"
                placeholder={t("Contactus.Write your Comment")}
              />
            </div>
            <div className=" flex justify-left mt-3 ">
              <button className="border w-30 h-10 border-[#2b4183] text-lg md:text-xl font-bold text-[#2b4183] rounded-lg bg-gray-200 hover:bg-[#2b4183] hover:text-white transition duration-500 px-4 py-2">
                {t("Contactus.Button")}
              </button>
            </div>
          </div>
        </div>

        <div className='footerbranding'>
          <div className='Footerlogobox'>
            <div className='footerlogo '>
              <img className='' src={navlogo} alt="logo" />
            </div>    
            <div className='footerBrandNamebox'>
              <div className='Brandname'>
                <h1 className='FLogo'>MZ Pharmed</h1>
              </div>
              <span className='mottofooter'>ADVANCED MEDICAL SOLUTIONS</span>
              <div className='Motto'></div> 
            </div>
          </div>

          <ul className='ul'>
            <li className='li'>
              <a className='lia' href="#">
                <FontAwesomeIcon icon={faFacebookF} className="icon" />
              </a>
            </li>
            <li className='li'>
              <a className='lia' href="#">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
            </li>
            <li className='li'>
              <a className='lia' href="#">
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              </a>
            </li>
            <li className='li'>
              <a className='lia' href="#">
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </a>
            </li>
          </ul>

          <a href="#">
            <div className="scrollupbutton">
              <button className="btn" id="scrollToHome">
                <FontAwesomeIcon icon={faAngleUp} />
              </button>
            </div>
          </a>
        </div>
      </div>
      <div className='version'>
        <span>Version - 0.91</span>
      </div>
      <div className='lastline'>
        <span className='lasttext'> 2024 MZ Pharmed. All rights reserved</span>
      </div>
    </section>
  );
}

export default Footer;

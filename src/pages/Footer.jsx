import React from 'react';
import { HiArrowCircleUp } from 'react-icons/hi';
import { useTranslation } from 'react-i18next'; 
import navlogo from '../assets/logo.png';
import footerbackground from '../assets/footeroverlay.png';

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <section 
      className="pt-0 relative">
      
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
            <li>About Us</li>
            <li>Pricing</li> 
            <li>Products</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

<div className='footerFAQ'>    <div className="footercontactsection">
<span className='footerheads'>Contact Us</span>
<ul className='footermenulist'>
            <li>FAQs</li>
          </ul>
        <div className="mt-2 flex justify-center md:justify-start w-full">
          <input
            id="email"
            name="email"
            className="w-[20em] h-[2.5em] p-2 rounded-lg"
            placeholder={t("Contactus.Write your email")}
            type="email"
          />
        </div>
        <div className="mt-3 flex justify-center md:justify-start w-full">
          <textarea
            id="comment"
            name="comment"
            className="w-[20em] h-[6em] p-2 rounded-lg"
            placeholder= {t("Contactus.Write your Comment")}
          />
        </div>
        <div className=" flex justify-left mt-3 ">
        <button className="border w-30 h-10 border-[#2b4183] text-lg md:text-xl font-bold text-[#2b4183] rounded-lg bg-gray-200 hover:bg-[#2b4183] hover:text-white transition duration-500 px-4 py-2">
        {t("Contactus.Button")}
    </button>
          
        </div>
      </div>    </div>

<div className='footerbranding'>

<div className='Footerlogobox'>
  <div className='footerlogo '> <img className='' src={navlogo} alt="logo" /> </div>    
   <div className='footerBrandNamebox'>
     <div className='Brandname'> <h1 class='FLogo' >MZ Pharmed</h1> </div> <span className='mottofooter'>ADVANCED MEDICAL SOLUTIONS</span> <div className='Motto'></div> 
     </div>
</div>

<ul className='ul'>
  <li className='li'>
    <a className='lia' href="#">
      <i class="fab fa-facebook-f icon"></i>
    </a>
  </li>
  <li  className='li'>
    <a className='lia' href="#">
      <i class="fab fa-instagram icon"></i>
    </a>
    </li>
  <li className='li'>
    <a className='lia' href="#">
      <i class="fab fa-whatsapp icon"></i>
    </a> 
    
  </li>
  <li className='li'>
    <a className='lia' href="#">
      <i class="fab fa-twitter icon"></i>
    </a> 
  </li>
</ul>

<div className='scrollupbutton'>  <button class="btn"  href="#"> <i class="fa fa-angle-up" href="#" ></i></button>  </div>

</div>


  

      </div>
      <div className='lastline'>      <span class='lasttext'> 2024 MZ Pharmed. All rights reserved</span>       </div>

    </section>
  );
}

export default Footer;

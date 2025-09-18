import React from 'react';
import Contactus from './Contactus';
import Carousell from './Carousel';
import Counter from './Counter';
import Distribution from './Distribution';
import Quality from './Quality';

import aboutsimage from '../assets/Aboutus.png';
import vision2image from '../assets/vision2.png'; 
import seeproduct from '../assets/seeproduct.png';

import { useTranslation } from 'react-i18next';
import Contactus22 from './Contactus';

function Herosection() {
  const { t, i18n } = useTranslation();
  return (
    <>
    
      <section id='aboutus' class="aboutus">
        <div className="container mx-auto p-6 md:p-8 lg:p-16">
          <div className="container mx-auto p-4 md:p-8 lg:p-16 bg-white rounded-lg">
            <div className="md:flex md:space-x-8">
              <div className="w-full md:w-1/2">
                <img className="w-full h-auto" src={aboutsimage} alt="About Us Image" />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{t("navbar.About us")}</h2>
                <p className="text-gray-600 mb-5 text-xl">
                {t("herosection.About us text1")}
                </p>
                <p className="text-gray-600 mb-5 text-xl">
                {t("herosection.About us text2")}
                </p>
              </div>
            </div>
            <div className="md:flex md:space-x-8 mt-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{t("herosection.Vision & Mission")}</h2>
                <p className="text-gray-600 mb-4 text-xl">
                {t("herosection.Vision & Mission text")}
                  </p>
                  <br />
                   <li className="text-xl md:text-xl  text-gray-600 mb-4" >{t("herosection.OUR EXTENSIVE HEALTHCARE PORTFOLIO")}</li>
                   <li className="text-xl md:text-xl  text-gray-600 mb-4"> {t("herosection.EASSILY ACCESSIBLE")}</li>
                   <li className="text-xl md:text-xl  text-gray-600 mb-4">{t("herosection.EMPOWERING THROUGH KNOWLEDGE")}</li>
                   <li className="text-xl md:text-xl  text-gray-600 mb-4"> {t("herosection.AFFORDABLE FOR EVERYONE")}</li>
                   <li className="text-xl md:text-xl  text-gray-600 mb-4">{t("herosection.NO SHORTCUTS WHEN IT COMES TO QUALITY")}</li>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <img className="w-full h-auto" src={vision2image} alt="Vision Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      

  <div class='holderofproducts'>      
    <div class="holderofproducts2"> 
      {/* Product Section */}
      <div id="product">
      <h1 className="text-center pt-12 text-2xl md:text-5xl font-bold text-white mb-1 OurDistributionNetwork">
        {t("Product.See Our Products")}
      </h1>
      <div className="text-center md:text-left">
        <h1 className="pl-4 md:pl-[10%] pt-14 text-xl md:text-3xl font-bold text-[#2b4183] mb-1">
          {t("Product.Blue text")}
        </h1>
      </div>
      <br />
      <div className="px-4 md:pl-[8em] md:w-[70em]">
        <p className="text-sm md:text-lg text-white mb-4 leading-relaxed">
          {t("Product.White text1")}
        </p>
        <p className="text-sm md:text-lg text-white mb-4 leading-relaxed">
          {t("Product.White text2")}
        </p>
      </div>
    </div>

       <div className='Herecomescarousel'>
       <Carousell />
       </div>
       <br />
       </div>
       </div>

       
       <div className="DLine">
      <div className="Dline1"></div>
      <div className="Dline2"></div>
      <div className="Dline3"></div>
      <div className="Dline4"></div>
      <div className="Dline5"></div>
    </div>
       <Quality />
       <Distribution />
      
      <section id='contactus'>
        \
        <Contactus22></Contactus22>
      </section>
      
     <Counter /> 
    </>
  );
}

export default Herosection;

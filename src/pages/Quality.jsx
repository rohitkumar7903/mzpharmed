import React from 'react';
import { useTranslation } from 'react-i18next';
import qualityphoto from '../assets/qualityphoto.jpg';


function Quality() {
  const { t, i18n } = useTranslation();
  return (
    
    <section id='quality' className="py-6 md:py-12"> 
    
      <div className="quality-container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="quality-header flex flex-col items-center">
          <h1 className="OurDistributionNetwork quality-title font-poppins font-bold text-white text-center md:text-left text-4xl md:text-5xl mb-4 md:mb-0">{t("Quality.QUALITYhead")}</h1>
        </div>
        <div className="quality-content flex flex-col md:flex-row items-center mt-4 md:mt-8">
          <div className="quality-text md:w-1/2 md:pr-4"> 
            <p className="text-lg text-white leading-relaxed my-2">
            {t("Quality.Qualitytext")}
            </p>
          </div>
          <div className="quality-image md:w-1/2 ml-0 md:ml-4 mt-4 md:mt-0"> 
            <img className="w-full h-auto rounded-lg" src={qualityphoto} alt="Laboratory" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;

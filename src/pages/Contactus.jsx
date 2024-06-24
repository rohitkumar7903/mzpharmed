import React from 'react';
import { useTranslation } from 'react-i18next';

function Contactus() {
  const { t, i18n } = useTranslation();
  return (
    <div style={{ backgroundImage: 'linear-gradient(to bottom, #45ab6d, #1a9776, #008277, #116d70, #275861)' }} className="w-full h-[29em] flex flex-col md:flex-row">
      <div className="flex-1 p-8 md:pl-16 flex flex-col justify-center items-center md:items-start">
        <h1 className="text-3xl font-bold text-white pl-12 text-center md:text-left OurDistributionNetwork">{t("navbar.Contact us")}</h1>
        <h2 className="text-xl text-white text-center pl-16 md:text-left mt-2">{t("Contactus.FAQs")}</h2>
        <div className="mt-6 flex justify-center md:justify-start w-full">
          <input
            id="email"
            name="email"
            className="w-[20em] h-[2.5em] p-2 rounded-lg"
            placeholder= {t("Contactus.Write your email")}
            type="email"
          />
        </div>
        <div className="mt-8 flex justify-center md:justify-start w-full">
          <textarea
            id="comment"
            name="comment"
            className="w-[20em] h-[8em] p-2 rounded-lg"
            placeholder= {t("Contactus.Write your comment")}
          />
        </div>
        <div className="mt-8 flex justify-center pl-16">
        <button className="border w-36 h-12 border-[#2b4183] text-lg md:text-xl font-bold text-[#2b4183] rounded-lg bg-gray-200 hover:bg-[#2b4183] hover:text-white transition duration-500 px-4 py-2">
        {t("Contactus.Button")}
    </button>
          
        </div>
      </div>
      <div className="flex-1 p-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.8596205334566!2d73.18400893862871!3d19.207461328408098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79381caffffff%3A0x2844560233f492!2sMZ%20Pharmed%20LLP!5e0!3m2!1sen!2sin!4v1718366133771!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-xl pl-4 pr-6 pt-2"
        ></iframe>
      </div>
    </div>
  );
}

export default Contactus;

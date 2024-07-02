import React from 'react';
import { useTranslation } from 'react-i18next';
function Contactus() {
  const { t, i18n } = useTranslation();
  return (
    
    <div class='ccc'>
      <div>
      <span className='footerheads'>Get in Touch Today!</span>
      <div className="mt-2 flex justify-center md:justify-start w-full">
          <input
            id="email"
            name="email"
            className="w-[20em] h-[2.5em] p-2 rounded-lg"
            placeholder={t("Your email")}
            type="email"
          />
        </div>
        <div className="mt-3 flex justify-center md:justify-start w-full">
          <textarea
            id="comment"
            name="comment"
            className="w-[20em] h-[10em] p-2 rounded-lg"
            placeholder= {t("Write to us...")}
          />
        </div>
        <div className=" flex justify-left mt-3 ">
        <button className="border w-30 h-10 border-[#2b4183] text-lg md:text-xl font-bold text-[#2b4183] rounded-lg bg-gray-200 hover:bg-[#2b4183] hover:text-white transition duration-500 px-4 py-2">
        {t("Contactus.Button")}
    </button>
          
        </div>

        </div>
          
  
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.8596205334566!2d73.18400893862871!3d19.207461328408098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79381caffffff%3A0x2844560233f492!2sMZ%20Pharmed%20LLP!5e0!3m2!1sen!2sin!4v1718366133771!5m2!1sen!2sin"
          width="700px%"
          height="350px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-xl pl-4 pr-6 pt-2"></iframe>
        
      </div>
    </div>
  );
}

export default Contactus;

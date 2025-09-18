import React, { useState } from 'react';
import Divider from '../components/Divider';
import { useTranslation } from 'react-i18next';
import navlogo from '../assets/logo.png';
import langswap from '/src/assets/langswap.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);  };

    const handleLanguageChange = (event) => {
      i18n.changeLanguage(event.target.value);
    };

  return (
    <>
      <nav className='h-20 w-full fixed top-0 left-0 text-white z-50' style={{ backgroundColor: 'rgb(19, 19, 19)' }}>
        <div className="flex items-center justify-between h-full px-4 md:px-10">
          <div className="flex items-center">
            <img className='h-12 md:h-16' src={navlogo} alt="logo" />
            <h1 class='HLogo' >MZ Pharmed</h1>
          </div>
          <div className="hidden md:flex md:items-center">
            <a className="nav-link text-lg md:text-xl mx-2" href="#">{t("navbar.Home")}</a>
            <a className="nav-link text-lg md:text-xl mx-2" href="#aboutus">{t("navbar.About us")}</a>
            <a className="nav-link text-lg md:text-xl mx-2" href="#product">{t("navbar.Product")}</a>
            <a className="nav-link text-lg md:text-xl mx-2" href="#quality">{t("navbar.Quality Standards")}</a>
            <a className="nav-link text-lg md:text-xl mx-2" href="#contactus">{t("navbar.Contact us")}</a>
          </div>
          <div className="flex items-center">
            <img className='w-11 p-1' src={langswap} alt="" srcset="" />
            <select 
              className="bg-[#131313] text-white border-none outline-none"
              value={i18n.language} 
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
           
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center bg-blue-800">
              <a className="nav-link text-lg py-2" href="#" onClick={toggleMenu}>{t("navbar.Home")}</a>
              <a className="nav-link text-lg py-2" href="#aboutus" onClick={toggleMenu}>{t("navbar.About us")}</a>
              <a className="nav-link text-lg py-2" href="#product" onClick={toggleMenu}>{t("navbar.Product")}</a>
              <a className="nav-link text-lg py-2" href="#quality" onClick={toggleMenu}>{t("navbar.Quality Standards")}</a>
              <a className="nav-link text-lg py-2" href="#contactus" onClick={toggleMenu}>{t("navbar.Contact us")}</a>
            </div>
          </div>
        )}
      <Divider className='z-50' />  
      </nav>

  

    </>
  );
}

export default Navbar;

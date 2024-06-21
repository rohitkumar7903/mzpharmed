import React, { useState } from 'react';
import Divider from '../components/Divider';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='h-20 w-full fixed top-0 left-0 text-white z-50' style={{ backgroundColor: '#00267a' }}>
        <div className="flex items-center justify-between h-full px-4 md:px-10">
          <div className="flex items-center">
            <img className='h-12 md:h-16' src="src/assets/logo.png" alt="logo" />
            <h1 className='ml-2 md:ml-4 text-2xl md:text-4xl font-bold'>MZ Pharmed</h1>
          </div>
          <div className="hidden md:flex md:items-center">
            <a className="nav-link text-lg md:text-xl mx-2" href="#">Home</a>
            <a className="nav-link text-lg md:text-xl mx-2" href="#aboutus">About us</a>
            <a className="nav-link text-lg md:text-xl mx-2" href="#product">Product</a>
            <a className="nav-link text-lg md:text-xl mx-2" href="#quality">Quality Standards</a>
            <a className="nav-link text-lg md:text-xl mx-2" href="#contactus">Contact us</a>
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
              <a className="nav-link text-lg py-2" href="#" onClick={toggleMenu}>Home</a>
              <a className="nav-link text-lg py-2" href="#aboutus" onClick={toggleMenu}>About us</a>
              <a className="nav-link text-lg py-2" href="#product" onClick={toggleMenu}>Product</a>
              <a className="nav-link text-lg py-2" href="#quality" onClick={toggleMenu}>Quality Standards</a>
              <a className="nav-link text-lg py-2" href="#contactus" onClick={toggleMenu}>Contact us</a>
            </div>
          </div>
        )}
        <Divider className='z-50' />
      </nav>
    </>
  );
}

export default Navbar;

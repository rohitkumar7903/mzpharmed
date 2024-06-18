import React from 'react';
import Divider from '../components/Divider';

function Navbar() {
  return (
    <>
      <nav className='h-20 w-full fixed top-0 left-0 text-white z-50' style={{ backgroundColor: '#00267a' }}>
        <div className="flex items-center justify-between h-full px-10">
          <div className="flex items-center">
            <img className='h-16' src="src/assets/logo.png" alt="logo" />
            <h1 className='ml-4 text-4xl font-bold'>MZ Pharmed</h1>
          </div>
          <div className="nav-links">
            <a className="nav-link text-xl" href="#">Home</a>
            <a className="nav-link text-xl" href="#aboutus">About us</a>
            <a className="nav-link text-xl" href="#product">Product</a>
            <a className="nav-link text-xl" href="#quality">Quality Standards</a>
            <a className="nav-link text-xl" href="#contactus">Contact us</a>
          </div>
        </div>
        <Divider className='z-50' />
      </nav>
    </>
  );
}

export default Navbar;


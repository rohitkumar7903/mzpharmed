import React from 'react';

function Distribution() {
  return (
    <>
      <div className="distbanner bg-cover bg-center  md:py-20">
        <span className="OurDistributionNetwork text-white font-poppins font-bold text-4xl md:text-5xl text-center md:text-left">Our Distribution Network</span>
      </div>

      <div className="SectionOfFlags grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-8"> {/* Responsive grid layout with adjusted padding */}
        <div className="Countrybox flex flex-col items-center">
          <div className="flagbox mb-2">
            <img className="flags hover:scale-110 transition duration-200 ease-in" src="src/assets/Mali.png" alt="Mali flag" />
          </div>
          <span className="text-white text-lg font-poppins font-semibold">Mali</span>
        </div>

        <div className="Countrybox flex flex-col items-center">
          <div className="flagbox mb-2">
            <img className="flags hover:scale-110 transition duration-200 ease-in" src="src/assets/Kenya.png" alt="Kenya flag" />
          </div>
          <span className="text-white text-lg font-poppins font-semibold">Kenya</span>
        </div>

        <div className="Countrybox flex flex-col items-center">
          <div className="flagbox mb-2">
            <img className="flags hover:scale-110 transition duration-200 ease-in" src="src/assets/Libya.png" alt="Libya flag" />
          </div>
          <span className="text-white text-lg font-poppins font-semibold">Libya</span>
        </div>

        <div className="Countrybox flex flex-col items-center">
          <div className="flagbox mb-2">
            <img className="flags hover:scale-110 transition duration-200 ease-in" src="src/assets/Ghana.png" alt="Ghana flag" />
          </div>
          <span className="text-white text-lg font-poppins font-semibold">Ghana</span>
        </div>

        <div className="Countrybox flex flex-col items-center">
          <div className="flagbox mb-2">
            <img className="flags hover:scale-110 transition duration-200 ease-in" src="src/assets/Morocco.png" alt="Morocco flag" />
          </div>
          <span className="text-white text-lg font-poppins font-semibold">Morocco</span>
        </div>

        <div className="Countrybox flex flex-col items-center">
          <div className="flagbox mb-2">
            <img className="flags hover:scale-110 transition duration-200 ease-in" src="src/assets/Tunisia.png" alt="Tunisia flag" />
          </div>
          <span className="text-white text-lg font-poppins font-semibold">Tunisia</span>
        </div>

        <div className="Countrybox flex flex-col items-center">
          <div className="flagbox mb-2">
            <img className="flags hover:scale-110 transition duration-200 ease-in" src="src/assets/Namibia.png" alt="Namibia flag" />
          </div>
          <span className="text-white text-lg font-poppins font-semibold">Namibia</span>
        </div>

        <div className="Countrybox flex flex-col items-center">
          <div className="flagbox mb-2">
            <img className="flags hover:scale-110 transition duration-200 ease-in" src="src/assets/Uganda.png" alt="Uganda flag" />
          </div>
          <span className="text-white text-lg font-poppins font-semibold">Uganda</span>
        </div>

        
      </div>
    </>
  );
}

export default Distribution;

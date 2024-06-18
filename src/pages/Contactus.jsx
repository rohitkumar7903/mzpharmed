import React from 'react';

function Contactus() {
  return (
    <div className="w-full h-[29em] bg-[#1d4249] flex">
      <div className="flex-1 bg-[#1d4249] p-8">
        <h1 className="text-3xl font-bold text-white text-center">Contact Us</h1>
        <h2 className="text-xl text-white text-center mt-2">FAQs</h2>
        <h2 className="text-xl text-white text-center mt-3">Contact Us</h2>
        <div className="mt-6 flex justify-center">
          <input
            id="email"
            name="email"
            className="w-[20em] h-[2.5em] p-2 rounded-lg"
            placeholder="Write your email"
            type="email"
          ></input>
        </div>
        <div className="mt-8 flex justify-center">
          <textarea
            id="comment"
            name="comment"
            className="w-[20em] h-[8em] p-2 rounded-lg"
            placeholder="Write your comment"
          ></textarea>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="w-36 h-12 bg-[#f4f0f0] text-black text-xl rounded-lg hover:bg-[#2b4183] hover:text-white transition duration-300 ease-in-out">Send</button>
        </div>
      </div>
      <div className="flex-1 bg-[#1d4249] p-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.8596205334566!2d73.18400893862871!3d19.207461328408098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79381caffffff%3A0x2844560233f492!2sMZ%20Pharmed%20LLP!5e0!3m2!1sen!2sin!4v1718366133771!5m2!1sen!2sin"
          width="600em"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-xl"
        ></iframe>
      </div>
    </div>
  );
}

export default Contactus;

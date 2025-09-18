import React, { useState } from 'react';
import { TextField, Button, } from '@mui/material';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

function Contactus22() {
  const { t } = useTranslation();
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

   
    const trimmedName = senderName.trim();
    const trimmedEmail = senderEmail.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError(t('Contactus.FillAllFields'));
      return;
    }

    const templateParams = {
      from_name: trimmedName,
      email_id: trimmedEmail,
      message: trimmedMessage,
    };

    emailjs.send(
      'service_2li3uuo',
      'template_v2nndy8',
      templateParams,
      '5iJSa0xOUOG7TNpAY'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert(t('Contactus.EmailSent'));
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    }, (err) => {
      console.log('FAILED...', err);
      setError(t('Contactus.EmailFailed'));
    });
  };

  return (   
    <div className="ccc">
      <div className="quicksetting">
        <h1 className="footerheads">{t('Contactus.GetInTouch')}</h1>
        <form onSubmit={handleSubmit} className="w-full ">
          <div className="mt-2 flex justify-start w-full">
            <TextField
              id="senderName"
              name="senderName"
              className="w-[20em] h-[3em] p-2 rounded-lg text-black bg-white"
              placeholder={t("Contactus.Name")}
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              type="text"
            />
          </div>
          <div className="mt-3 flex justify-start w-full">
            <TextField
              id="senderEmail"
              name="senderEmail"
              className="w-[20em] h-[3em] p-2 rounded-lg text-black bg-white"
              placeholder={t("Contactus.your email")}  
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="mt-3 flex justify-start w-full">
            <input
              id="message"
              name="message"
              className="w-[20em] h-[8em] p-1 rounded-lg text-black bg-white"
              placeholder={t("Contactus.Write your Comment")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="flex justify-left mt-3">
            <button type="submit" className="border w-30 h-10 border-[#2b4183] text-lg md:text-xl font-bold text-[#2b4183] rounded-lg bg-gray-200 hover:bg-[#2b4183] hover:text-white transition duration-500 px-4 py-2">
              {t("Contactus.Button")}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 w-full  ml-10 pl-12"> {/* Increased margin-top here */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.8596205334566!2d73.18400893862871!3d19.207461328408098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79381caffffff%3A0x2844560233f492!2sMZ%20Pharmed%20LLP!5e0!3m2!1sen!2sin!4v1718366133771!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contactus22;

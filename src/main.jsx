import React from 'react'
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import i18next from 'i18next';


const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <RouterProvider router = {router}/>
      </I18nextProvider>  
</React.StrictMode>,
)

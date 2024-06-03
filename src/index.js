import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/css/style.css'
import '../src/assets/css/media.css'
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { initReactI18next, I18nextProvider} from "react-i18next";

import globalEn from '../src/transitions/en/global.json'
import globalArm from '../src/transitions/arm/global.json'
import globalRu from '../src/transitions/ru/global.json'
import i18next from "i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                global:globalEn
            },
            arm: {
                global:globalArm
            },
            ru: {
                global:globalRu
            },
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

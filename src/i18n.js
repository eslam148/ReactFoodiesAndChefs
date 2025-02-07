import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './translation/en.json';
import arTranslation from './translation/ar.json';

// Translation resources
const resources = {
    en: {
        translation: enTranslation,
    },
    ar: {
        translation: arTranslation,
    },
};

i18n
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Pass i18n instance to react-i18next
    .init({
        resources,
        fallbackLng: 'en', // Default language
        interpolation: {
            escapeValue: false, // React already escapes strings
        },
    });

export default i18n;

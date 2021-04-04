import i18n from 'i18next';
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: require('./locales/en/translation.json')
    },
    ar: {
        translation: require('./locales/ar/translation.json')
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        react: {
            useSuspense: false
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

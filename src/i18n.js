import { createI18n } from 'vue-i18n';

const userLang = navigator.language || navigator.userLanguage;
const lang = userLang.startsWith('fr') ? 'fr' : 'en';

// Créer une instance de vue-i18n
const i18n = createI18n({
	locale: lang, // définir la langue par défaut
	fallbackLocale: 'en', // langue de repli si la langue préférée n'est pas disponible
});

export default i18n;

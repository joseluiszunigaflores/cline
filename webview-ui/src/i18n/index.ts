import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Importar traducciones
import en from "./locales/en.json"
import es from "./locales/es.json"

const resources = {
	en: {
		translation: en,
	},
	es: {
		translation: es,
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: "es", // idioma por defecto
	fallbackLng: "en", // idioma de respaldo

	interpolation: {
		escapeValue: false, // react ya escapa por defecto
	},

	// Configuración para desarrollo
	debug: false,

	// Configuración de namespace
	defaultNS: "translation",
	ns: ["translation"],
})

export default i18n

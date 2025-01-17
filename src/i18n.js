import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(resourcesToBackend((language, namespace) => import(`./lang/${language}/${namespace}.json`)))
  .use(LanguageDetector)
  .init({
    ns: ['translation', 'projects'],
    debug: false,
    fallbackLng: 'pt-BR',
})

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}

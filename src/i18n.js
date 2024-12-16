import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(LanguageDetector)
    .init({
        debug: false,
        fallbackLng: 'pt-br',
        resources: {
            'pt-BR': {
                translation: {
                    site_title: 'Portifólio de Sulivan Braga',
                    welcome: 'Olá, sou o Desenvolvedor Fullstack',
                    description: 'Construo coisas interessantes para a internet como <strong>Sites, Sistemas Web, APIs, Lojas Online</strong> e qualquer outra coisa possível.',
                    cta1: 'Conhecer meu trabalho',
                    cta2: 'Entrar em contato',
                    jobs: 'Meu trabalho',
                    close: 'Fechar',
                }
            },
            en: {
                translation: {
                    site_title: "Sulivan Braga's Portifolio",
                    welcome: "Hi, I'm the FullStack Developer",
                    description: "I build interesting things for the web like <strong>Websites, Web Apps, APIs, E-Commerces</strong> and whatever else possible.",
                    cta1: 'Discover my work',
                    cta2: 'Get in touch',
                    jobs: 'My work',
                    close: 'Close'
                }
            },
        }
    })

export default function (app) {
    app.use(I18NextVue, { i18next })
    return app
}
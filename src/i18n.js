import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next.use(LanguageDetector).init({
  debug: false,
  fallbackLng: 'pt-br',
  resources: {
    'pt-BR': {
      translation: {
        site_title: 'Portifólio de Sulivan Braga',
        welcome: 'Olá, sou o Desenvolvedor Fullstack',
        description:
          'Construo coisas interessantes para a internet como <strong>Sites, Sistemas Web, APIs, Lojas Online</strong> e qualquer outra coisa possível.',
        cta1: 'Conhecer meu trabalho',
        cta2: 'Entrar em contato',
        close: 'Fechar',
        jobs: 'Meu trabalho',
        skills: 'Habilidades',
        skills_description:
          'Trabalhei com uma variedade de linguagens ao longo dos anos mas me familiarizei mais com a stack PHP (Laravel) e JavasScript (Vue.js). Eis as tecnologias que me aperfeiçoei:',
        about_title: 'Quem sou eu',
        about_description:
          '<p>Sou Sulivan, um desenvolvedor web autodidata de São Paulo, com 30 anos de idade e mais de 13 anos de experiência prática em T.I. Meu primeiro contato com programação foi aos 8 anos, ao explorar a linguagem BASIC para criar jogos. Aos 11 anos, mergulhei no Adobe Flash, Photoshop e Illustrator, criando animações e experimentando com ActionScript, o que resultou no meu primeiro mini-jogo.</p><p>Durante um período, segui carreira em suporte e infraestrutura de TI, mas retomei meu foco na programação em 2015, especializando-me em PHP, HTML, CSS e JavaScript. Desde então, tenho desenvolvido sistemas web completos, landing pages e e-commerces.</p><p>Atualmente, mantenho dois sistemas SaaS em operação:</p><ul><li><strong>Sistema de Despachante</strong>: Backoffice integrado para gestão de clientes, utilizando Laravel + Vue.js.</li><li><strong>Sistema Multiusuário de Controle Empresarial</strong>: Inclui funcionalidades como fechamento de caixa, lançamentos de compras e extratos detalhados.</li></ul><p>Também mantenho projetos de destaque, como:</p><ul><li><strong>Portal Me Too Brasil</strong>: Plataforma de uma ONG internacional focada na proteção de mulheres e crianças contra abusos.</li><li><strong>Portal e E-commerce da Tuzzy E-Sports</strong>: Time emergente de e-sports com atuação em campeonatos internacionais de EAFC e Pokémon Unite.</li></ul><p>Confira mais detalhes e projetos na sessão "Projetos" do meu portfólio.</p>',
      },
    },
    en: {
      translation: {
        site_title: "Sulivan Braga's Portifolio",
        welcome: "Hi, I'm the FullStack Developer",
        description:
          'I build interesting things for the web like <strong>Websites, Web Apps, APIs, E-Commerces</strong> and whatever else possible.',
        cta1: 'Discover my work',
        cta2: 'Get in touch',
        close: 'Close',
        jobs: 'My work',
        skills: 'My Skills',
        skills_description:
          'I worked with many programming languages by the years but I got most familiar with the stack PHP (Laravel) and Vue.js. Here are the technologies I perfected:',
        about_title: 'Who am I',
        about_description: '<p>I’m Sulivan, a self-taught web developer from São Paulo, Brazil, 30 years old, with over 13 years of hands-on experience in technology. My first contact with programming was at the age of 8, exploring the BASIC language to create games. By 11, I was diving into Adobe Flash, Photoshop, and Illustrator, creating animations and experimenting with ActionScript, which resulted in my first mini-game.</p><p>After a period working in IT support and infrastructure, I returned to programming in 2015, specializing in PHP, HTML, CSS, and JavaScript. Since then, I’ve been developing complete web systems, landing pages, and e-commerce platforms.</p><p>Currently, I manage two SaaS systems:</p><ul><li><strong>Dispatcher System</strong>: A backoffice platform for client management, built with Laravel + Vue.js.</li><li><strong>Multi-user Business Control System</strong>: Includes features like cash flow management, purchase records, and detailed transaction reports.</li></ul><p>I also manage notable projects such as:</p><ul><li><strong>Me Too Brazil Portal</strong>: A platform for an internationally recognized NGO focused on protecting women and children from abuse.</li><li><strong>Tuzzy E-Sports Portal and E-Commerce</strong>: An emerging e-sports team competing in international EAFC and Pokémon Unite championships.</li></ul><p>For more details and projects, visit the "Projects" section of my portfolio.</p>',
      },
    },
    fr: {
      translation: {
        site_title: 'Portfolio de Sulivan Braga',
        welcome: 'Bonjour, je suis le Développeur Fullstack',
        description:
          'Je crée des choses intéressantes pour Internet comme <strong>Sites, Systèmes Web, APIs, Boutiques en ligne</strong> et tout autre projet possible.',
        cta1: 'Découvrir mon travail',
        cta2: 'Me contacter',
        close: 'Fermer',
        jobs: 'Mon travail',
        skills: 'Compétences',
        skills_description:
          "J'ai travaillé avec de nombreuses langages au fil des années, mais je me suis le plus familiarisé avec la stack PHP (Laravel) et Vue.js. Voici les technologies que j'ai maîtrisées :",
        about_title: 'Qui suis-je',
        about_description: "<p>Je m'appelle Sulivan, développeur web autodidacte originaire de São Paulo, au Brésil. J'ai 30 ans et plus de 13 ans d'expérience pratique en technologie. Mon premier contact avec la programmation remonte à l'âge de 8 ans, en explorant le langage BASIC pour créer des jeux. À 11 ans, je me suis plongé dans Adobe Flash, Photoshop et Illustrator, créant des animations et expérimentant avec ActionScript, ce qui m'a permis de réaliser mon premier mini-jeu.</p><p>Après une période dans le support et l'infrastructure informatique, je suis revenu à la programmation en 2015, en me spécialisant en PHP, HTML, CSS et JavaScript. Depuis, je développe des systèmes web complets, des landing pages et des plateformes e-commerce.</p><p>Actuellement, je gère deux systèmes SaaS :</p><ul><li><strong>Système de gestion de dossiers</strong> : Une plateforme backoffice pour la gestion des clients, développée avec Laravel + Vue.js.</li><li><strong>Système multi-utilisateurs de gestion d’entreprise</strong> : Inclut des fonctionnalités telles que la gestion de trésorerie, l’enregistrement des achats et des rapports détaillés de transactions.</li></ul><p>Je suis également responsable de projets importants tels que :</p><ul><li><strong>Portail Me Too Brazil</strong> : Une plateforme pour une ONG reconnue internationalement, dédiée à la protection des femmes et des enfants contre les abus.</li><li><strong>Portail et e-commerce Tuzzy E-Sports</strong> : Une équipe émergente dans le domaine de l’e-sport, participant à des championnats internationaux de EAFC et Pokémon Unite.</li></ul><p>Pour plus de détails et projets, rendez-vous dans la section 'Projets' de mon portfolio.</p>",
      },
    },
  },
})

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}

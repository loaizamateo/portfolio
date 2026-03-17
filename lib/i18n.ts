export type Lang = 'es' | 'en'

export const t = {
  nav: {
    about:      { es: 'sobre mí',    en: 'about' },
    projects:   { es: 'proyectos',   en: 'projects' },
    experience: { es: 'experiencia', en: 'experience' },
    contact:    { es: 'contacto',    en: 'contact' },
  },
  hero: {
    badge:    { es: 'Disponible para proyectos freelance', en: 'Available for freelance projects' },
    words:    {
      es: ['escalables.', 'que perduran.', 'con impacto.', 'con pasión.'],
      en: ['that scale.',  'that last.',    'with impact.',  'with passion.'],
    },
    desc:     { es: '+10 años construyendo productos', en: '+10 years building products' },
    at:       { es: 'Actualmente Senior Engineer en', en: 'Currently Senior Engineer at' },
    cta1:     { es: 'Ver proyectos',  en: 'See projects' },
    cta2:     { es: 'Contactar',      en: 'Contact' },
  },
  about: {
    label:    { es: 'sobre mí',                    en: 'about me' },
    title:    { es: 'Construyo software que escala', en: 'I build software that scales' },
    bio1:     {
      es: 'Ingeniero de Sistemas de la Universidad de Manizales con +10 años de experiencia desarrollando aplicaciones web y servicios cloud. Actualmente Senior Software Engineer en',
      en: 'Systems Engineer from Universidad de Manizales with +10 years of experience building web applications and cloud services. Currently Senior Software Engineer at',
    },
    bio1b:    { es: ', una de las compañías de ingeniería de software más grandes del mundo.', en: ', one of the largest software engineering companies in the world.' },
    bio2:     {
      es: 'Me especializo en JavaScript/TypeScript full stack, arquitecturas cloud en AWS y construcción de productos SaaS desde cero.',
      en: 'I specialize in JavaScript/TypeScript full stack, cloud architectures on AWS, and building SaaS products from scratch.',
    },
    bio3:     {
      es: 'Fuera del trabajo corporativo, construyo mis propios productos: un SaaS odontológico multi-tenant en producción y una app de división de gastos.',
      en: 'Outside corporate work, I build my own products: a multi-tenant dental SaaS in production and a bill-splitting app.',
    },
    bio4:     {
      es: 'Perfeccionista por naturaleza, me gusta planear bien antes de ejecutar. Bilingüe español/inglés.',
      en: 'A perfectionist by nature — I like planning well before executing. Bilingual Spanish/English.',
    },
    areas: {
      frontend:  { es: 'Frontend',         en: 'Frontend' },
      cloud:     { es: 'Cloud AWS',         en: 'Cloud AWS' },
      db:        { es: 'Bases de datos',    en: 'Databases' },
      devops:    { es: 'DevOps',            en: 'DevOps' },
    },
  },
  projects: {
    label:    { es: 'proyectos',               en: 'projects' },
    title:    { es: 'Lo que he construido',    en: "What I've built" },
    subtitle: { es: 'Productos propios en producción', en: 'Own products in production' },
    github:   { es: 'Ver más en GitHub',       en: 'See more on GitHub' },
    dental: {
      tagline: { es: 'SaaS odontológico multi-tenant', en: 'Multi-tenant dental SaaS' },
      desc:    {
        es: 'Plataforma completa para clínicas dentales: historia clínica digital, odontograma interactivo, gestión de citas, planes de tratamiento, consentimientos informados y facturación. Arquitectura multi-tenant con schema-per-tenant en PostgreSQL.',
        en: 'Complete platform for dental clinics: digital medical records, interactive odontogram, appointment management, treatment plans, informed consents and billing. Multi-tenant architecture with schema-per-tenant in PostgreSQL.',
      },
    },
    divide: {
      tagline: { es: 'App para dividir gastos entre amigos', en: 'Bill-splitting app for friends' },
      desc:    {
        es: 'Aplicación mobile-first para dividir gastos con amigos sin necesidad de registro. Link compartible por WhatsApp, split equitativo o por consumo, integración con Nequi deep link y dashboard del organizador con magic link.',
        en: 'Mobile-first app to split bills with friends with no sign-up required. Shareable WhatsApp link, equal or consumption-based split, Nequi deep link integration and organizer dashboard via magic link.',
      },
    },
  },
  experience: {
    label:    { es: 'experiencia',           en: 'experience' },
    title:    { es: '+10 años en la industria', en: '+10 years in the industry' },
    edu:      { es: 'educación',             en: 'education' },
    degrees: {
      umanizales: { es: 'Ingeniería de Sistemas y Telecomunicaciones', en: 'Systems and Telecommunications Engineering' },
      sena:       { es: 'Tecnología en Análisis y Desarrollo de Sistemas de Información', en: 'Technology in Information Systems Analysis and Development' },
    },
  },
  contact: {
    label:    { es: 'contacto',                    en: 'contact' },
    title:    { es: '¿Tienes un proyecto?',         en: 'Got a project?' },
    subtitle: { es: 'Estoy disponible para proyectos freelance, consultoría cloud y colaboraciones. Hablemos.', en: "I'm available for freelance projects, cloud consulting and collaborations. Let's talk." },
    wa:       { es: 'Escribir por WhatsApp',        en: 'Message on WhatsApp' },
    waMsg:    { es: 'Hola Mateo, vi tu portafolio y me gustaría contactarte.', en: 'Hi Mateo, I saw your portfolio and would like to get in touch.' },
  },
  recommendations: {
    label:    { es: 'recomendaciones', en: 'recommendations' },
    title:    { es: 'Lo que dicen de mí', en: 'What people say' },
    subtitle: { es: 'Recomendaciones de colegas y estudiantes en LinkedIn', en: 'Recommendations from colleagues and students on LinkedIn' },
    cta:      { es: 'Ver en LinkedIn', en: 'View on LinkedIn' },
  },
  footer: {
    copy: { es: 'Mateo Loaiza Rios', en: 'Mateo Loaiza Rios' },
  },
}

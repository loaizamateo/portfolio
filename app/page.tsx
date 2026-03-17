'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Code2, Cloud, Database, Cpu, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import { t } from '@/lib/i18n'

// ─── RECOMMENDATIONS DATA ─────────────────────────────────────────────────────

const RECS = [
  {
    name: 'Youngjae Heo',
    title: { es: 'CS @ University of Toronto', en: 'CS @ University of Toronto' },
    rel:   { es: 'Colega en EPAM Systems', en: 'Colleague at EPAM Systems' },
    avatar: 'YH',
    color: '#6366f1',
    text: {
      es: 'Trabajar con Mateo como desarrollador junior fue una experiencia invaluable. Es un verdadero experto en React, Node.js y AWS. Su pasión es evidente en cada proyecto: entrega trabajo innovador y meticulosamente detallado. Lo que realmente lo distingue es su disposición para apoyar y mentorear a quienes lo rodean. Paciente, accesible y siempre listo para compartir su conocimiento.',
      en: 'Working with Mateo as a junior developer has been an invaluable experience. Mateo is a true expert in React, Node.js, and AWS cloud development. His passion is evident in every project — innovative and meticulously detailed. What truly sets Mateo apart is his willingness to support and mentor those around him. Patient, approachable, and always ready to share his wealth of knowledge.',
    },
  },
  {
    name: 'Jonathan Giovanni Carrasco',
    title: { es: 'Analista Cloud | QA Automation | AWS', en: 'Cloud Analyst | QA Automation | AWS' },
    rel:   { es: 'Alumno en BeTek', en: 'Student at BeTek' },
    avatar: 'JC',
    color: '#3b82f6',
    text: {
      es: 'Tuve el placer de ser alumno de Mateo en el bootcamp de analista cloud de Betek. Su pasión por la enseñanza y su profundo conocimiento de AWS hicieron que conceptos complejos fueran fáciles de entender. Su dedicación al éxito de sus alumnos es excepcional: siempre dispuesto a ir más allá para asegurar que comprendan los conceptos y puedan aplicarlos en situaciones reales.',
      en: 'I had the pleasure of being Mateo\'s student in the Betek cloud analyst bootcamp. His passion for teaching and deep knowledge of AWS made complex concepts easy to understand. His dedication to student success is exceptional — always willing to go the extra mile to ensure concepts are understood and can be applied in real situations.',
    },
  },
  {
    name: 'Miguel Angel Martinez',
    title: { es: 'Software Developer @ Attention | Go · TypeScript · AWS', en: 'Software Developer @ Attention | Go · TypeScript · AWS' },
    rel:   { es: 'Alumno en BeTek', en: 'Student at BeTek' },
    avatar: 'MM',
    color: '#06b6d4',
    text: {
      es: 'Tuve el privilegio de aprender de Mateo durante mi formación como Analista Cloud. Su amplia experiencia y habilidad para explicar conceptos complejos de manera clara marcaron una gran diferencia. Su enfoque práctico y ejemplos del mundo real me ayudaron a conectar la teoría con su aplicación laboral. Gracias a su mentoría, adquirí conocimientos técnicos sólidos y una visión estratégica del entorno cloud.',
      en: 'I had the privilege of learning from Mateo during my Cloud Analyst training. His extensive experience and ability to explain complex concepts clearly made a huge difference. His practical approach and real-world examples helped me bridge theory and practice. Thanks to his mentorship, I gained solid technical knowledge and a strategic vision of the cloud environment.',
    },
  },
  {
    name: 'Yuriangel Sena',
    title: { es: 'Ingeniero de Datos | Python · AWS · GCP · Power BI', en: 'Data Engineer | Python · AWS · GCP · Power BI' },
    rel:   { es: 'Alumna en BeTek', en: 'Student at BeTek' },
    avatar: 'YS',
    color: '#10b981',
    text: {
      es: 'Mateo es un excelente instructor. Su mentoría en el curso de Analista Cloud en Betek me proporcionó una base sólida en cloud computing, AWS y GitHub. Su capacidad para explicar conceptos complejos de manera sencilla y su enfoque práctico hicieron el aprendizaje muy eficiente. Estuvo en todo el proceso, desde lo básico hasta proyectos complejos en la nube, siempre paciente y disponible.',
      en: 'Mateo is an excellent instructor. His mentorship in the Cloud Analyst course at Betek gave me a solid foundation in cloud computing, AWS and GitHub. His ability to explain complex concepts simply and his practical approach made learning very efficient. He was there throughout the entire process — from the basics to complex cloud projects — always patient and available.',
    },
  },
  {
    name: 'Lorena Jiménez Arias',
    title: { es: 'AWS SA Professional | Cloud Specialist | Speaker', en: 'AWS SA Professional | Cloud Specialist | Speaker' },
    rel:   { es: 'Colega en BeTek', en: 'Colleague at BeTek' },
    avatar: 'LJ',
    color: '#f59e0b',
    text: {
      es: 'Mateo es un excelente formador en computación en la nube. Su amplia experiencia, sólidos conocimientos y vocación por enseñar lo hacen un formador comprometido con el proceso de sus estudiantes. Fue un honor y una gran oportunidad trabajar con él para llevar la computación en la nube a más personas que buscan oportunidades en esta área de TI.',
      en: 'Mateo is an excellent cloud computing trainer. His extensive experience, solid knowledge and passion for teaching make him a trainer deeply committed to his students\' progress. It was an honor and a great opportunity to work alongside him to bring cloud computing to more people seeking opportunities in this IT field.',
    },
  },
  {
    name: 'Juan Pablo Huertas Nuñez',
    title: { es: 'Desarrollador Web | PHP · Laravel · React · TypeScript', en: 'Web Developer | PHP · Laravel · React · TypeScript' },
    rel:   { es: 'Compañero en Smart Data Contact', en: 'Teammate at Smart Data Contact' },
    avatar: 'JP',
    color: '#ec4899',
    text: {
      es: 'Trabajar con Mateo en Smart Data Contact fue una experiencia muy positiva. Siempre estuvo dispuesto a escuchar al equipo y a buscar soluciones prácticas para los retos que enfrentamos. Su manera de coordinar proyectos y mantenernos enfocados fue clave para cumplir los objetivos. Fue un gusto formar parte de su equipo.',
      en: 'Working with Mateo at Smart Data Contact was a very positive experience. He was always willing to listen to the team and find practical solutions to the challenges we faced. His way of coordinating projects and keeping us focused was key to meeting our objectives. It was a pleasure being part of his team.',
    },
  },
  {
    name: 'Johan Mateo Chiguachi Carmona',
    title: { es: 'Full-Stack Developer | PHP · Vue.js · Node.js · AWS', en: 'Full-Stack Developer | PHP · Vue.js · Node.js · AWS' },
    rel:   { es: 'Colega', en: 'Colleague' },
    avatar: 'JM',
    color: '#8b5cf6',
    text: {
      es: 'Conozco todo su proceso de aprendizaje — puedo decir que Mateo es una persona inteligente, responsable, dedicada y disciplinada, con un alto potencial para desempeñar un excelente trabajo.',
      en: 'I have witnessed his entire learning journey — I can say that Mateo is an intelligent, responsible, dedicated and disciplined person, with high potential to deliver excellent work.',
    },
  },
]

// ─── ANIMATION HELPERS ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const fadeIn  = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }

function Section({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} className={className} style={style}>
      {children}
    </motion.div>
  )
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────

const SKILLS = {
  'Frontend':       ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS'],
  'Backend':        ['Node.js', 'NestJS', 'Express', 'PHP', 'Python', 'Flask'],
  'Cloud & DevOps': ['AWS', 'Serverless Framework', 'GitHub Actions', 'Docker', 'CI/CD'],
  'Databases':      ['PostgreSQL', 'MongoDB', 'MySQL', 'TypeORM', 'Mongoose'],
}

const EXPERIENCE = [
  { company: 'EPAM Systems',        role: { es: 'Senior Software Engineer',         en: 'Senior Software Engineer' },         period: 'May 2022 — present',       duration: '~4 years', logo: '🌐' },
  { company: 'BeTek',               role: { es: 'Formador Cloud',                   en: 'Cloud Trainer' },                    period: 'Mar 2024 — Jan 2025',      duration: '11 months', logo: '☁️' },
  { company: 'Qrvey',               role: { es: 'Senior Backend Developer',          en: 'Senior Backend Developer' },          period: 'Nov 2021 — Apr 2022',      duration: '6 months', logo: '📊' },
  { company: 'Bancolombia / PRAGMA', role: { es: 'Ingeniero de Desarrollo',          en: 'Software Engineer' },                period: 'Jan 2021 — Nov 2021',      duration: '11 months', logo: '🏦' },
  { company: 'Smart Data Contact',  role: { es: 'Líder de Desarrollo de Software',   en: 'Software Development Lead' },        period: 'Apr 2018 — Jan 2021',      duration: '2y 10m', logo: '💡' },
  { company: 'Raddar',              role: { es: 'Software Engineer',                 en: 'Software Engineer' },                period: 'Feb 2020 — Dec 2020',      duration: '11 months', logo: '📡' },
  { company: 'TREE TECHS',         role: { es: 'Desarrollador y Diseñador Web',     en: 'Web Developer & Designer' },         period: 'Apr 2015 — Apr 2018',      duration: '3y 1m', logo: '🌳' },
]

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function Navbar() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks = [
    { id: 'sobre-mi',    label: t.nav.about[lang] },
    { id: 'proyectos',   label: t.nav.projects[lang] },
    { id: 'experiencia', label: t.nav.experience[lang] },
    { id: 'contacto',    label: t.nav.contact[lang] },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,14,26,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1e2d45' : 'none',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a href="#" whileHover={{ scale: 1.08 }}>
          <img src="/logo.jpg" alt="ML" className="rounded-lg" style={{ width: 36, height: 36, objectFit: 'cover' }} />
        </motion.a>
        <div className="flex items-center gap-6 text-sm" style={{ color: '#64748b' }}>
          {navLinks.map((item, i) => (
            <motion.a key={item.id} href={`#${item.id}`}
              className="hover:text-white transition-colors hidden sm:block"
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              whileHover={{ y: -2 }}
            >{item.label}</motion.a>
          ))}

          {/* Lang toggle */}
          <motion.button
            onClick={toggle}
            className="text-xs font-bold px-2.5 py-1 rounded-lg transition-colors"
            style={{ border: '1px solid #1e2d45', color: '#64748b' }}
            whileHover={{ borderColor: '#3b82f6', color: '#93c5fd', scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </motion.button>

          {[
            { href: 'https://github.com/loaizamateo', icon: <Github size={16} /> },
            { href: 'https://www.linkedin.com/in/mateo-loaiza-rios', icon: <Linkedin size={16} /> },
          ].map(({ href, icon }) => (
            <motion.a key={href} href={href} target="_blank" rel="noopener"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}
            >{icon}</motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { lang } = useLang()
  const { scrollY } = useScroll()
  const y       = useTransform(scrollY, [0, 500], [0, 80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const WORDS   = t.hero.words[lang]
  const [wordIdx, setWordIdx] = useState(0)
  useEffect(() => {
    setWordIdx(0)
    const timer = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2500)
    return () => clearInterval(timer)
  }, [lang])

  return (
    <motion.section style={{ y, opacity }} className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-5xl mx-auto w-full">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
          style={{ background: '#0f2040', border: '1px solid #1e3a5f', color: '#60a5fa' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {t.hero.badge[lang]}
        </motion.div>

        <motion.h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4 leading-none"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Mateo{' '}
          <span style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Loaiza
          </span>
        </motion.h1>

        <motion.p className="text-xl sm:text-2xl font-medium mb-6" style={{ color: '#94a3b8' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Full Stack Engineer · AWS Cloud Practitioner
        </motion.p>

        <motion.p className="text-base sm:text-lg max-w-2xl mb-10 leading-relaxed" style={{ color: '#64748b' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {t.hero.desc[lang]}{' '}
          <AnimatePresence mode="wait">
            <motion.span key={`${lang}-${wordIdx}`}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }} style={{ color: '#3b82f6', fontWeight: 600 }}>
              {WORDS[wordIdx]}
            </motion.span>
          </AnimatePresence>
          {' '}{t.hero.at[lang]}{' '}
          <span style={{ color: '#94a3b8' }}>EPAM Systems</span>.
        </motion.p>

        <motion.div className="flex flex-wrap gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <motion.a href="#proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px #3b82f640' }} whileTap={{ scale: 0.97 }}>
            {t.hero.cta1[lang]}
          </motion.a>
          <motion.a href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ border: '1px solid #1e2d45', color: '#94a3b8' }}
            whileHover={{ scale: 1.04, borderColor: '#3b82f6', color: '#fff' }} whileTap={{ scale: 0.97 }}>
            {t.hero.cta2[lang]}
          </motion.a>
        </motion.div>

        <motion.div className="flex flex-wrap gap-2" variants={stagger} initial="hidden" animate="show">
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'AWS', 'NestJS', 'PostgreSQL', 'Docker'].map(tech => (
            <motion.span key={tech} variants={fadeIn}
              className="px-3 py-1 text-xs rounded-full font-mono"
              style={{ background: '#111827', border: '1px solid #1e2d45', color: '#64748b' }}
              whileHover={{ borderColor: '#3b82f6', color: '#93c5fd', scale: 1.05 }}>
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div className="mt-16 flex justify-center" style={{ color: '#1e2d45' }}
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </motion.section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

function About() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const areas = [
    { icon: <Code2 size={20} />, label: t.about.areas.frontend[lang], desc: 'React, Node.js, TypeScript' },
    { icon: <Cloud size={20} />,    label: t.about.areas.cloud[lang],    desc: 'Serverless, Lambda, EC2, S3' },
    { icon: <Database size={20} />, label: t.about.areas.db[lang],       desc: 'PostgreSQL, MongoDB, MySQL' },
    { icon: <Cpu size={20} />,      label: t.about.areas.devops[lang],   desc: 'Docker, CI/CD, GitHub Actions' },
  ]

  return (
    <section id="sobre-mi" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <Section>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>{t.about.label[lang]}</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-12">{t.about.title[lang]}</h2>
        </Section>

        <Section>
          <div className="grid sm:grid-cols-3 gap-12 mb-16 items-start">
            <motion.div className="flex justify-center sm:justify-start"
              initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }} whileHover={{ scale: 1.03 }}>
              <img src="https://avatars.githubusercontent.com/u/12507783?v=4" alt="Mateo Loaiza Rios"
                className="rounded-2xl object-cover" style={{ width: 200, height: 200, border: '2px solid #1e2d45' }} />
            </motion.div>
            <div className="sm:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                <p>{t.about.bio1[lang]} <strong style={{ color: '#f1f5f9' }}>EPAM Systems</strong>{t.about.bio1b[lang]}</p>
                <p>{t.about.bio2[lang]}</p>
              </div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                <p>{t.about.bio3[lang]}</p>
                <p>{t.about.bio4[lang]}</p>
              </div>
            </div>
          </div>
        </Section>

        <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
          variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          {areas.map(({ icon, label, desc }) => (
            <motion.div key={label} variants={fadeUp}
              className="p-4 rounded-xl space-y-2"
              style={{ background: '#111827', border: '1px solid #1e2d45' }}
              whileHover={{ borderColor: '#3b82f640', y: -4, boxShadow: '0 8px 24px #3b82f615' }}
              transition={{ type: 'spring', stiffness: 300 }}>
              <div style={{ color: '#3b82f6' }}>{icon}</div>
              <p className="font-semibold text-sm">{label}</p>
              <p className="text-xs" style={{ color: '#475569' }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#3b82f6' }}>{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(s => (
                    <motion.span key={s} className="px-2 py-1 text-xs rounded-lg"
                      style={{ background: '#0f172a', border: '1px solid #1e2d45', color: '#94a3b8' }}
                      whileHover={{ scale: 1.08, borderColor: '#3b82f6', color: '#93c5fd' }}>{s}</motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </section>
  )
}

// ─── PROJECT CAROUSEL ─────────────────────────────────────────────────────────

function ProjectCarousel({ images, color }: { images: string[]; color: string }) {
  const [idx, setIdx] = useState(0)
  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const t = setTimeout(next, 3500)
    return () => clearTimeout(t)
  }, [idx, next])

  return (
    <div className="relative w-full overflow-hidden rounded-xl mb-4" style={{ aspectRatio: '16/9', background: '#0a0e1a' }}>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35 }} className="absolute inset-0">
          <Image src={images[idx]} alt={`screenshot-${idx}`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-1 backdrop-blur-sm"
            style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}>
            <ChevronLeft size={14} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 backdrop-blur-sm"
            style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}>
            <ChevronRight size={14} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ background: i === idx ? color : 'rgba(255,255,255,0.3)', transform: i === idx ? 'scale(1.3)' : 'scale(1)' }} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

function Projects() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const PROJECTS = [
    {
      name: 'DentalSystem',
      tagline: t.projects.dental.tagline[lang],
      description: t.projects.dental.desc[lang],
      stack: ['NestJS', 'React', 'PostgreSQL', 'TypeORM', 'Docker', 'AWS'],
      color: '#3b82f6', emoji: '🦷', url: 'https://dentalsystem.online',
      highlights: ['Multi-tenant', 'PDF', 'Odontogram', 'CI/CD'],
      screenshots: [
        '/screenshots/dental-system/02-dashboard.png',
        '/screenshots/dental-system/03-patients.png',
        '/screenshots/dental-system/04-appointments.png',
        '/screenshots/dental-system/01-login.png',
        '/screenshots/dental-system/05-treatment-plans.png',
      ],
    },
    {
      name: 'Divide',
      tagline: t.projects.divide.tagline[lang],
      description: t.projects.divide.desc[lang],
      stack: ['Next.js', 'Express', 'MongoDB', 'Railway', 'Vercel'],
      color: '#6366f1', emoji: '💸', url: 'https://divideapp.online',
      highlights: ['No sign-up', 'Nequi', 'Magic link', 'PWA'],
      screenshots: [
        '/screenshots/divide/01-home.png',
      ],
    },
  ]

  return (
    <section id="proyectos" className="py-24 px-6" style={{ background: '#0d1220' }} ref={ref}>
      <div className="max-w-5xl mx-auto">
        <Section>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>{t.projects.label[lang]}</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-3">{t.projects.title[lang]}</h2>
          <p className="text-base mb-12" style={{ color: '#64748b' }}>{t.projects.subtitle[lang]}</p>
        </Section>

        <motion.div className="grid sm:grid-cols-2 gap-6" variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          {PROJECTS.map(p => (
            <motion.div key={p.name} variants={fadeUp}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: '#111827', border: '1px solid #1e2d45' }}
              whileHover={{ y: -6, boxShadow: `0 0 0 1px ${p.color}30, 0 20px 40px ${p.color}15` }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
              {p.screenshots && p.screenshots.length > 0 && (
                <ProjectCarousel images={p.screenshots} color={p.color} />
              )}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <motion.span className="text-3xl" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }} transition={{ duration: 0.4 }}>
                    {p.emoji}
                  </motion.span>
                  <div>
                    <h3 className="font-black text-lg">{p.name}</h3>
                    <p className="text-xs" style={{ color: '#64748b' }}>{p.tagline}</p>
                  </div>
                </div>
                <motion.a href={p.url} target="_blank" rel="noopener" style={{ color: '#475569' }}
                  whileHover={{ color: '#fff', scale: 1.2, rotate: 10 }}>
                  <ExternalLink size={16} />
                </motion.a>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.highlights.map(h => (
                  <span key={h} className="px-2 py-0.5 text-xs rounded-full font-medium"
                    style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}>{h}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: '#1e2d45' }}>
                {p.stack.map(s => (
                  <span key={s} className="text-xs font-mono" style={{ color: '#475569' }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Section>
          <div className="mt-8 text-center">
            <motion.a href="https://github.com/loaizamateo" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 text-sm" style={{ color: '#64748b' }}
              whileHover={{ color: '#fff', scale: 1.05 }}>
              <Github size={16} />{t.projects.github[lang]}
            </motion.a>
          </div>
        </Section>
      </div>
    </section>
  )
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

function Experience() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experiencia" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <Section>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>{t.experience.label[lang]}</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-12">{t.experience.title[lang]}</h2>
        </Section>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: '#1e2d45' }} />
          <motion.div className="space-y-6" variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            {EXPERIENCE.map((exp, i) => (
              <motion.div key={i} variants={fadeUp} className="relative flex gap-6 pl-12">
                <motion.div className="absolute left-0 w-9 h-9 rounded-full flex items-center justify-center text-lg"
                  style={{ background: '#111827', border: '1px solid #1e2d45' }}
                  whileHover={{ scale: 1.15, borderColor: '#3b82f6' }}>
                  {exp.logo}
                </motion.div>
                <div className="flex-1 pb-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="font-bold">{exp.role[lang]}</p>
                      <p className="text-sm" style={{ color: '#3b82f6' }}>{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs" style={{ color: '#475569' }}>{exp.period}</p>
                      <p className="text-xs font-medium" style={{ color: '#64748b' }}>{exp.duration}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 pt-16" style={{ borderTop: '1px solid #1e2d45' }}>
          <Section>
            <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: '#3b82f6' }}>{t.experience.edu[lang]}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { school: 'Universidad de Manizales', degree: t.experience.degrees.umanizales[lang], period: '2016 — 2021' },
                { school: 'SENA',                    degree: t.experience.degrees.sena[lang],        period: '2014 — 2016' },
              ].map(e => (
                <motion.div key={e.school} className="p-4 rounded-xl"
                  style={{ background: '#111827', border: '1px solid #1e2d45' }}
                  whileHover={{ borderColor: '#3b82f640', y: -3 }}>
                  <p className="font-semibold">{e.school}</p>
                  <p className="text-sm mt-1" style={{ color: '#94a3b8' }}>{e.degree}</p>
                  <p className="text-xs mt-1" style={{ color: '#475569' }}>{e.period}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function Contact() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const waLink = `https://wa.me/573128423580?text=${encodeURIComponent(t.contact.waMsg[lang])}`

  return (
    <section id="contacto" className="py-24 px-6" style={{ background: '#0d1220' }} ref={ref}>
      <div className="max-w-5xl mx-auto">
        <Section>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>{t.contact.label[lang]}</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">{t.contact.title[lang]}</h2>
          <p className="text-base mb-12 max-w-xl" style={{ color: '#64748b' }}>{t.contact.subtitle[lang]}</p>
        </Section>

        <motion.div className="grid sm:grid-cols-3 gap-4 mb-10" variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          {[
            { icon: <Mail size={18} />,    label: 'Email',     value: 'loaizamateo1227@gmail.com', href: 'mailto:loaizamateo1227@gmail.com' },
            { icon: <Phone size={18} />,   label: 'WhatsApp',  value: '+57 312 842 3580',           href: waLink },
            { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'mateo-loaiza-rios',          href: 'https://www.linkedin.com/in/mateo-loaiza-rios' },
          ].map(c => (
            <motion.a key={c.label} href={c.href} target="_blank" rel="noopener" variants={fadeUp}
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: '#111827', border: '1px solid #1e2d45' }}
              whileHover={{ borderColor: '#3b82f6', y: -3, boxShadow: '0 8px 24px #3b82f615' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#0f2040', color: '#3b82f6' }}>{c.icon}</div>
              <div>
                <p className="text-xs" style={{ color: '#475569' }}>{c.label}</p>
                <p className="text-sm font-medium truncate">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <Section>
          <motion.a href={waLink} target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px #25D36640' }} whileTap={{ scale: 0.97 }}>
            <span>💬</span>{t.contact.wa[lang]}
          </motion.a>
        </Section>
      </div>
    </section>
  )
}

// ─── RECOMMENDATIONS ─────────────────────────────────────────────────────────

function Recommendations() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive]     = useState(0)
  const [slideDir, setSlideDir] = useState(1)

  const go = (next: number) => {
    setSlideDir(next > active ? 1 : -1)
    setActive(next)
  }

  const rec = RECS[active]

  return (
    <section id="recomendaciones" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <Section>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>
            {t.recommendations.label[lang]}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-3">{t.recommendations.title[lang]}</h2>
          <p className="text-base mb-12" style={{ color: '#64748b' }}>{t.recommendations.subtitle[lang]}</p>
        </Section>

        {/* Avatar selector */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}
        >
          {RECS.map((r, i) => (
            <motion.button
              key={r.name} variants={fadeIn}
              onClick={() => go(i)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all"
              style={{
                background: active === i ? `${r.color}20` : '#111827',
                border: `1px solid ${active === i ? r.color : '#1e2d45'}`,
                color: active === i ? r.color : '#64748b',
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ background: `${r.color}25`, color: r.color }}>
                {r.avatar}
              </span>
              <span className="hidden sm:block">{r.name.split(' ')[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Quote card */}
        <AnimatePresence mode="wait" custom={slideDir}>
          <motion.div
            key={active}
            custom={slideDir}
            variants={{
              enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
              center: { opacity: 1, x: 0 },
              exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
            }}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.35, ease: 'easeOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_e, info) => {
              if (info.offset.x < -50)      go((active + 1) % RECS.length)
              else if (info.offset.x > 50)  go((active - 1 + RECS.length) % RECS.length)
            }}
            className="rounded-2xl p-8 cursor-grab active:cursor-grabbing select-none"
            style={{ background: '#111827', border: `1px solid ${rec.color}30`, touchAction: 'pan-y' }}
          >
            {/* Quote mark */}
            <div className="text-5xl leading-none mb-4 font-serif" style={{ color: rec.color, opacity: 0.4 }}>"</div>

            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#cbd5e1' }}>
              {rec.text[lang]}
            </p>

            <div className="flex items-center gap-4 pt-6" style={{ borderTop: '1px solid #1e2d45' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                style={{ background: `${rec.color}20`, color: rec.color, border: `2px solid ${rec.color}40` }}>
                {rec.avatar}
              </div>
              <div>
                <p className="font-bold">{rec.name}</p>
                <p className="text-sm" style={{ color: '#64748b' }}>{rec.title[lang]}</p>
                <p className="text-xs mt-0.5" style={{ color: rec.color }}>{rec.rel[lang]}</p>
              </div>
              <motion.a
                href="https://www.linkedin.com/in/mateo-loaiza-rios/details/recommendations/"
                target="_blank" rel="noopener"
                className="ml-auto inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg"
                style={{ border: '1px solid #1e2d45', color: '#64748b' }}
                whileHover={{ borderColor: '#0077b5', color: '#0077b5', scale: 1.04 }}
              >
                <Linkedin size={13} />
                {t.recommendations.cta[lang]}
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {RECS.map((r, i) => (
            <button key={i} onClick={() => go(i)}>
              <motion.div
                className="rounded-full"
                animate={{ width: active === i ? 20 : 8, background: active === i ? r.color : '#1e2d45' }}
                style={{ height: 8 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-8 px-6 text-center text-xs" style={{ color: '#334155', borderTop: '1px solid #1e2d45' }}>
      <p>© {new Date().getFullYear()} Mateo Loaiza Rios</p>
    </footer>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Recommendations />
      <Contact />
      <Footer />
    </>
  )
}

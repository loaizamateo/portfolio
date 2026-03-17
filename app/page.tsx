'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Code2, Cloud, Database, Cpu } from 'lucide-react'

// ─── ANIMATION HELPERS ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5 } },
}

function Section({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SKILLS = {
  'Frontend': ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS'],
  'Backend': ['Node.js', 'NestJS', 'Express', 'PHP', 'Python', 'Flask'],
  'Cloud & DevOps': ['AWS', 'Serverless Framework', 'GitHub Actions', 'Docker', 'CI/CD'],
  'Bases de datos': ['PostgreSQL', 'MongoDB', 'MySQL', 'TypeORM', 'Mongoose'],
}

const PROJECTS = [
  {
    name: 'DentalSystem',
    tagline: 'SaaS odontológico multi-tenant',
    description: 'Plataforma completa para clínicas dentales: historia clínica digital, odontograma interactivo, gestión de citas, planes de tratamiento, consentimientos informados y facturación. Arquitectura multi-tenant con schema-per-tenant en PostgreSQL.',
    stack: ['NestJS', 'React', 'PostgreSQL', 'TypeORM', 'Docker', 'AWS'],
    color: '#3b82f6',
    emoji: '🦷',
    url: 'https://dentalsystem.online',
    highlights: ['Multi-tenant', 'Historia clínica PDF', 'Odontograma SVG', 'CI/CD'],
  },
  {
    name: 'Divide',
    tagline: 'App para dividir gastos entre amigos',
    description: 'Aplicación mobile-first para dividir gastos con amigos sin necesidad de registro. Link compartible por WhatsApp, split equitativo o por consumo, integración con Nequi deep link y dashboard del organizador con magic link.',
    stack: ['Next.js', 'Express', 'MongoDB', 'Railway', 'Vercel'],
    color: '#6366f1',
    emoji: '💸',
    url: 'https://divideapp.online',
    highlights: ['Sin registro', 'Nequi deep link', 'Magic link', 'PWA'],
  },
]

const EXPERIENCE = [
  { company: 'EPAM Systems', role: 'Senior Software Engineer', period: 'mayo 2022 — presente', duration: '~4 años', logo: '🌐' },
  { company: 'BeTek', role: 'Formador Cloud', period: 'mar 2024 — ene 2025', duration: '11 meses', logo: '☁️' },
  { company: 'Qrvey', role: 'Senior Backend Developer', period: 'nov 2021 — abr 2022', duration: '6 meses', logo: '📊' },
  { company: 'Bancolombia / PRAGMA', role: 'Ingeniero de Desarrollo', period: 'ene 2021 — nov 2021', duration: '11 meses', logo: '🏦' },
  { company: 'Smart Data Contact', role: 'Líder de Desarrollo de Software', period: 'abr 2018 — ene 2021', duration: '2 años 10 meses', logo: '💡' },
  { company: 'Raddar', role: 'Software Engineer', period: 'feb 2020 — dic 2020', duration: '11 meses', logo: '📡' },
  { company: 'TREE TECHS', role: 'Desarrollador y Diseñador Web', period: 'abr 2015 — abr 2018', duration: '3 años 1 mes', logo: '🌳' },
]

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

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
        <motion.span
          className="font-bold text-sm"
          style={{ color: '#3b82f6' }}
          whileHover={{ scale: 1.1 }}
        >ML</motion.span>
        <div className="flex items-center gap-6 text-sm" style={{ color: '#64748b' }}>
          {['sobre-mi', 'proyectos', 'experiencia', 'contacto'].map((s, i) => (
            <motion.a
              key={s} href={`#${s}`}
              className="hover:text-white transition-colors capitalize hidden sm:block"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              whileHover={{ y: -2 }}
            >
              {s.replace('-', ' ')}
            </motion.a>
          ))}
          {[
            { href: 'https://github.com/loaizamateo', icon: <Github size={16} /> },
            { href: 'https://www.linkedin.com/in/mateo-loaiza-rios', icon: <Linkedin size={16} /> },
          ].map(({ href, icon }) => (
            <motion.a key={href} href={href} target="_blank" rel="noopener"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >{icon}</motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const WORDS = ['escalables.', 'que perduran.', 'con impacto.', 'con pasión.']
  const [wordIdx, setWordIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <motion.section
      style={{ y, opacity }}
      className="min-h-screen flex flex-col justify-center px-6 pt-16"
    >
      <div className="max-w-5xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
          style={{ background: '#0f2040', border: '1px solid #1e3a5f', color: '#60a5fa' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Disponible para proyectos freelance
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl font-black tracking-tight mb-4 leading-none"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Mateo{' '}
          <span style={{
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Loaiza</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl font-medium mb-6"
          style={{ color: '#94a3b8' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full Stack Engineer · AWS Cloud Practitioner
        </motion.p>

        {/* Rotating words */}
        <motion.p
          className="text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
          style={{ color: '#64748b' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          +10 años construyendo productos{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ color: '#3b82f6', fontWeight: 600 }}
            >
              {WORDS[wordIdx]}
            </motion.span>
          </AnimatePresence>
          {' '}Especializado en JavaScript/TypeScript y cloud AWS. Actualmente Senior Engineer en{' '}
          <span style={{ color: '#94a3b8' }}>EPAM Systems</span>.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a href="#proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px #3b82f640' }}
            whileTap={{ scale: 0.97 }}
          >
            Ver proyectos
          </motion.a>
          <motion.a href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ border: '1px solid #1e2d45', color: '#94a3b8' }}
            whileHover={{ scale: 1.04, borderColor: '#3b82f6', color: '#fff' }}
            whileTap={{ scale: 0.97 }}
          >
            Contactar
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2"
          variants={stagger} initial="hidden" animate="show"
        >
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'AWS', 'NestJS', 'PostgreSQL', 'Docker'].map(t => (
            <motion.span key={t} variants={fadeIn}
              className="px-3 py-1 text-xs rounded-full font-mono"
              style={{ background: '#111827', border: '1px solid #1e2d45', color: '#64748b' }}
              whileHover={{ borderColor: '#3b82f6', color: '#93c5fd', scale: 1.05 }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          style={{ color: '#1e2d45' }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </motion.section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

function About() {
  const icons = [
    { icon: <Code2 size={20} />, label: 'Full Stack', desc: 'React, Node.js, TypeScript' },
    { icon: <Cloud size={20} />, label: 'Cloud AWS', desc: 'Serverless, Lambda, EC2, S3' },
    { icon: <Database size={20} />, label: 'Bases de datos', desc: 'PostgreSQL, MongoDB, MySQL' },
    { icon: <Cpu size={20} />, label: 'DevOps', desc: 'Docker, CI/CD, GitHub Actions' },
  ]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre-mi" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <Section>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>sobre mí</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-12">Construyo software que escala</h2>
        </Section>

        <Section>
          <div className="grid sm:grid-cols-3 gap-12 mb-16 items-start">
            <motion.div
              className="flex justify-center sm:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/12507783?v=4"
                alt="Mateo Loaiza Rios"
                className="rounded-2xl object-cover"
                style={{ width: 200, height: 200, border: '2px solid #1e2d45' }}
              />
            </motion.div>
            <div className="sm:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                <p>Ingeniero de Sistemas de la Universidad de Manizales con +10 años de experiencia desarrollando aplicaciones web y servicios cloud. Actualmente Senior Software Engineer en <strong style={{ color: '#f1f5f9' }}>EPAM Systems</strong>.</p>
                <p>Me especializo en JavaScript/TypeScript full stack, arquitecturas cloud en AWS y construcción de productos SaaS desde cero.</p>
              </div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                <p>Fuera del trabajo corporativo, construyo mis propios productos: un SaaS odontológico multi-tenant en producción y una app de división de gastos.</p>
                <p>Perfeccionista por naturaleza, me gusta planear bien antes de ejecutar. Bilingüe español/inglés.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Area cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
          variants={stagger} initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {icons.map(({ icon, label, desc }) => (
            <motion.div key={label} variants={fadeUp}
              className="p-4 rounded-xl space-y-2"
              style={{ background: '#111827', border: '1px solid #1e2d45' }}
              whileHover={{ borderColor: '#3b82f640', y: -4, boxShadow: '0 8px 24px #3b82f615' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div style={{ color: '#3b82f6' }}>{icon}</div>
              <p className="font-semibold text-sm">{label}</p>
              <p className="text-xs" style={{ color: '#475569' }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#3b82f6' }}>{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(s => (
                    <motion.span key={s}
                      className="px-2 py-1 text-xs rounded-lg"
                      style={{ background: '#0f172a', border: '1px solid #1e2d45', color: '#94a3b8' }}
                      whileHover={{ scale: 1.08, borderColor: '#3b82f6', color: '#93c5fd' }}
                    >{s}</motion.span>
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

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proyectos" className="py-24 px-6" style={{ background: '#0d1220' }} ref={ref}>
      <div className="max-w-5xl mx-auto">
        <Section>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>proyectos</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-3">Lo que he construido</h2>
          <p className="text-base mb-12" style={{ color: '#64748b' }}>Productos propios en producción</p>
        </Section>

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={stagger} initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {PROJECTS.map(p => (
            <motion.div key={p.name} variants={fadeUp}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: '#111827', border: '1px solid #1e2d45' }}
              whileHover={{ y: -6, boxShadow: `0 0 0 1px ${p.color}30, 0 20px 40px ${p.color}15` }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
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
                <motion.a href={p.url} target="_blank" rel="noopener"
                  style={{ color: '#475569' }}
                  whileHover={{ color: '#fff', scale: 1.2, rotate: 10 }}
                >
                  <ExternalLink size={16} />
                </motion.a>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.highlights.map(h => (
                  <span key={h} className="px-2 py-0.5 text-xs rounded-full font-medium"
                    style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}>
                    {h}
                  </span>
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
              className="inline-flex items-center gap-2 text-sm"
              style={{ color: '#64748b' }}
              whileHover={{ color: '#fff', scale: 1.05 }}
            >
              <Github size={16} />
              Ver más en GitHub
            </motion.a>
          </div>
        </Section>
      </div>
    </section>
  )
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experiencia" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <Section>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>experiencia</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-12">+10 años en la industria</h2>
        </Section>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: '#1e2d45' }} />
          <motion.div
            className="space-y-6"
            variants={stagger} initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {EXPERIENCE.map((exp, i) => (
              <motion.div key={i} variants={fadeUp} className="relative flex gap-6 pl-12">
                <motion.div
                  className="absolute left-0 w-9 h-9 rounded-full flex items-center justify-center text-lg"
                  style={{ background: '#111827', border: '1px solid #1e2d45' }}
                  whileHover={{ scale: 1.15, borderColor: '#3b82f6' }}
                >
                  {exp.logo}
                </motion.div>
                <div className="flex-1 pb-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="font-bold">{exp.role}</p>
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

        {/* Education */}
        <div className="mt-16 pt-16" style={{ borderTop: '1px solid #1e2d45' }}>
          <Section>
            <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: '#3b82f6' }}>educación</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { school: 'Universidad de Manizales', degree: 'Ingeniería de Sistemas y Telecomunicaciones', period: '2016 — 2021' },
                { school: 'SENA', degree: 'Tecnología en Análisis y Desarrollo de Sistemas de Información', period: '2014 — 2016' },
              ].map(e => (
                <motion.div key={e.school}
                  className="p-4 rounded-xl"
                  style={{ background: '#111827', border: '1px solid #1e2d45' }}
                  whileHover={{ borderColor: '#3b82f640', y: -3 }}
                >
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
  const waLink = `https://wa.me/573128423580?text=${encodeURIComponent('Hola Mateo, vi tu portafolio y me gustaría contactarte.')}`
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contacto" className="py-24 px-6" style={{ background: '#0d1220' }} ref={ref}>
      <div className="max-w-5xl mx-auto">
        <Section>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>contacto</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">¿Tienes un proyecto?</h2>
          <p className="text-base mb-12 max-w-xl" style={{ color: '#64748b' }}>
            Estoy disponible para proyectos freelance, consultoría cloud y colaboraciones. Hablemos.
          </p>
        </Section>

        <motion.div
          className="grid sm:grid-cols-3 gap-4 mb-10"
          variants={stagger} initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {[
            { icon: <Mail size={18} />, label: 'Email', value: 'loaizamateo1227@gmail.com', href: 'mailto:loaizamateo1227@gmail.com' },
            { icon: <Phone size={18} />, label: 'WhatsApp', value: '+57 312 842 3580', href: waLink },
            { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'mateo-loaiza-rios', href: 'https://www.linkedin.com/in/mateo-loaiza-rios' },
          ].map(c => (
            <motion.a key={c.label} href={c.href} target="_blank" rel="noopener"
              variants={fadeUp}
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: '#111827', border: '1px solid #1e2d45' }}
              whileHover={{ borderColor: '#3b82f6', y: -3, boxShadow: '0 8px 24px #3b82f615' }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#0f2040', color: '#3b82f6' }}>
                {c.icon}
              </div>
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
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px #25D36640' }}
            whileTap={{ scale: 0.97 }}
          >
            <span>💬</span>
            Escribir por WhatsApp
          </motion.a>
        </Section>
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
      <Contact />
      <Footer />
    </>
  )
}

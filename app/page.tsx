'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Code2, Cloud, Database, Cpu } from 'lucide-react'

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
  {
    company: 'EPAM Systems',
    role: 'Senior Software Engineer',
    period: 'mayo 2022 — presente',
    duration: '~4 años',
    logo: '🌐',
  },
  {
    company: 'BeTek',
    role: 'Formador Cloud',
    period: 'mar 2024 — ene 2025',
    duration: '11 meses',
    logo: '☁️',
  },
  {
    company: 'Qrvey',
    role: 'Senior Backend Developer',
    period: 'nov 2021 — abr 2022',
    duration: '6 meses',
    logo: '📊',
  },
  {
    company: 'Bancolombia / PRAGMA',
    role: 'Ingeniero de Desarrollo',
    period: 'ene 2021 — nov 2021',
    duration: '11 meses',
    logo: '🏦',
  },
  {
    company: 'Smart Data Contact',
    role: 'Líder de Desarrollo de Software',
    period: 'abr 2018 — ene 2021',
    duration: '2 años 10 meses',
    logo: '💡',
  },
  {
    company: 'Raddar',
    role: 'Software Engineer',
    period: 'feb 2020 — dic 2020',
    duration: '11 meses',
    logo: '📡',
  },
  {
    company: 'TREE TECHS',
    role: 'Desarrollador y Diseñador Web',
    period: 'abr 2015 — abr 2018',
    duration: '3 años 1 mes',
    logo: '🌳',
  },
]

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,14,26,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1e2d45' : 'none',
      }}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-sm" style={{ color: '#3b82f6' }}>ML</span>
        <div className="flex items-center gap-6 text-sm" style={{ color: '#64748b' }}>
          {['sobre-mi', 'proyectos', 'experiencia', 'contacto'].map(s => (
            <a key={s} href={`#${s}`}
              className="hover:text-white transition-colors capitalize hidden sm:block">
              {s.replace('-', ' ')}
            </a>
          ))}
          <a href="https://github.com/loaizamateo" target="_blank" rel="noopener"
            className="hover:text-white transition-colors">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/mateo-loaiza-rios" target="_blank" rel="noopener"
            className="hover:text-white transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, #1e3a5f22, transparent)' }}>
      <div className="max-w-5xl mx-auto w-full">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
          style={{ background: '#0f2040', border: '1px solid #1e3a5f', color: '#60a5fa' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Disponible para proyectos freelance
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4 leading-none">
          Mateo{' '}
          <span style={{
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Loaiza</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl font-medium mb-6" style={{ color: '#94a3b8' }}>
          Full Stack Engineer · AWS Cloud Practitioner
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg max-w-2xl mb-10 leading-relaxed" style={{ color: '#64748b' }}>
          +10 años construyendo productos escalables. Especializado en JavaScript/TypeScript,
          arquitecturas cloud en AWS y ecosistema Node.js. Actualmente Senior Engineer en{' '}
          <span style={{ color: '#94a3b8' }}>EPAM Systems</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-16">
          <a href="#proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
            Ver proyectos
          </a>
          <a href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            style={{ border: '1px solid #1e2d45', color: '#94a3b8', background: 'transparent' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#3b82f6')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e2d45')}
          >
            Contactar
          </a>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'AWS', 'NestJS', 'PostgreSQL', 'Docker'].map(t => (
            <span key={t} className="px-3 py-1 text-xs rounded-full font-mono"
              style={{ background: '#111827', border: '1px solid #1e2d45', color: '#64748b' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex justify-center animate-bounce" style={{ color: '#1e2d45' }}>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  )
}

function About() {
  const icons = [
    { icon: <Code2 size={20} />, label: 'Full Stack', desc: 'React, Node.js, TypeScript' },
    { icon: <Cloud size={20} />, label: 'Cloud AWS', desc: 'Serverless, Lambda, EC2, S3' },
    { icon: <Database size={20} />, label: 'Bases de datos', desc: 'PostgreSQL, MongoDB, MySQL' },
    { icon: <Cpu size={20} />, label: 'DevOps', desc: 'Docker, CI/CD, GitHub Actions' },
  ]

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>sobre mí</p>
        <h2 className="text-3xl sm:text-4xl font-black mb-12">Construyo software que escala</h2>

        <div className="grid sm:grid-cols-3 gap-12 mb-16 items-start">
          {/* Foto */}
          <div className="flex justify-center sm:justify-start">
            <img
              src="https://avatars.githubusercontent.com/u/12507783?v=4"
              alt="Mateo Loaiza Rios"
              className="rounded-2xl object-cover"
              style={{ width: 200, height: 200, border: '2px solid #1e2d45' }}
            />
          </div>

          {/* Bio */}
          <div className="sm:col-span-2 grid sm:grid-cols-2 gap-8">
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#94a3b8' }}>
              <p>
                Ingeniero de Sistemas de la Universidad de Manizales con +10 años de experiencia
                desarrollando aplicaciones web y servicios cloud. Actualmente Senior Software Engineer
                en <strong style={{ color: '#f1f5f9' }}>EPAM Systems</strong>, una de las compañías de
                ingeniería de software más grandes del mundo.
              </p>
              <p>
                Me especializo en JavaScript/TypeScript full stack, arquitecturas cloud en AWS y
                construcción de productos SaaS desde cero. También he sido formador cloud, enseñando
                tecnologías AWS a equipos de desarrollo.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#94a3b8' }}>
              <p>
                Fuera del trabajo corporativo, construyo mis propios productos: un SaaS odontológico
                multi-tenant en producción y una app de división de gastos con miles de potenciales usuarios.
              </p>
              <p>
                Perfeccionista por naturaleza, me gusta planear bien antes de ejecutar y entregar con
                calidad. Bilingüe español/inglés.
              </p>
            </div>
          </div>
        </div>

        {/* Cards de áreas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {icons.map(({ icon, label, desc }) => (
            <div key={label} className="p-4 rounded-xl space-y-2 transition-colors"
              style={{ background: '#111827', border: '1px solid #1e2d45' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#3b82f620')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e2d45')}
            >
              <div style={{ color: '#3b82f6' }}>{icon}</div>
              <p className="font-semibold text-sm">{label}</p>
              <p className="text-xs" style={{ color: '#475569' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#3b82f6' }}>{cat}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(s => (
                  <span key={s} className="px-2 py-1 text-xs rounded-lg"
                    style={{ background: '#0f172a', border: '1px solid #1e2d45', color: '#94a3b8' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6" style={{ background: '#0d1220' }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>proyectos</p>
        <h2 className="text-3xl sm:text-4xl font-black mb-3">Lo que he construido</h2>
        <p className="text-base mb-12" style={{ color: '#64748b' }}>Productos propios en producción</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map(p => (
            <div key={p.name}
              className="group rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#111827', border: '1px solid #1e2d45' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 0 1px ${p.color}30, 0 20px 40px ${p.color}15`)}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{p.emoji}</span>
                  <div>
                    <h3 className="font-black text-lg">{p.name}</h3>
                    <p className="text-xs" style={{ color: '#64748b' }}>{p.tagline}</p>
                  </div>
                </div>
                <a href={p.url} target="_blank" rel="noopener"
                  className="transition-colors hover:text-white"
                  style={{ color: '#475569' }}>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{p.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {p.highlights.map(h => (
                  <span key={h} className="px-2 py-0.5 text-xs rounded-full font-medium"
                    style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: '#1e2d45' }}>
                {p.stack.map(s => (
                  <span key={s} className="text-xs font-mono" style={{ color: '#475569' }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-8 text-center">
          <a href="https://github.com/loaizamateo" target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: '#64748b' }}>
            <Github size={16} />
            Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>experiencia</p>
        <h2 className="text-3xl sm:text-4xl font-black mb-12">+10 años en la industria</h2>

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: '#1e2d45' }} />

          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative flex gap-6 pl-12">
                {/* Dot */}
                <div className="absolute left-0 w-9 h-9 rounded-full flex items-center justify-center text-lg"
                  style={{ background: '#111827', border: '1px solid #1e2d45' }}>
                  {exp.logo}
                </div>

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
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 pt-16" style={{ borderTop: '1px solid #1e2d45' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: '#3b82f6' }}>educación</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { school: 'Universidad de Manizales', degree: 'Ingeniería de Sistemas y Telecomunicaciones', period: '2016 — 2021' },
              { school: 'SENA', degree: 'Tecnología en Análisis y Desarrollo de Sistemas de Información', period: '2014 — 2016' },
            ].map(e => (
              <div key={e.school} className="p-4 rounded-xl" style={{ background: '#111827', border: '1px solid #1e2d45' }}>
                <p className="font-semibold">{e.school}</p>
                <p className="text-sm mt-1" style={{ color: '#94a3b8' }}>{e.degree}</p>
                <p className="text-xs mt-1" style={{ color: '#475569' }}>{e.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const waLink = `https://wa.me/573128423580?text=${encodeURIComponent('Hola Mateo, vi tu portafolio y me gustaría contactarte.')}`

  return (
    <section id="contacto" className="py-24 px-6" style={{ background: '#0d1220' }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>contacto</p>
        <h2 className="text-3xl sm:text-4xl font-black mb-4">¿Tienes un proyecto?</h2>
        <p className="text-base mb-12 max-w-xl" style={{ color: '#64748b' }}>
          Estoy disponible para proyectos freelance, consultoría cloud y colaboraciones.
          Hablemos.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: <Mail size={18} />, label: 'Email', value: 'loaizamateo1227@gmail.com', href: 'mailto:loaizamateo1227@gmail.com' },
            { icon: <Phone size={18} />, label: 'WhatsApp', value: '+57 312 842 3580', href: waLink },
            { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'mateo-loaiza-rios', href: 'https://www.linkedin.com/in/mateo-loaiza-rios' },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener"
              className="flex items-center gap-3 p-4 rounded-xl transition-all group"
              style={{ background: '#111827', border: '1px solid #1e2d45' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#3b82f6')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e2d45')}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#0f2040', color: '#3b82f6' }}>
                {c.icon}
              </div>
              <div>
                <p className="text-xs" style={{ color: '#475569' }}>{c.label}</p>
                <p className="text-sm font-medium truncate">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <a href={waLink} target="_blank" rel="noopener"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
          style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
          <span>💬</span>
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 text-center text-xs" style={{ color: '#334155', borderTop: '1px solid #1e2d45' }}>
      <p>© {new Date().getFullYear()} Mateo Loaiza Rios · Construido con Next.js</p>
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

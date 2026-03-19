import type { Metadata } from 'next'
import { Space_Grotesk, Fira_Code, Inter } from 'next/font/google'
import { LangProvider } from '@/lib/lang-context'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
})

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

const APP_URL = 'https://mateoloaiza.dev'

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'Mateo Loaiza — Desarrollador Full Stack & Cloud | Manizales, Colombia',
    template: '%s | Mateo Loaiza',
  },
  description: 'Desarrollador Full Stack y Cloud Engineer con +10 años de experiencia. Especializado en React, Node.js y AWS. Disponible para proyectos freelance en Manizales, Colombia y LATAM.',
  keywords: [
    'desarrollador full stack Colombia',
    'programador freelance Manizales',
    'ingeniero cloud Colombia',
    'desarrollador React Colombia',
    'AWS engineer Colombia',
    'desarrollador web Eje Cafetero',
    'Full Stack developer Manizales',
    'consultor tecnología Colombia',
    'Node.js developer Colombia',
    'Mateo Loaiza desarrollador',
  ],
  authors: [{ name: 'Mateo Loaiza', url: APP_URL }],
  creator: 'Mateo Loaiza',
  openGraph: {
    title: 'Mateo Loaiza — Desarrollador Full Stack & Cloud | Colombia',
    description: 'Desarrollador Full Stack y Cloud Engineer con +10 años de experiencia en React, Node.js y AWS. Disponible para proyectos en Colombia y LATAM.',
    type: 'profile',
    url: APP_URL,
    siteName: 'Mateo Loaiza — Portfolio',
    locale: 'es_CO',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Mateo Loaiza — Desarrollador Full Stack & Cloud Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mateo Loaiza — Full Stack & Cloud Engineer | Colombia',
    description: 'Desarrollador con +10 años de experiencia en React, Node.js y AWS. Disponible para proyectos en Colombia y LATAM.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: APP_URL,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/avatar-512.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mateo Loaiza',
    url: APP_URL,
    image: `${APP_URL}/avatar.jpg`,
    jobTitle: 'Full Stack & Cloud Engineer',
    description: 'Desarrollador Full Stack y Cloud Engineer con +10 años de experiencia en React, Node.js y AWS.',
    email: 'loaizamateo1227@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manizales',
      addressRegion: 'Caldas',
      addressCountry: 'CO',
    },
    sameAs: [
      'https://github.com/loaizamateo',
      'https://linkedin.com/in/mateoloaiza',
    ],
    knowsAbout: [
      'React',
      'Node.js',
      'TypeScript',
      'AWS',
      'Cloud Computing',
      'Full Stack Development',
      'PostgreSQL',
      'Docker',
    ],
    knowsLanguage: ['es', 'en'],
    nationality: {
      '@type': 'Country',
      name: 'Colombia',
    },
  }

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}

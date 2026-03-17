import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mateo Loaiza — Full Stack & Cloud Engineer',
  description: 'Senior Software Engineer especializado en JavaScript, AWS y arquitecturas cloud. +10 años de experiencia construyendo productos escalables.',
  icons: {
    icon: '/avatar.jpg',
    apple: '/avatar-512.png',
  },
  openGraph: {
    title: 'Mateo Loaiza — Full Stack & Cloud Engineer',
    description: 'Senior Software Engineer | AWS Cloud Practitioner | JavaScript Full Stack | +10 años de experiencia',
    type: 'website',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/12507783?v=4',
        width: 460,
        height: 460,
        alt: 'Mateo Loaiza Rios',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Mateo Loaiza — Full Stack & Cloud Engineer',
    description: 'Senior Software Engineer | AWS | JavaScript | +10 años',
    images: ['https://avatars.githubusercontent.com/u/12507783?v=4'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mateo Loaiza — Full Stack & Cloud Engineer',
  description: 'Senior Software Engineer especializado en JavaScript, AWS y arquitecturas cloud. +9 años de experiencia construyendo productos escalables.',
  openGraph: {
    title: 'Mateo Loaiza — Full Stack & Cloud Engineer',
    description: 'Senior Software Engineer | AWS Cloud Practitioner | JavaScript Full Stack',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

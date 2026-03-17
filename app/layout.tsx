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

export const metadata: Metadata = {
  title: 'Mateo Loaiza — Full Stack & Cloud Engineer',
  description: 'Senior Software Engineer especializado en JavaScript, AWS y arquitecturas cloud. +10 años de experiencia construyendo productos escalables.',

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}

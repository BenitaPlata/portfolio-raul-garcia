import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raúl García · Docente Bilingüe | Educación Infantil y Primaria',
  description:
    'Portfolio profesional de Raúl García, docente con más de 10 años de experiencia, 2 años impartiendo en inglés, Premio al Mejor Docente de España y reconocimiento de la Comunidad de Madrid.',
  keywords: [
    'docente bilingüe',
    'profesor primaria',
    'educación infantil',
    'bilingüe inglés',
    'premio mejor docente',
    'Comunidad de Madrid',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}

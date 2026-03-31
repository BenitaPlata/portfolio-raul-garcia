'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Mail } from 'lucide-react'

const links = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Reconocimientos', href: '#reconocimientos' },
  { label: 'Aval profesional', href: '#aval' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Evidencias', href: '#evidencias' },
  { label: 'Familias', href: '#familias' },
  { label: 'Más allá', href: '#personal' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className={`font-display font-bold text-lg transition-colors ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
        >
          Raúl García
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-colors hover:text-accent whitespace-nowrap ${
                scrolled ? 'text-muted' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white text-[13px] font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap"
          >
            <Mail size={13} />
            Contactar
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-slate-700' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="flex items-center gap-2 bg-accent text-white text-sm font-semibold px-3 py-2.5 rounded-lg mt-1"
              onClick={() => setMenuOpen(false)}
            >
              <Mail size={14} />
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

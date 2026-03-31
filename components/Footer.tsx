
const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Reconocimientos', href: '#reconocimientos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Evidencias', href: '#evidencias' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-xl text-white mb-2">
              Raúl García
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Docente de Educación Infantil y Primaria con más de 15 años de experiencia.
              DECA · C1 inglés · Nominado al Mejor Docente de España.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Secciones
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2024 Raúl García · Todos los derechos reservados</p>
          <p className="flex items-center gap-1.5">
            Desarrollado por{' '}
            <a
              href="https://www.linkedin.com/in/benita-plata/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors font-medium"
            >
              Ita Plata
            </a>
            {' '}· Web Developer
          </p>
        </div>
      </div>
    </footer>
  )
}

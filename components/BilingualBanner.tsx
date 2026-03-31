import { Globe, CheckCircle } from 'lucide-react'

export default function BilingualBanner() {
  return (
    <div className="bg-accent py-5 px-4 relative overflow-hidden pb-16">
      <div className="container-max flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white">
        <div className="flex items-center gap-3">
          <Globe size={20} className="flex-shrink-0" />
          <p className="font-semibold text-base sm:text-lg text-center sm:text-left">
            ¿Buscáis un docente que marque la diferencia?{' '}
            <span className="font-bold underline decoration-white/50">
              Más de 15 años en el aula, experiencia internacional y 3 premios nacionales lo avalan.
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 flex-shrink-0">
          <CheckCircle size={14} />
          <span className="text-sm font-medium">Experiencia real verificable</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-14 block" aria-hidden="true">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#FAF8F5" />
        </svg>
      </div>
    </div>
  )
}

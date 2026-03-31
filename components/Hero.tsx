import { ArrowRight, Star, Globe, Award, BookOpen, Pencil } from 'lucide-react'

const badges = [
  { icon: Globe, label: 'Experiencia internacional · C1 inglés', color: 'bg-emerald-400/15 text-emerald-200 border-emerald-400/25' },
  { icon: Award, label: 'Nominado Mejor Docente España', color: 'bg-amber-400/15 text-amber-200 border-amber-400/25' },
  { icon: Star, label: 'Reconocido · Comunidad de Madrid', color: 'bg-slate-400/15 text-slate-200 border-slate-400/25' },
  { icon: BookOpen, label: 'DECA · Competencias Eclesiásticas', color: 'bg-violet-400/15 text-violet-200 border-violet-400/25' },
  { icon: BookOpen, label: 'Doble Especialidad · +15 años', color: 'bg-blue-400/15 text-blue-200 border-blue-400/25' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1E1714] via-[#251A15] to-[#2D2020] overflow-hidden pb-24"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-300/5 rounded-full blur-3xl" />
        {/* Doodles */}
        <div className="absolute top-24 right-8 opacity-[0.06] rotate-[-20deg] hidden lg:block">
          <Pencil size={110} strokeWidth={1} color="white" />
        </div>
        <div className="absolute bottom-32 left-8 opacity-[0.06] rotate-[15deg] hidden lg:block">
          <Star size={70} strokeWidth={1} color="white" />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-[0.04] rotate-[30deg] hidden xl:block">
          <Star size={40} strokeWidth={1} color="white" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-max w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-5 sm:space-y-8 animate-fade-up order-last md:order-first">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-400/15 border border-emerald-400/25 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
              <span className="text-emerald-200 text-sm font-medium">
                Disponible para incorporación inmediata
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                Raúl{' '}
                <span className="relative inline-block text-accent">
                  García
                  <svg
                    className="absolute -bottom-1 left-0 w-full overflow-visible"
                    height="10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,7 C12,3 28,9 48,5 C68,1 84,8 100,4"
                      stroke="#C4603A"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <div className="space-y-1.5 text-sm sm:text-base text-white/70 leading-relaxed max-w-lg">
                <p>Docente con +15 años de experiencia en Educación Infantil y Primaria</p>
                <p>Especialista en innovación pedagógica, educación emocional y metodologías activas</p>
                <p>Reconocido a nivel nacional y con experiencia internacional</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border ${badge.color}`}
                >
                  <badge.icon size={12} />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="btn-primary text-base px-7 py-3.5">
                Contactar ahora
                <ArrowRight size={16} />
              </a>
              <a href="#experiencia" className="btn-secondary text-base px-7 py-3.5">
                Ver mi experiencia
              </a>
            </div>

            {/* CV bajo petición */}
            <p className="text-white/40 text-sm">
              CV disponible bajo petición
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
              {[
                { value: '+15', label: 'años de experiencia' },
                { value: '2', label: 'años internacionales' },
                { value: '3', label: 'reconocimientos nacionales' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-3xl text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo — visible en todos los tamaños, centrada y más pequeña en móvil */}
          <div className="flex justify-center md:justify-center lg:justify-end animate-fade-in order-first md:order-last">
            <div className="relative">
              {/* Photo circle */}
              <div className="w-44 h-44 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#2D2118] to-[#150F0C] border-4 border-accent/50 shadow-2xl shadow-black/50 flex items-center justify-center overflow-hidden">
                <img
                  src="/raul.webp"
                  alt="Raúl García"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating card: International */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl p-3 sm:p-4 max-w-[160px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <Globe size={14} className="text-accent" />
                  <span className="text-xs font-bold text-emerald-700">INTERNACIONAL</span>
                </div>
                <p className="text-xs text-slate-500 leading-tight">
                  2 años en colegio internacional en el extranjero
                </p>
              </div>

              {/* Floating card: Award */}
              <div className="absolute -top-4 -right-4 sm:-right-8 bg-amber-50 border border-amber-200 rounded-2xl shadow-xl p-3 sm:p-4 max-w-[180px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={14} className="text-amber-600" />
                  <span className="text-xs font-bold text-amber-700">PREMIADO</span>
                </div>
                <p className="text-xs text-slate-500 leading-tight">
                  Nominado mejor docente de España · Premio a la iniciativa didáctica innovadora
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wave into BilingualBanner */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,0 960,80 1440,40 L1440,80 L0,80 Z" fill="#C4603A" />
        </svg>
      </div>
    </section>
  )
}

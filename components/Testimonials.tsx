import { Quote, Star, Sparkles } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Raúl no es solo un profesor. Es alguien que se preocupa de verdad por cada alumno y que hace que te sientas parte de lo que pasa en el aula cada día. Los relatos semanales eran lo primero que abría cada viernes.',
    name: '[Nombre de la familia]',
    role: 'Madre de alumno',
    stars: 5,
    initials: 'MG',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    quote:
      'Su capacidad para crear un entorno de aprendizaje en inglés donde los niños no lo vivían como algo difícil es realmente excepcional. Los alumnos aprendían usando el idioma, sin darse cuenta de que estaban aprendiendo.',
    name: '[Nombre del director/a]',
    role: 'Director/a del centro internacional',
    stars: 5,
    initials: 'JR',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    quote:
      'El proyecto de relatos cambió completamente la percepción que las familias tenían del centro. Fue un antes y un después en la relación entre el colegio y las familias. Algo que nunca habíamos conseguido con otras iniciativas.',
    name: '[Nombre del compañero/a]',
    role: 'Docente compañera',
    stars: 5,
    initials: 'LP',
    color: 'bg-purple-100 text-purple-700',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-white relative overflow-hidden">
      {/* Stars doodles */}
      <div className="absolute top-10 right-10 opacity-[0.06] rotate-[12deg] hidden lg:block">
        <Sparkles size={100} strokeWidth={0.8} color="#1E1714" />
      </div>
      <div className="absolute bottom-24 right-1/4 opacity-[0.04] rotate-[-8deg] hidden xl:block">
        <Star size={60} strokeWidth={0.8} color="#1E1714" />
      </div>
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-blue mb-4 mx-auto w-fit">Testimonios</div>
          <h2 className="section-title">
            Lo que dicen{' '}
            <span className="text-accent">quienes lo han vivido</span>
          </h2>
          <p className="section-subtitle">
            Las palabras que más importan no son las del CV. Son las de quienes han
            trabajado y compartido el día a día con Raúl.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((t, i) => (
            <div key={i} className="card flex flex-col hover:-translate-y-1">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1">
                <Quote size={20} className="text-slate-200 absolute -top-1 -left-1" />
                <p className="text-muted text-sm leading-relaxed pl-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-display font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-primary">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about placeholders */}
        <div className="text-center">
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Sustituye los testimonios de ejemplo con citas reales de familias, directores o
            compañeros. Añadir nombres y fotos reales aumenta significativamente la
            credibilidad.
          </p>
        </div>
      </div>
      {/* Wave into Contact (primary #4A6FA5) */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,0 960,80 1440,40 L1440,80 L0,80 Z" fill="#1E1714" />
        </svg>
      </div>
    </section>
  )
}

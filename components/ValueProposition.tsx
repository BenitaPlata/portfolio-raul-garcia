import { Globe, Heart, Rocket, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Globe,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    number: '01',
    title: 'Listo para el bilingüismo desde el primer día',
    body: 'No necesito formación adicional ni periodo de adaptación para enseñar en inglés. Llevo 2 años haciéndolo de forma continuada en un entorno 100% bilingüe. Puedo incorporarme a cualquier proyecto bilingüe con plena capacidad operativa.',
    bullets: [
      'Clase completa en inglés sin apoyo externo',
      'Diseño propio de materiales y unidades',
      'Gestión de aula en inglés desde el día uno',
    ],
  },
  {
    icon: Heart,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
    number: '02',
    title: 'Una relación con las familias que marca la diferencia',
    body: 'Mi modelo de comunicación transforma la relación entre el centro y las familias. Familias más informadas son familias más satisfechas, con menos conflictos y con mayor confianza en el equipo docente.',
    bullets: [
      'Canal de comunicación narrativo y cercano',
      'Familias implicadas en el proceso educativo',
      'Mejora de la reputación del centro desde dentro',
    ],
  },
  {
    icon: Rocket,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    number: '03',
    title: 'Un referente en el claustro',
    body: 'Un docente premiado a nivel nacional, con experiencia internacional y metodología contrastada, aporta valor no solo en su aula, sino en todo el equipo docente. Comparto mi metodología, formo a compañeros y colaboro activamente.',
    bullets: [
      'Capacidad de liderazgo pedagógico',
      'Experiencia en coordinación de equipos',
      'Perfil de docente referente y formador',
    ],
  },
]

export default function ValueProposition() {
  return (
    <section id="propuesta" className="section-padding bg-surface relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #C4603A 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.035 }} />
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-blue mb-4 mx-auto w-fit">Propuesta de valor</div>
          <h2 className="section-title">
            ¿Qué puedo aportar{' '}
            <span className="text-accent">a vuestro centro?</span>
          </h2>
          <p className="section-subtitle">
            No busco adaptarme. Busco aportar desde el primer día. Esto es lo que
            obtenéis al incorporarme a vuestro equipo.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {values.map((value) => (
            <div key={value.title} className="card hover:-translate-y-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${value.iconBg} rounded-xl flex items-center justify-center`}>
                  <value.icon size={22} className={value.iconColor} />
                </div>
                <span className="font-display font-bold text-4xl text-slate-100">
                  {value.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{value.body}</p>
              <ul className="space-y-1.5 pt-4 border-t border-slate-100">
                {value.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-sm text-muted">
                    <ArrowRight size={12} className="text-accent flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="bg-gradient-to-r from-[#354F72] to-primary rounded-2xl p-8 text-center text-white">
          <h3 className="font-display font-bold text-2xl mb-2">
            ¿Tiene sentido que hablemos?
          </h3>
          <p className="text-slate-200 mb-6 max-w-xl mx-auto">
            Si buscáis un docente comprometido, con experiencia bilingüe real y
            reconocido a nivel nacional, estoy disponible para una entrevista cuando lo
            consideréis oportuno.
          </p>
          <a href="#contacto" className="btn-primary mx-auto w-fit">
            Contactar ahora
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
      {/* Wave into Testimonials (white) */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

import { Globe, Award, MapPin, Calendar, ChevronRight, BookOpen } from 'lucide-react'

const experiences = [
  {
    period: '2024 – 2025',
    center: 'Formación y desarrollo profesional',
    location: 'España',
    role: 'Especialización y consolidación del perfil docente',
    language: 'ES',
    languageLabel: 'FORMACIÓN',
    languageColor: 'bg-violet-50 text-violet-700 border-violet-200',
    badge: null,
    tasks: [
      'DECA (2025) — habilitación para centros concertados y privados de titularidad religiosa',
      'Formación en Inteligencia Emocional aplicada al aula (100h)',
      'Metodologías activas y diseño de materiales propios para Ed. Infantil y Primaria',
    ],
    highlight: 'Nuevas habilitaciones · Un docente que no para de formarse',
  },
  {
    period: '2021 – 2023',
    center: 'UNES Skolka – Colegio Internacional',
    location: 'Nitra, Eslovaquia',
    role: 'Maestro de Educación Infantil',
    language: 'EN',
    languageLabel: 'EN INGLÉS',
    languageColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    badge: null,
    tasks: [
      'Docencia en entorno trilingüe (inglés, eslovaco y español) y multicultural',
      'Aplicación de metodologías activas y trabajo por proyectos',
      'Enfoque en educación emocional y desarrollo social del alumnado',
      'Comunicación con familias internacionales de diversas nacionalidades',
      'Organización de actividades culturales y proyectos propios de iniciativa personal',
    ],
    highlight: 'Entorno 100% internacional · Inglés como lengua de trabajo',
  },
  {
    period: '2011 – 2021',
    center: 'Colegio Miramadrid',
    location: 'Madrid, España',
    role: 'Maestro tutor – Segundo ciclo de Educación Infantil',
    language: 'ES',
    languageLabel: 'ESPAÑOL',
    languageColor: 'bg-blue-100 text-blue-700 border-blue-300',
    badge: 'PREMIADO',
    badgeColor: 'badge-amber',
    tasks: [
      'Tutor en colegio privado de referencia durante 10 años',
      'Metodologías activas y aprendizaje significativo como eje del aula',
      'Seguimiento individualizado del alumnado a nivel académico y emocional',
      'Proyecto propio de relatos semanales y libros anuales con las familias',
    ],
    highlight: 'Finalista Mejor Docente España 2018 · Premio Escuela Infantil 2016 y 2017 · Mención CM 2016',
  },
  {
    period: '2009 – 2011',
    center: 'Colegio Peñafort',
    location: 'Alicante, España',
    role: 'Maestro tutor – Segundo ciclo de Educación Infantil',
    language: 'ES',
    languageLabel: 'ESPAÑOL',
    languageColor: 'bg-blue-100 text-blue-700 border-blue-300',
    badge: null,
    tasks: [
      'Programación y desarrollo de actividades educativas en Educación Infantil',
      'Uso de aprendizaje activo y dinámicas cooperativas',
      'Atención personalizada y colaboración estrecha con familias',
    ],
    highlight: 'Inicio de la trayectoria docente · Base metodológica sólida',
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="section-padding bg-white relative overflow-hidden">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="badge-blue mb-4 w-fit">
            <Calendar size={14} />
            Trayectoria profesional
          </div>
          <h2 className="section-title">
            Más de 15 años en{' '}
            <span className="text-accent">Educación Infantil y Primaria</span>
          </h2>
          <p className="section-subtitle">
            Colegios privados, entorno internacional y formación continua. Cada etapa
            ha dejado algo concreto: metodología, experiencia y criterio propio.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-100 hidden sm:block" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative flex gap-6">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center pt-1.5 flex-shrink-0">
                <div className={`w-10 h-10 rounded-full border-2 ${i === 0 ? 'bg-primary border-primary' : 'bg-white border-slate-200'} flex items-center justify-center z-10`}>
                  {i === 0 ? (
                    <Globe size={16} className="text-white" />
                  ) : i === 1 ? (
                    <Award size={16} className="text-muted" />
                  ) : i === experiences.length - 1 ? (
                    <BookOpen size={16} className="text-violet-500" />
                  ) : (
                    <ChevronRight size={16} className="text-muted" />
                  )}
                </div>
              </div>

              {/* Card */}
              <div className={`card flex-1 ${i === 0 ? 'border-l-4 border-l-accent' : ''}`}>
                {/* Header row */}
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${exp.languageColor}`}>
                        {exp.languageLabel}
                      </span>
                      {exp.badge && (
                        <span className="badge-amber text-xs">{exp.badge}</span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary">
                      {exp.center}
                    </h3>
                    <p className="text-sm font-medium text-accent mt-0.5">{exp.role}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted mt-1">
                      <MapPin size={11} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Tasks */}
                <ul className="space-y-1.5 mb-4">
                  {exp.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>

                {/* Highlight footer */}
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-400 font-medium">{exp.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Wave into Methodology (surface) */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,0 960,80 1440,40 L1440,80 L0,80 Z" fill="#FAF8F5" />
        </svg>
      </div>
    </section>
  )
}

import { BookOpen, Heart, Trophy, Shield } from 'lucide-react'

const cards = [
  {
    icon: Trophy,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    title: 'Docente premiado y reconocido',
    body: 'Nominación a Mejor Docente de España, Mención de la Consejería de Educación de la Comunidad de Madrid y ganador de Concursos a nivel nacional por iniciativas didácticas. Reconocimientos que reflejan años de dedicación constante, no un momento puntual.',
    badge: 'Reconocimiento nacional',
    badgeColor: 'badge-green',
  },
  {
    icon: BookOpen,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    title: 'Más de 15 años transformando aulas',
    body: 'Una trayectoria construida clase a clase, con metodologías activas que hacen que los alumnos quieran aprender. El aprendizaje real no ocurre cuando el maestro explica, sino cuando el alumno descubre.',
    badge: 'Experiencia contrastada',
    badgeColor: 'badge-blue',
  },
  {
    icon: Heart,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
    title: 'Familias como aliadas, no como espectadoras',
    body: 'Construí una relación de confianza real con las familias: comunicación clara, seguimiento individualizado y la certeza de que su hijo estaba en buenas manos. Ese vínculo es parte del resultado educativo.',
    badge: 'Comunidad educativa',
    badgeColor: 'badge-blue',
  },
]

export default function BilingualExperience() {
  return (
    <section id="bilingue" className="section-padding bg-surface relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #C4603A 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.035 }} />
      {/* BookOpen doodle */}
      <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-[0.05] hidden lg:block">
        <BookOpen size={220} strokeWidth={0.8} color="#1E1714" />
      </div>
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-green mb-4 mx-auto w-fit">
            <Trophy size={14} />
            Trayectoria reconocida
          </div>
          <h2 className="section-title">
            Impacto real en el aula.{' '}
            <span className="text-accent">Avalado por resultados.</span>
          </h2>
          <p className="section-subtitle mt-4">
            No es solo experiencia acumulada. Es una forma de entender la educación
            que genera cambios visibles en los alumnos, en las familias y en el centro.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cards.map((card) => (
            <div key={card.title} className="card group hover:-translate-y-1">
              <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <card.icon size={22} className={card.iconColor} />
              </div>
              <span className={`${card.badgeColor} text-xs mb-3`}>{card.badge}</span>
              <h3 className="font-display font-bold text-lg text-primary mt-2 mb-3">
                {card.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="bg-primary rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Shield size={22} className="text-accent" />
          </div>
          <div className="flex-1">
            <p className="font-display font-semibold text-white text-lg">
              Cada niño importa. Cada familia también.
            </p>
            <p className="text-blue-200 mt-1">
              Me preocupo por entender a cada alumno más allá del aula, y por hacer
              que las familias se sientan parte del proceso. Esa cercanía es lo que
              convierte un curso en algo que se recuerda.
            </p>
          </div>
          <a
            href="#experiencia"
            className="flex-shrink-0 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Ver trayectoria →
          </a>
        </div>
      </div>
      {/* Wave into About (white) */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

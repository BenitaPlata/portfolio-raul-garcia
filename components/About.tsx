import { CheckCircle } from 'lucide-react'

const highlights: string[] = []

const stats = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '2', label: 'Años en centro internacional' },
  { value: 'C1', label: 'Nivel certificado de inglés' },
  { value: '2', label: 'Especialidades universitarias' },
]

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-white relative overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left: Photo + Stats — aparece debajo en móvil */}
          <div className="space-y-6 order-last lg:order-first">
            {/* Classroom photo */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <img
                src="/raul-aula.webp"
                alt="Raúl García en el aula"
                className="w-full"
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface rounded-2xl p-5 text-center border border-slate-100 hover:border-accent/30 transition-colors"
                >
                  <div className="font-display font-bold text-4xl text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text — aparece primero en móvil */}
          <div className="space-y-6 order-first lg:order-last">
            <div>
              <div className="badge-blue mb-4">Sobre mí</div>
              <h2 className="section-title">
                Si un niño sale del aula con ganas de volver,{' '}
                <span className="text-accent">he hecho bien mi trabajo.</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Llevo más de 15 años en el aula. He aprendido que un buen maestro no es
                el que más sabe, sino el que mejor consigue que otros aprendan — y que un
                alumno que se siente bien consigo mismo aprende el doble.
              </p>
              <p>
                Con las familias mantengo una relación diferente a la habitual: no me
                limito a las tutorías. Construyo canales de comunicación reales que hacen
                que se sientan parte del proceso. Cuando las familias se implican, todo mejora.
              </p>
              <p>
                Decidí irme a trabajar a Eslovaquia con un objetivo claro: aprender inglés
                de verdad y exponerme a otras formas de entender la educación. Volví
                hablando y desenvolviéndome en inglés al cien por cien, y con una forma
                de mirar el aula que no se aprende en ningún máster.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Wave into Awards (surface) */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,0 960,80 1440,40 L1440,80 L0,80 Z" fill="#FAF8F5" />
        </svg>
      </div>
    </section>
  )
}

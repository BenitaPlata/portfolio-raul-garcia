import { Zap, Heart, Globe, Users, Lightbulb, Send } from 'lucide-react'

const methods = [
  {
    icon: Zap,
    iconColor: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
    title: 'Aprendizaje activo',
    body: 'Los alumnos aprenden cuando hacen, no cuando escuchan pasivamente. Diseño cada sesión para que sean protagonistas de su aprendizaje: proyectos, retos, creación de contenido propio.',
    tag: 'Metodología ABP',
  },
  {
    icon: Heart,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
    title: 'Educación emocional',
    body: 'El estado emocional del alumno determina su capacidad de aprendizaje. Trabajar las emociones no es un extra: es la base sobre la que construyo todo el trabajo académico del aula.',
    tag: 'Ed. Emocional integrada',
  },
  {
    icon: Globe,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    title: 'Inglés como herramienta real',
    body: 'No enseño inglés como asignatura aislada. Lo uso como vehículo real de aprendizaje. Los alumnos aprenden a pensar en inglés, no a traducir del español. He aplicado esto durante 2 años en un entorno 100% bilingüe.',
    tag: 'CLIL / Inmersión',
  },
  {
    icon: Users,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    title: 'Familia como aliada',
    body: 'Las familias informadas e implicadas multiplican el impacto del trabajo del aula. Mi modelo de comunicación —con relatos semanales narrativos— transforma la relación colegio-hogar de forma medible.',
    tag: 'Comunidad educativa',
  },
]

export default function Methodology() {
  return (
    <section id="metodologia" className="section-padding bg-surface relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #C4603A 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.035 }} />
      {/* Lightbulb doodle */}
      <div className="absolute right-4 top-12 opacity-[0.06] rotate-[8deg] hidden lg:block">
        <Lightbulb size={140} strokeWidth={0.8} color="#1E1714" />
      </div>
      {/* Paper plane doodle */}
      <div className="absolute left-6 bottom-24 opacity-[0.06] rotate-[-15deg] hidden lg:block">
        <Send size={90} strokeWidth={0.8} color="#1E1714" />
      </div>
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-blue mb-4 mx-auto w-fit">Metodología</div>
          <h2 className="section-title">
            Así trabajo{' '}
            <span className="text-accent">en el aula</span>
          </h2>
          <p className="section-subtitle">
            Una filosofía docente construida en 10 años de práctica real. No aprendida en
            libros, sino probada con alumnos reales.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {methods.map((method) => (
            <div
              key={method.title}
              className="card group hover:-translate-y-1 flex gap-5"
            >
              <div className={`w-12 h-12 ${method.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <method.icon size={22} className={method.iconColor} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-bold text-base text-primary">
                    {method.title}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-3">{method.body}</p>
                <span className="badge-blue text-xs">{method.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Wave into Evidence (white) */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

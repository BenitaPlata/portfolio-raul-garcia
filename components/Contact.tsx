import { Mail, Phone, Linkedin, ArrowRight, CheckCircle, MapPin, Star, Sparkles, FileDown } from 'lucide-react'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'raulgarciaruiz1980@gmail.com',
    href: 'mailto:raulgarciaruiz1980@gmail.com',
    note: 'Respondo en menos de 24h',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+34 611 835 368',
    href: 'tel:+34611835368',
    note: 'Llamadas y WhatsApp',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/raúl-garcía-ruiz',
    href: 'https://www.linkedin.com/in/ra%C3%BAl-garc%C3%ADa-ruiz-4a6a20297/',
    note: 'Perfil profesional completo',
  },
  {
    icon: MapPin,
    label: 'Disponibilidad',
    value: 'Todo el territorio nacional',
    href: null,
    note: 'Abierto a reubicación en cualquier provincia',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-primary relative overflow-hidden">
      {/* Stars doodles on dark bg */}
      <div className="absolute top-8 right-16 opacity-[0.08] rotate-[20deg] hidden lg:block">
        <Sparkles size={80} strokeWidth={0.8} color="white" />
      </div>
      <div className="absolute bottom-16 left-12 opacity-[0.06] rotate-[-10deg] hidden lg:block">
        <Star size={60} strokeWidth={0.8} color="white" />
      </div>
      <div className="absolute top-1/2 right-1/3 opacity-[0.04] rotate-[5deg] hidden xl:block">
        <Star size={35} strokeWidth={0.8} color="white" />
      </div>
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="text-white space-y-6">
            <div>
              <div className="badge-white mb-4 w-fit text-xs">Contacto directo</div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight">
                ¿Hablamos?
              </h2>
              <p className="text-slate-200 text-lg mt-3 leading-relaxed">
                Disponible para incorporación inmediata en todo el territorio nacional.
                Si buscáis un docente comprometido, reconocido a nivel
                nacional y con más de 15 años de experiencia real en el aula, estará
                encantado de conocer vuestro centro.
              </p>
            </div>

            {/* What you can expect */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                Al contactarme podéis esperar:
              </p>
              {[
                'Respuesta rápida y disponibilidad inmediata para entrevista',
                'Presentación adaptada a las necesidades de vuestro centro',
                'Carta de recomendación de centro educativo disponible',
                'Portfolio completo con ejemplos de trabajo real',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-4">
              <span className="w-3 h-3 bg-accent rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">
                  Disponible para incorporación inmediata
                </p>
                <p className="text-slate-300 text-xs mt-0.5">
                  Sin preaviso pendiente · Listo para empezar cuando lo necesitéis
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact cards */}
          <div className="space-y-4">
            {contactDetails.map((contact) => (
              <div key={contact.label}>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-colors group"
                  >
                    <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <contact.icon size={18} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-300 font-medium">{contact.label}</div>
                      <div className="text-white font-semibold text-sm truncate">
                        {contact.value}
                      </div>
                      <div className="text-xs text-slate-400">{contact.note}</div>
                    </div>
                    <ArrowRight size={16} className="text-white/30 group-hover:text-accent transition-colors flex-shrink-0" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                    <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <contact.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-300 font-medium">{contact.label}</div>
                      <div className="text-white font-semibold text-sm">{contact.value}</div>
                      <div className="text-xs text-slate-400">{contact.note}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CV Download card */}
            <a
              href="/cv-raul-garcia.pdf"
              download
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-4 transition-all duration-200 group"
            >
              <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileDown size={18} className="text-accent group-hover:translate-y-0.5 transition-transform" />
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold text-sm">Descargar Currículum Vitae</div>
                <div className="text-slate-400 text-xs mt-0.5">PDF listo para imprimir o añadir a base de datos</div>
              </div>
              <span className="flex-shrink-0 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                PDF
              </span>
            </a>

            {/* Primary CTA */}
            <a
              href="mailto:raulgarciaruiz1980@gmail.com"
              className="flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-xl shadow-orange-900/30 mt-2"
            >
              <Mail size={18} />
              Enviar email ahora
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

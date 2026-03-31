'use client'

import { useState } from 'react'
import { Trophy, Building2, Star, X, ZoomIn } from 'lucide-react'

const awards = [
  {
    icon: Trophy,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    badge: 'Nominación Nacional',
    badgeColor: 'badge-amber',
    title: 'Finalista Premios Abanca · Mejor Docente de España',
    description:
      'Reconocimiento nacional a la excelencia docente. Uno de los pocos finalistas entre miles de candidatos de toda España.',
    year: '2018',
    issuer: 'Premios Abanca · Nacional',
    diplomaImg: '/reconocimientos/abanca.webp',
  },
  {
    icon: Building2,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    badge: 'Distinción Autonómica',
    badgeColor: 'badge-blue',
    title: 'Mención de la Consejería de Educación de Madrid',
    description:
      'Distinción oficial de la Consejería de Educación de la Comunidad de Madrid a la buena labor docente.',
    year: '2016',
    issuer: 'Consejería de Educación · Comunidad de Madrid',
    diplomaImg: '/reconocimientos/mencion-madrid.webp',
  },
  {
    icon: Star,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    badge: 'Premio Nacional',
    badgeColor: 'badge-green',
    title: 'Ganador Premio Escuela Infantil',
    description:
      'Premio nacional con mención especial, por iniciativas didácticas con impacto real en el aula.',
    year: '2016 · 2017',
    issuer: 'Revista Escuela Infantil · Nacional',
    diplomaImg: '/reconocimientos/escuela-infantil.webp',
  },
]

export default function Awards() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)

  return (
    <section id="reconocimientos" className="section-padding bg-surface relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #C4603A 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.035 }} />
      {/* Trophy doodle */}
      <div className="absolute -left-8 top-16 opacity-[0.05] rotate-[10deg] hidden lg:block">
        <Trophy size={180} strokeWidth={0.8} color="#1E1714" />
      </div>
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-amber mb-4 mx-auto w-fit">
            <Trophy size={14} />
            Reconocimientos
          </div>
          <h2 className="section-title">
            Reconocimientos a una{' '}
            <span className="text-accent">trayectoria real en el aula</span>
          </h2>
          <p className="section-subtitle">
            Tres reconocimientos nacionales obtenidos a lo largo de más de una década
            de trabajo docente en colegios privados.
          </p>
        </div>

        {/* Awards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className={`card border-t-4 ${award.borderColor} hover:-translate-y-1 flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${award.iconBg} rounded-xl flex items-center justify-center`}>
                  <award.icon size={22} className={award.iconColor} />
                </div>
                <span className={`${award.badgeColor} text-xs`}>{award.badge}</span>
              </div>

              <h3 className="font-display font-bold text-lg text-primary mb-3">
                {award.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{award.description}</p>

              {/* Diploma thumbnail */}
              <button
                onClick={() => setLightboxImg(award.diplomaImg)}
                className="w-full mb-4 rounded-xl overflow-hidden border border-slate-100 hover:border-accent/40 transition-colors group relative"
              >
                <img
                  src={award.diplomaImg}
                  alt={`Diploma: ${award.title}`}
                  className="w-full h-32 object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-xl">
                  <ZoomIn size={24} className="text-white" />
                </div>
              </button>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted">{award.issuer}</div>
                  <div className="text-sm font-semibold text-primary">{award.year}</div>
                </div>
                <button
                  onClick={() => setLightboxImg(award.diplomaImg)}
                  className="text-xs text-accent hover:underline font-medium"
                >
                  Ver diploma
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-10 text-center">
          <p className="text-muted text-sm max-w-lg mx-auto">
            Estos reconocimientos no son el objetivo, son el reflejo de una forma de
            entender la enseñanza. Cada uno de ellos representa años de compromiso real con
            los alumnos y sus familias.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setLightboxImg(null)}
          >
            <X size={28} />
          </button>
          <img
            src={lightboxImg}
            alt="Diploma"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Wave into Experience (white) */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

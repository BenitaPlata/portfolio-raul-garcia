'use client'

import { Quote, FileText, Building2, ExternalLink } from 'lucide-react'

// INSTRUCCIONES PARA RELLENAR:
// 1. Sustituye DIRECTOR_NOMBRE por el nombre completo de la directora
// 2. Sustituye CENTRO_NOMBRE por el nombre del colegio
// 3. Sustituye CENTRO_CIUDAD por la ciudad
// 4. Sustituye CARTA_AÑO por el año de la carta
// 5. Sustituye la CITA por el fragmento más potente de la carta (2-3 frases)
// 6. Coloca el PDF de la carta en public/aval/carta-recomendacion.pdf
//    y cambia cartaUrl a '/aval/carta-recomendacion.pdf'

const DIRECTOR_NOMBRE = 'Irene Calvo Mediavilla'
const CARGO = 'Responsable pedagógica'
const CENTRO_NOMBRE = 'UNES Kindergarten'
const CENTRO_CIUDAD = 'Nitra, Eslovaquia'
const CARTA_AÑO = 'Marzo 2026'
const CITA =
  '"Tomó la iniciativa de organizar de manera independiente una actividad de teatro de sombras sobre la prehistoria para todo el kindergarten. Esta fue una idea completamente suya, que llevó a cabo de principio a fin, y resultó muy bien recibida por los niños. El material que creó se sigue conservando y utilizando en el centro, lo que refleja la calidad y el impacto duradero de su trabajo."'
const cartaUrl = '/aval/carta-recomendacion.pdf'

export default function AvalProfesional() {
  return (
    <section id="aval" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle quote doodle */}
      <div className="absolute top-10 right-10 opacity-[0.04] rotate-[15deg] hidden lg:block">
        <Quote size={160} strokeWidth={0.7} color="#1E1714" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-blue mb-4 mx-auto w-fit">
            <FileText size={14} />
            Aval profesional
          </div>
          <h2 className="section-title">
            Lo que dice quien lo ha{' '}
            <span className="text-accent">visto trabajar de cerca</span>
          </h2>
          <p className="section-subtitle">
            Una carta de recomendación firmada por quien supervisó su trabajo en el último
            centro en el que trabajó. No es una opinión anónima: es un aval formal de
            alguien que conoce su trabajo en profundidad.
          </p>
        </div>

        {/* Main card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface border border-slate-200 rounded-3xl p-8 sm:p-12 relative">
            {/* Large decorative quote mark */}
            <Quote size={48} className="text-accent/20 mb-6" />

            {/* The quote */}
            <blockquote className="text-xl sm:text-2xl text-primary font-display font-semibold leading-relaxed mb-8">
              {CITA}
            </blockquote>

            {/* Divider */}
            <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-display font-bold text-sm">
                    {DIRECTOR_NOMBRE.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-primary">{DIRECTOR_NOMBRE}</div>
                  <div className="text-sm text-muted">{CARGO}</div>
                  <div className="flex items-center gap-1.5 text-sm text-muted mt-0.5">
                    <Building2 size={12} />
                    {CENTRO_NOMBRE} · {CENTRO_CIUDAD} · {CARTA_AÑO}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={cartaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors flex-shrink-0"
              >
                <FileText size={14} />
                Ver carta completa
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Supporting note */}
          <p className="text-center text-xs text-slate-400 mt-4">
            Carta original disponible para verificación bajo solicitud
          </p>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#FAF8F5" />
        </svg>
      </div>
    </section>
  )
}

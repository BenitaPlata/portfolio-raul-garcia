'use client'

import { useState } from 'react'
import { Newspaper, X, ChevronLeft, ChevronRight } from 'lucide-react'

// INSTRUCCIONES:
// Coloca las fotos en public/prensa/ con estos nombres:
//   articulo-01.webp, articulo-02.webp, articulo-03.webp ...
// Añade tantas como quieras al array. Las 4 primeras se ven como miniaturas;
// todas se pueden ver en el lightbox.

const articles = [
  { src: '/prensa/articulo-01.webp', alt: 'Artículo de prensa' },
  { src: '/prensa/articulo-02.webp', alt: 'Artículo de prensa' },
  { src: '/prensa/articulo-03.webp', alt: 'Artículo de prensa' },
  { src: '/prensa/articulo-04.webp', alt: 'Artículo de prensa' },
]

export default function PressArticles() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => (i! > 0 ? i! - 1 : articles.length - 1))
  const next = () => setLightboxIndex(i => (i! < articles.length - 1 ? i! + 1 : 0))

  return (
    <section id="prensa" className="section-padding bg-surface relative overflow-hidden">
      {/* Doodle */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-[0.04] hidden lg:block">
        <Newspaper size={200} strokeWidth={0.7} color="#1E1714" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-blue mb-4 mx-auto w-fit">
            <Newspaper size={14} />
            Prensa y publicaciones
          </div>
          <h2 className="section-title">
            Cuando el trabajo{' '}
            <span className="text-accent">habla en los medios</span>
          </h2>
          <p className="section-subtitle">
            Entrevistas y artículos que recogen sus nominaciones, premios y trayectoria.
            Un reconocimiento que va más allá del propio centro educativo.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-accent/40 transition-all hover:-translate-y-1 hover:shadow-lg bg-white flex items-center justify-center min-h-[220px]"
              aria-label={`Ver artículo ${i + 1}`}
            >
              <img
                src={article.src}
                alt={article.alt}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        {articles.length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => openLightbox(3)}
              className="text-sm font-semibold text-primary hover:text-accent transition-colors underline underline-offset-4"
            >
              Ver todos los artículos ({articles.length})
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 text-white/70 hover:text-white p-2"
            aria-label="Anterior"
          >
            <ChevronLeft size={36} />
          </button>
          <img
            src={articles[lightboxIndex].src}
            alt={articles[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 text-white/70 hover:text-white p-2"
            aria-label="Siguiente"
          >
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-4 text-white/50 text-sm">
            {lightboxIndex + 1} / {articles.length}
          </div>
        </div>
      )}

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,0 960,80 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { BookOpen, Users, Heart, Feather, Quote, X, ChevronLeft, ChevronRight } from 'lucide-react'

// Dedicatorias de niños: public/evidencias/carta-nino-01.webp ... carta-nino-05.webp
const childrenLetters = [
  { src: '/evidencias/carta-nino-01.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-02.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-03.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-04.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-05.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-06.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-07.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-08.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-09.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-10.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-11.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-12.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-13.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-14.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-15.webp', alt: 'Dedicatoria de un alumno' },
  { src: '/evidencias/carta-nino-16.webp', alt: 'Dedicatoria de un alumno' },
]

// Fotos de los libros: public/evidencias/libro-01.webp ... libro-11.webp
const bookPhotos = [
  { src: '/evidencias/libro-01.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-02.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-03.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-04.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-05.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-06.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-07.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-08.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-09.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-10.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-11.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-12.webp', alt: 'Páginas del libro de relatos' },
  { src: '/evidencias/libro-13.webp', alt: 'Páginas del libro de relatos' },
]

const impacts = [
  { icon: Feather, label: 'Un relato cada semana', sub: 'Durante todo el curso, sin excepción' },
  { icon: Users, label: 'Todas las familias implicadas', sub: 'Conservaban y compartían cada relato' },
  { icon: BookOpen, label: 'Un libro por curso', sub: 'Una saga creada por las familias' },
  { icon: Heart, label: 'Comunidad educativa real', sub: 'Familias que se sentían parte del aula' },
]

export default function Evidence() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [bookLightboxIndex, setBookLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => (i! > 0 ? i! - 1 : childrenLetters.length - 1))
  const next = () => setLightboxIndex(i => (i! < childrenLetters.length - 1 ? i! + 1 : 0))

  const openBookLightbox = (i: number) => setBookLightboxIndex(i)
  const closeBookLightbox = () => setBookLightboxIndex(null)
  const bookPrev = () => setBookLightboxIndex(i => (i! > 0 ? i! - 1 : bookPhotos.length - 1))
  const bookNext = () => setBookLightboxIndex(i => (i! < bookPhotos.length - 1 ? i! + 1 : 0))

  return (
    <section id="evidencias" className="section-padding bg-white relative overflow-hidden">
      {/* Book doodle */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-[0.04] rotate-[-5deg] hidden lg:block">
        <BookOpen size={240} strokeWidth={0.7} color="#1E1714" />
      </div>
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-green mb-4 mx-auto w-fit">
            <BookOpen size={14} />
            Cuando el aula deja huella
          </div>
          <h2 className="section-title">
            De un libro a{' '}
            <span className="text-accent">una saga</span>
          </h2>
          <p className="section-subtitle">
            No hay mejor indicador del impacto de un docente que lo que las familias
            deciden hacer con su trabajo. Y lo repitieron curso tras curso.
          </p>
        </div>

        {/* Main evidence block */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-10">
          {/* Text content */}
          <div className="lg:col-span-3 space-y-6 order-last lg:order-first">
            <div className="relative pl-6 border-l-4 border-accent">
              <Quote size={20} className="absolute -left-2.5 -top-1 text-accent bg-white" />
              <p className="text-lg text-slate-700 leading-relaxed font-medium italic">
                "Cada semana, durante todo un curso escolar, Raúl escribía un relato
                narrativo sobre lo que habían vivido en el aula: aprendizajes, emociones,
                pequeños hitos, momentos únicos que los niños protagonizaban."
              </p>
            </div>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Lo que empezó como una iniciativa de comunicación con las familias se
                convirtió en algo inesperado. Las familias no solo leían los relatos:
                los guardaban, los imprimían, los compartían. Al final del primer curso,
                decidieron recopilarlos en un libro. Sin que nadie se lo pidiera.
              </p>
              <p>
                Curso tras curso, el proyecto fue creciendo. Las familias aportaban
                fotos, relatos escritos en casa, dedicatorias. Los alumnos añadían sus
                propias historias. Raúl incorporaba la programación, actividades y un
                plan para trabajar en casa. Un relato semanal se convirtió en una
                comunidad educativa real.
              </p>
              <p className="font-semibold text-primary">
                Un libro por curso. Una saga que nadie pidió y que todos construyeron.
              </p>
            </div>

            {/* What this means for a school */}
            <div className="bg-surface rounded-2xl p-5 border border-slate-200">
              <p className="text-sm font-semibold text-primary mb-2">
                ¿Qué significa esto para vuestro centro?
              </p>
              <ul className="space-y-1.5">
                {[
                  'Familias que hablan bien del colegio en su entorno',
                  'Menor conflictividad y mayor confianza en el equipo docente',
                  'Reputación del centro fortalecida desde las familias',
                  'Un modelo replicable en toda la etapa',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact stats */}
          <div className="lg:col-span-2 space-y-4 order-first lg:order-last">
            {impacts.map((item) => (
              <div
                key={item.label}
                className="card flex items-center gap-4 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-accent" />
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-primary">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Book cover + gallery — full width */}
        <div className="mt-12 space-y-6">
          <div className="rounded-2xl overflow-hidden border-2 border-slate-100 bg-slate-50 w-full">
            <img
              src="/evidencias/libro-portada.webp"
              alt="Portada del libro de relatos"
              className="w-full object-contain max-h-[480px]"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bookPhotos.slice(0, 4).map((photo, i) => (
              <button
                key={i}
                onClick={() => openBookLightbox(i)}
                className="rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-accent/40 transition-all hover:-translate-y-1 hover:shadow-lg bg-slate-50 flex items-center justify-center min-h-[180px]"
                aria-label={`Ver página ${i + 1}`}
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
          {bookPhotos.length > 4 && (
            <div className="text-center">
              <button
                onClick={() => openBookLightbox(4)}
                className="text-sm font-semibold text-primary hover:text-accent transition-colors underline underline-offset-4"
              >
                Ver todas las páginas ({bookPhotos.length})
              </button>
            </div>
          )}
        </div>

        {/* Children's letters gallery */}
        {childrenLetters.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-xl text-primary">
                Lo que un niño siente no lo puede fingir
              </h3>
              <p className="text-muted text-sm mt-2">
                Dibujos y dedicatorias escritas por sus alumnos. La prueba más sincera de que algo especial pasó en el aula, año tras año.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {childrenLetters.slice(0, 4).map((letter, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-accent/40 transition-all hover:-translate-y-1 hover:shadow-lg bg-slate-50 flex items-center justify-center min-h-[220px]"
                  style={{ transform: `rotate(${[-1.5, 1, -0.5, 1.5][i % 4]}deg)` }}
                  aria-label={`Ver carta ${i + 1}`}
                >
                  <img
                    src={letter.src}
                    alt={letter.alt}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
            {childrenLetters.length > 4 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => openLightbox(4)}
                  className="text-sm font-semibold text-primary hover:text-accent transition-colors underline underline-offset-4"
                >
                  Ver todas las dedicatorias ({childrenLetters.length})
                </button>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Lightbox libros */}
      {bookLightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeBookLightbox}>
          <button onClick={closeBookLightbox} className="absolute top-4 right-4 text-white/70 hover:text-white p-2" aria-label="Cerrar"><X size={28} /></button>
          <button onClick={(e) => { e.stopPropagation(); bookPrev() }} className="absolute left-4 text-white/70 hover:text-white p-2" aria-label="Anterior"><ChevronLeft size={36} /></button>
          <img src={bookPhotos[bookLightboxIndex].src} alt={bookPhotos[bookLightboxIndex].alt} className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); bookNext() }} className="absolute right-4 text-white/70 hover:text-white p-2" aria-label="Siguiente"><ChevronRight size={36} /></button>
          <div className="absolute bottom-4 text-white/50 text-sm">{bookLightboxIndex + 1} / {bookPhotos.length}</div>
        </div>
      )}

      {/* Lightbox dedicatorias */}
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
            src={childrenLetters[lightboxIndex].src}
            alt={childrenLetters[lightboxIndex].alt}
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
            {lightboxIndex + 1} / {childrenLetters.length}
          </div>
        </div>
      )}

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,0 960,80 1440,40 L1440,80 L0,80 Z" fill="#FAF8F5" />
        </svg>
      </div>
    </section>
  )
}

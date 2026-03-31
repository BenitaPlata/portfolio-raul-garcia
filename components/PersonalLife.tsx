'use client'

import { useState } from 'react'
import { Music, Palette, Dumbbell, ExternalLink, ShoppingCart, X, ChevronLeft, ChevronRight } from 'lucide-react'

// FOTOS MÚSICA: public/personal/musica-01.webp, musica-02.webp ...
// FOTOS ARTE:   public/personal/arte-01.webp, arte-02.webp ...

const musicPhotos = [
  { src: '/personal/musica-01.webp', alt: 'Raúl con guitarra' },
  { src: '/personal/musica-02.webp', alt: 'Raúl con bajo eléctrico' },
  // Añade más: { src: '/personal/musica-03.webp', alt: '...' },
]

const sportPhotos = [
  { src: '/personal/deporte-01.webp', alt: 'Raúl jugando al balonmano' },
  { src: '/personal/deporte-02.webp', alt: 'Raúl jugando al balonmano' },
]

const artPhotos = [
  { src: '/personal/arte-01.webp', alt: 'Aportación artística al centro' },
  { src: '/personal/arte-02.webp', alt: 'Aportación artística al centro' },
  { src: '/personal/arte-03.webp', alt: 'Aportación artística al centro' },
  // Añade más: { src: '/personal/arte-04.webp', alt: '...' },
]

const libro = {
  title: 'Historia de España para cotillas',
  subtitle: 'Historia · Amazon',
  year: '2022',
  description:
    'Le llamó la atención que mucha gente conoce la historia de España de forma aislada, sin contexto. Escribió este libro para cambiar eso: historia desde la prehistoria hasta hoy, con lenguaje coloquial y buen humor. Sin parecerse en nada a un libro de texto.',
  amazonUrl: 'https://www.amazon.es/Historia-Espa%C3%B1a-para-cotillas-Garc%C3%ADa-ebook/dp/B09W4Q6JND/',
  coverImage: '/personal/libro-portada.webp',
}

function Gallery({ photos }: { photos: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState<number | null>(null)
  const close = () => setIndex(null)
  const prev = () => setIndex(i => (i! > 0 ? i! - 1 : photos.length - 1))
  const next = () => setIndex(i => (i! < photos.length - 1 ? i! + 1 : 0))

  return (
    <>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {photos.slice(0, 4).map((p, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="rounded-xl overflow-hidden border-2 border-slate-100 hover:border-accent/40 transition-all hover:shadow-md bg-slate-50 flex items-center justify-center min-h-[120px]"
            aria-label={`Ver foto ${i + 1}`}
          >
            <img src={p.src} alt={p.alt} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
      {photos.length > 4 && (
        <div className="text-center mt-3">
          <button onClick={() => setIndex(4)} className="text-sm font-semibold text-primary hover:text-accent transition-colors underline underline-offset-4">
            Ver todas las fotos ({photos.length})
          </button>
        </div>
      )}
      {index !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={close}>
          <button onClick={close} className="absolute top-4 right-4 text-white/70 hover:text-white p-2"><X size={28} /></button>
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 text-white/70 hover:text-white p-2"><ChevronLeft size={36} /></button>
          <img src={photos[index].src} alt={photos[index].alt} className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 text-white/70 hover:text-white p-2"><ChevronRight size={36} /></button>
          <div className="absolute bottom-4 text-white/50 text-sm">{index + 1} / {photos.length}</div>
        </div>
      )}
    </>
  )
}

export default function PersonalLife() {
  return (
    <section id="personal" className="section-padding bg-white relative overflow-hidden">
      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-blue mb-4 mx-auto w-fit">
            Más allá del aula
          </div>
          <h2 className="section-title">
            Raúl{' '}
            <span className="text-accent">fuera del aula</span>
          </h2>
          <p className="section-subtitle">
            Todo lo que Raúl es fuera del colegio termina encontrando su camino dentro.
            La creatividad, la disciplina y la curiosidad no entienden de horarios.
          </p>
        </div>

        {/* Book feature */}
        <div className="bg-surface border border-slate-200 rounded-3xl p-8 sm:p-10 mb-10">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="w-40 h-52 rounded-xl shadow-xl overflow-hidden">
                <img src={libro.coverImage} alt={libro.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center gap-2">
                <span className="badge-amber text-xs">Autor publicado</span>
                <span className="text-xs text-muted">{libro.year}</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-primary">{libro.title}</h3>
              <p className="text-muted leading-relaxed">{libro.description}</p>
              <a
                href={libro.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68a00] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                <ShoppingCart size={14} />
                Ver en Amazon
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Música */}
          <div className="card">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
              <Music size={22} className="text-purple-600" />
            </div>
            <h3 className="font-display font-bold text-lg text-primary mb-2">Música</h3>
            <p className="text-sm text-muted leading-relaxed">
              Guitarrista y bajista en grupos de rock y pop, con actuaciones en directo y grabaciones en estudio. La música también entra en el aula.
            </p>
            <Gallery photos={musicPhotos}  />
          </div>

          {/* Deporte */}
          <div className="card">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
              <Dumbbell size={22} className="text-emerald-600" />
            </div>
            <h3 className="font-display font-bold text-lg text-primary mb-2">Deporte</h3>
            <p className="text-sm text-muted leading-relaxed">
              Más de 20 años jugando al balonmano en equipos regionales. El esfuerzo, el compañerismo y los hábitos saludables son valores que lleva también al aula.
            </p>
            <Gallery photos={sportPhotos} />
          </div>

          {/* Arte */}
          <div className="card">
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
              <Palette size={22} className="text-rose-600" />
            </div>
            <h3 className="font-display font-bold text-lg text-primary mb-2">Arte y pintura</h3>
            <p className="text-sm text-muted leading-relaxed">
              Pintor y dibujante aficionado. Ha creado decoraciones y materiales para sus centros, convirtiendo el arte en parte del día a día del aula.
            </p>
            <Gallery photos={artPhotos}  />
          </div>

        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#1E1714" />
        </svg>
      </div>
    </section>
  )
}

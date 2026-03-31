'use client'

import { useState } from 'react'
import { Heart, Newspaper, X, ChevronLeft, ChevronRight } from 'lucide-react'

const familyPhotos = [
  { src: '/familias/familia-01.webp', alt: 'Testimonio de una familia' },
  { src: '/familias/familia-02.webp', alt: 'Testimonio de una familia' },
  { src: '/familias/familia-03.webp', alt: 'Testimonio de una familia' },
  { src: '/familias/familia-04.webp', alt: 'Testimonio de una familia' },
  { src: '/familias/familia-05.webp', alt: 'Testimonio de una familia' },
  { src: '/familias/familia-06.webp', alt: 'Testimonio de una familia' },
  { src: '/familias/familia-07.webp', alt: 'Testimonio de una familia' },
  { src: '/familias/familia-08.webp', alt: 'Testimonio de una familia' },
]

const pressPhotos = [
  { src: '/prensa/articulo-01.webp', alt: 'Artículo de prensa' },
  { src: '/prensa/articulo-02.webp', alt: 'Artículo de prensa' },
  { src: '/prensa/articulo-03.webp', alt: 'Artículo de prensa' },
  { src: '/prensa/articulo-04.webp', alt: 'Artículo de prensa' },
]

export default function FamilyTestimonials() {
  const [familyIndex, setFamilyIndex] = useState<number | null>(null)
  const [pressIndex, setPressIndex] = useState<number | null>(null)

  const prevFamily = () => setFamilyIndex(i => (i! > 0 ? i! - 1 : familyPhotos.length - 1))
  const nextFamily = () => setFamilyIndex(i => (i! < familyPhotos.length - 1 ? i! + 1 : 0))
  const prevPress = () => setPressIndex(i => (i! > 0 ? i! - 1 : pressPhotos.length - 1))
  const nextPress = () => setPressIndex(i => (i! < pressPhotos.length - 1 ? i! + 1 : 0))

  return (
    <section id="familias" className="section-padding bg-white relative overflow-hidden">
      <div className="container-max relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-green mb-4 mx-auto w-fit">
            <Heart size={14} />
            Lo que dicen de él
          </div>
          <h2 className="section-title">
            Lo que dicen quienes lo conocen{' '}
            <span className="text-accent">de primera mano</span>
          </h2>
          <p className="section-subtitle">
            Las familias que lo vivieron de cerca y los medios que recogieron su trabajo.
            Dos formas distintas de validar una misma trayectoria.
          </p>
        </div>

        {/* Familias */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Heart size={18} className="text-rose-500" />
            <h3 className="font-display font-bold text-lg text-primary">Testimonios de familias</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {familyPhotos.slice(0, 4).map((photo, i) => (
              <button
                key={i}
                onClick={() => setFamilyIndex(i)}
                className="rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-accent/40 transition-all hover:-translate-y-1 hover:shadow-lg bg-slate-50 flex items-center justify-center min-h-[180px]"
                aria-label={`Ver testimonio ${i + 1}`}
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
          {familyPhotos.length > 4 && (
            <div className="text-center mt-5">
              <button
                onClick={() => setFamilyIndex(4)}
                className="text-sm font-semibold text-primary hover:text-accent transition-colors underline underline-offset-4"
              >
                Ver todos los testimonios ({familyPhotos.length})
              </button>
            </div>
          )}
        </div>

        {/* Prensa */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Newspaper size={18} className="text-blue-500" />
            <h3 className="font-display font-bold text-lg text-primary">Prensa y publicaciones</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pressPhotos.slice(0, 3).map((article, i) => (
              <button
                key={i}
                onClick={() => setPressIndex(i)}
                className="rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-accent/40 transition-all hover:-translate-y-1 hover:shadow-lg bg-slate-50 flex items-center justify-center min-h-[200px]"
                aria-label={`Ver artículo ${i + 1}`}
              >
                <img src={article.src} alt={article.alt} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
          {pressPhotos.length > 3 && (
            <div className="text-center mt-5">
              <button
                onClick={() => setPressIndex(3)}
                className="text-sm font-semibold text-primary hover:text-accent transition-colors underline underline-offset-4"
              >
                Ver todos los artículos ({pressPhotos.length})
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox familias */}
      {familyIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setFamilyIndex(null)}>
          <button onClick={() => setFamilyIndex(null)} className="absolute top-4 right-4 text-white/70 hover:text-white p-2"><X size={28} /></button>
          <button onClick={(e) => { e.stopPropagation(); prevFamily() }} className="absolute left-4 text-white/70 hover:text-white p-2"><ChevronLeft size={36} /></button>
          <img src={familyPhotos[familyIndex].src} alt={familyPhotos[familyIndex].alt} className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); nextFamily() }} className="absolute right-4 text-white/70 hover:text-white p-2"><ChevronRight size={36} /></button>
          <div className="absolute bottom-4 text-white/50 text-sm">{familyIndex + 1} / {familyPhotos.length}</div>
        </div>
      )}

      {/* Lightbox prensa */}
      {pressIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setPressIndex(null)}>
          <button onClick={() => setPressIndex(null)} className="absolute top-4 right-4 text-white/70 hover:text-white p-2"><X size={28} /></button>
          <button onClick={(e) => { e.stopPropagation(); prevPress() }} className="absolute left-4 text-white/70 hover:text-white p-2"><ChevronLeft size={36} /></button>
          <img src={pressPhotos[pressIndex].src} alt={pressPhotos[pressIndex].alt} className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); nextPress() }} className="absolute right-4 text-white/70 hover:text-white p-2"><ChevronRight size={36} /></button>
          <div className="absolute bottom-4 text-white/50 text-sm">{pressIndex + 1} / {pressPhotos.length}</div>
        </div>
      )}

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#FAF8F5" />
        </svg>
      </div>
    </section>
  )
}

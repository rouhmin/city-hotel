import { useState, useEffect } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activePhotoIndex]);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextLightboxPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevLightboxPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="galerie" className="py-20 lg:py-28 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A15B]/15 text-[#9B7735] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>En Images</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
            Galerie Photos Réelles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#555555]">
            Plongez au cœur de City Hôtel à travers des photographies authentiques de nos chambres, de nos installations et de notre accueil.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D8BD7A] via-[#C6A15B] to-[#9B7735] text-[#171717] shadow-md shadow-[#C6A15B]/25 font-bold'
                  : 'bg-white text-[#555555] hover:text-[#171717] border border-[#C6A15B]/20 hover:border-[#C6A15B]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden bg-black/5 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-72 border border-[#C6A15B]/20"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Dark luxury gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D8BD7A] mb-1">
                  {item.subtitle}
                </span>
                <h4 className="font-serif text-lg font-bold">
                  {item.title}
                </h4>
                <p className="text-xs text-white/80 line-clamp-2 mt-1">
                  {item.desc}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#D8BD7A] font-semibold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Agrandir</span>
                </div>
              </div>

              {/* Top right subtle icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white/80 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 cursor-pointer"
            aria-label="Fermer la vue"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={prevLightboxPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 cursor-pointer"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={nextLightboxPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 cursor-pointer"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Main Photo Box */}
          <div 
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[activePhotoIndex].src}
              alt={filteredItems[activePhotoIndex].title}
              className="max-h-[72vh] max-w-full object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            
            {/* Caption bar */}
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#D8BD7A] font-semibold">
                {filteredItems[activePhotoIndex].subtitle} • {activePhotoIndex + 1} / {filteredItems.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                {filteredItems[activePhotoIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                {filteredItems[activePhotoIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

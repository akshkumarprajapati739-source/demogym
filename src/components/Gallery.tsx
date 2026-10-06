import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Equipment', 'Strength', 'Cardio', 'Coaching', 'Facility', 'Functional'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  }, [lightboxIndex]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2A2A] font-bold">
              VISUAL EXPERIENCE
            </span>
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            THE CLUB IN ACTION
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Explore our cutting-edge training floor, Olympic lifting racks, and high-energy conditioning arenas.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#FF2A2A] text-white shadow-[0_0_15px_rgba(255,42,42,0.4)]'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(GALLERY_ITEMS.findIndex(g => g.id === item.id))}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#FF2A2A]/70 cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag in top corner */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-neutral-700/60 text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                  {item.tag}
                </span>
              </div>

              {/* Title and expand icon on bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#FF2A2A] font-bold block">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-neutral-900/80 group-hover:bg-[#FF2A2A] text-white flex items-center justify-center transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-[fadeIn_0.2s_ease-out]"
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-neutral-900/80 hover:bg-[#FF2A2A] text-white border border-neutral-700 hover:border-[#FF2A2A] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 hover:bg-[#FF2A2A] text-white border border-neutral-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 hover:bg-[#FF2A2A] text-white border border-neutral-700 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={GALLERY_ITEMS[lightboxIndex].image}
              alt={GALLERY_ITEMS[lightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-neutral-800"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#FF2A2A] font-bold">
                {GALLERY_ITEMS[lightboxIndex].category} · {GALLERY_ITEMS[lightboxIndex].tag}
              </span>
              <h4 className="font-heading text-xl font-bold text-white mt-1">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Photo {lightboxIndex + 1} of {GALLERY_ITEMS.length} · Use arrow keys to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

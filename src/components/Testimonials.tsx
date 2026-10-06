import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2A2A]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2A2A] font-bold">
              ATHLETE STORIES
            </span>
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            WHAT OUR MEMBERS SAY
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Real feedback from members who show up, put in the work, and elevate their physical capabilities daily.
          </p>
          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400">
            * Sample testimonials for demonstration
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Presentation */}
          <div className="relative min-h-[320px] rounded-3xl bg-[#0F0F0F] border border-neutral-800 p-8 sm:p-12 shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* Top red subtle line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF2A2A] to-transparent" />

            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-1.5">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FF2A2A] text-[#FF2A2A]" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-[#FF2A2A]/20" />
              </div>

              {/* Quote Body */}
              <p className="font-heading text-lg sm:text-2xl font-medium text-white leading-relaxed italic mb-8">
                “{TESTIMONIALS[currentIndex].quote}”
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF2A2A] to-neutral-900 flex items-center justify-center font-heading font-black text-white text-base shadow-[0_0_15px_rgba(255,42,42,0.4)]">
                  {TESTIMONIALS[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-white">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Verified Result Milestone */}
              <div className="px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#FF2A2A]">
                {TESTIMONIALS[currentIndex].metric}
              </div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-xl bg-neutral-900 hover:bg-[#FF2A2A] border border-neutral-800 hover:border-[#FF2A2A] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-xl bg-neutral-900 hover:bg-[#FF2A2A] border border-neutral-800 hover:border-[#FF2A2A] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-8 bg-[#FF2A2A] shadow-[0_0_10px_#FF2A2A]'
                      : 'w-2.5 bg-neutral-800 hover:bg-neutral-600'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

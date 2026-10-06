import { ArrowRight, Flame, Clock } from 'lucide-react';
import { PROGRAMS, ProgramItem } from '../data/gymData';

interface ProgramsProps {
  onSelectProgram: (program: ProgramItem) => void;
  onOpenJoin: (programName?: string) => void;
}

export default function Programs({ onSelectProgram }: ProgramsProps) {
  return (
    <section id="programs" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#FF2A2A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#FF2A2A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF2A2A] font-bold">
                DESIGNED FOR ALL ATHLETIC LEVELS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
              TRAIN YOUR WAY
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-3">
              Specialized training regimens engineered to transform biomechanics, muscle density, and mental fortitude.
            </p>
          </div>
        </div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="group rounded-2xl bg-[#121212] border border-neutral-800 overflow-hidden hover:border-[#FF2A2A]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-56 sm:h-60 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />
                
                {/* Meta details badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-neutral-700/60 text-[11px] font-bold text-white flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#FF2A2A]" />
                    {prog.intensity}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-neutral-700/60 text-[11px] font-bold text-neutral-300 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    {prog.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF2A2A] block mb-1">
                    {prog.tagline}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-[#FF2A2A] transition-colors">
                    {prog.name}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Focus points */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-neutral-800/80">
                    {prog.focus.map((item, fIdx) => (
                      <div key={fIdx} className="text-xs text-neutral-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => onSelectProgram(prog)}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-900 group-hover:bg-[#FF2A2A] border border-neutral-800 group-hover:border-[#FF2A2A] text-white font-heading font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] cursor-pointer"
                >
                  <span>LEARN MORE & SYLLABUS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

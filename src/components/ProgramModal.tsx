import { useEffect } from 'react';
import { X, Flame, Clock, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProgramItem } from '../data/gymData';

interface ProgramModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onBookTrial: (programName: string) => void;
}

export default function ProgramModal({ program, onClose, onBookTrial }: ProgramModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (program) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-modal-title"
      className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-[fadeIn_0.2s_ease-out] overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/70 hover:bg-[#FF2A2A] text-white border border-neutral-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={program.image}
            alt={program.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />

          {/* Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FF2A2A] font-bold block">
                {program.tagline}
              </span>
              <h3 id="program-modal-title" className="font-display text-3xl sm:text-4xl font-bold text-white">
                {program.name}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-black/70 border border-neutral-700 text-xs font-bold text-white flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#FF2A2A]" />
                {program.intensity}
              </span>
              <span className="px-3 py-1 rounded-lg bg-black/70 border border-neutral-700 text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                {program.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Overview & Objectives
            </h4>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {program.description} Our curriculum combines periodized volume, biomechanical feedback, and recovery protocols so you make continuous progress without overtraining injuries.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Core Technical Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {program.focus.map((pillar, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#FF2A2A] mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold text-neutral-200">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#FF2A2A] shrink-0 mt-0.5" />
            <div className="text-xs text-neutral-400">
              <strong className="text-white block mb-0.5">Includes Free Movement Screening</strong>
              Every participant receives an initial 15-minute mobility analysis before their first session.
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBookTrial(program.name);
              }}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#FF2A2A] hover:bg-[#ff3b3b] text-white font-heading font-black text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(255,42,42,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>BOOK A FREE TRIAL CLASS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

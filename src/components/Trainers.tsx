import { Instagram, Linkedin, Award, ArrowUpRight } from 'lucide-react';
import { TRAINERS, TrainerItem } from '../data/gymData';

interface TrainersProps {
  onBookTrainer: (trainer: TrainerItem) => void;
}

export default function Trainers({ onBookTrainer }: TrainersProps) {
  return (
    <section id="trainers" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2A2A]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2A2A] font-bold">
              ELITE MENTORSHIP
            </span>
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            MEET YOUR TRAINERS
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Certified performance coaches and biomechanics specialists dedicated to maximizing your strength and longevity.
          </p>
          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400">
            * Sample coach profiles for demonstration
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative rounded-2xl bg-[#121212] border border-neutral-800/90 overflow-hidden hover:border-[#FF2A2A]/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,42,42,0.15)] flex flex-col justify-between"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative h-80 sm:h-92 overflow-hidden bg-neutral-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter grayscale-[25%] contrast-110 group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />

                {/* Experience Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-neutral-700/60 text-[10px] font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#FF2A2A]" />
                  <span>{trainer.experience} Exp</span>
                </div>

                {/* Social Overlay on Hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${trainer.name} Instagram`}
                    className="w-9 h-9 rounded-lg bg-black/80 backdrop-blur-md border border-neutral-700 text-white hover:bg-[#FF2A2A] hover:border-[#FF2A2A] flex items-center justify-center transition-all duration-200"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${trainer.name} LinkedIn`}
                    className="w-9 h-9 rounded-lg bg-black/80 backdrop-blur-md border border-neutral-700 text-white hover:bg-[#FF2A2A] hover:border-[#FF2A2A] flex items-center justify-center transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Trainer Details */}
              <div className="p-6 relative z-10 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF2A2A] block mb-1">
                    {trainer.position}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {trainer.bio}
                  </p>
                  <div className="text-[11px] font-semibold text-neutral-300 bg-neutral-900/80 px-2.5 py-1.5 rounded-lg border border-neutral-800">
                    <span className="text-neutral-500 mr-1.5">Focus:</span>
                    {trainer.specialty}
                  </div>
                </div>

                <button
                  onClick={() => onBookTrainer(trainer)}
                  className="mt-5 w-full py-2.5 px-3 rounded-lg bg-neutral-900 group-hover:bg-[#FF2A2A] text-neutral-300 group-hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>REQUEST 1-ON-1 TRIAL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { Dumbbell, Award, Target, Flame, Clock, TrendingUp } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2A2A] font-bold">
              THE DEMO FITNESS STANDARD
            </span>
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            WHY DEMO FITNESS CLUB?
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Built from the ground up to eradicate average workouts. We combine scientific training protocols with elite facilities.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((card) => (
            <div
              key={card.number}
              className="group relative p-8 rounded-2xl bg-[#0F0F0F] border border-neutral-800/90 hover:border-[#FF2A2A]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(255,42,42,0.15)] flex flex-col justify-between"
            >
              {/* Subtle Card Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#FF2A2A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-[#FF2A2A] group-hover:bg-[#FF2A2A]/10 text-neutral-300 group-hover:text-[#FF2A2A] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    {ICONS_MAP[card.icon]}
                  </div>
                  <span className="font-display text-3xl font-bold text-neutral-700 group-hover:text-[#FF2A2A]/80 transition-colors tracking-wider">
                    {card.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="w-12 h-[2px] bg-neutral-800 group-hover:w-full group-hover:bg-[#FF2A2A] transition-all duration-500 mt-6" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/gymData';

interface AboutProps {
  onOpenJoin: () => void;
}

const ABOUT_FEATURES = [
  { title: "Premium Equipment", desc: "Top-tier biomechanic machines & Olympic plates" },
  { title: "Certified Trainers", desc: "Coaches with real athletic and rehab credentials" },
  { title: "Personalized Training", desc: "Programs calibrated to your specific anatomy" },
  { title: "Clean & Modern Environment", desc: "Hospital-grade air filtration and sanitization" },
  { title: "Flexible Membership Plans", desc: "Transparent terms without hidden lock-ins" },
  { title: "Supportive Fitness Community", desc: "Driven members who motivate your daily consistency" },
];

export default function About({ onOpenJoin }: AboutProps) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#FF2A2A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-neutral-900/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Gym Facility Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              {/* Image with zoom on hover */}
              <img
                src={IMAGES.about}
                alt="Demo Fitness Club Facility"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-xl glass-panel border-l-4 border-l-[#FF2A2A] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#FF2A2A] font-bold block">
                    FOUNDED 2016
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white block mt-0.5">
                    12,000+ SQ FT ATHLETIC ARENA
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FF2A2A]/20 flex items-center justify-center text-[#FF2A2A] font-bold text-sm">
                  DFC
                </div>
              </div>
            </div>

            {/* Decorative Corner Glow Accent */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[#FF2A2A] rounded-tr-xl pointer-events-none opacity-60" />
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-[#FF2A2A] rounded-bl-xl pointer-events-none opacity-60" />
          </div>

          {/* Right Column: Narrative & Feature Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#FF2A2A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF2A2A] font-bold">
                ABOUT DEMO FITNESS CLUB
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.05] mb-6">
              MORE THAN A GYM. <br />
              <span className="text-[#FF2A2A]">IT’S A LIFESTYLE.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              DEMO FITNESS CLUB is designed for people who are serious about improving their strength, fitness and overall lifestyle. With modern equipment, expert trainers and an energetic training environment, we help members stay consistent and reach their goals.
            </p>

            {/* 6 Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ABOUT_FEATURES.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 hover:border-[#FF2A2A]/50 transition-colors group"
                >
                  <div className="mt-0.5 text-[#FF2A2A] group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 fill-[#FF2A2A]/20" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FF2A2A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={onOpenJoin}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#FF2A2A] hover:bg-[#ff3b3b] text-white font-heading font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:shadow-[0_0_35px_rgba(255,42,42,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>BOOK A FREE TRIAL PASS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

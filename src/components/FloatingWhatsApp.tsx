import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/gymData';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700/60 text-xs font-semibold text-white tracking-wide shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with us
      </div>

      {/* Button */}
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Demo Fitness Club on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
        <span className="relative z-10">
          <MessageCircle className="w-7 h-7 fill-white stroke-none" />
        </span>
      </a>
    </aside>
  );
}

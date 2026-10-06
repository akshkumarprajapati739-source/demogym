import { useState } from 'react';
import { Instagram, Facebook, Youtube, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { BUSINESS_CONFIG, SOCIAL_LINKS } from '../data/gymData';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] text-neutral-400 border-t border-neutral-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FF2A2A] rounded-lg flex items-center justify-center font-display text-2xl font-black text-white shadow-[0_0_15px_rgba(255,42,42,0.5)]">
                DFC
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                DEMO FITNESS CLUB
              </span>
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              “{BUSINESS_CONFIG.tagline}”
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed mb-6">
              A high-performance sanctuary engineered for relentless physical progress, science-backed biomechanics, and unyielding discipline.
            </p>

            {/* <!-- EDIT SOCIAL LINKS HERE --> */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#FF2A2A] hover:bg-[#FF2A2A] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#FF2A2A] hover:bg-[#FF2A2A] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#FF2A2A] hover:bg-[#FF2A2A] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#FF2A2A] hover:bg-[#FF2A2A] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-white transition-colors cursor-pointer">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('membership')} className="hover:text-white transition-colors cursor-pointer">
                  Membership Plans
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('trainers')} className="hover:text-white transition-colors cursor-pointer">
                  Trainers
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('gallery')} className="hover:text-white transition-colors cursor-pointer">
                  Facility Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Facility */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Club Operating Hours
            </h4>
            <div className="text-xs space-y-2 text-neutral-400">
              <div>
                <span className="font-semibold text-neutral-200 block">Weekdays:</span>
                <span>{BUSINESS_CONFIG.operatingHours.weekdays}</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-200 block">Sundays & Holidays:</span>
                <span>{BUSINESS_CONFIG.operatingHours.sunday}</span>
              </div>
              <div className="pt-2">
                <span className="font-semibold text-neutral-200 block">Member Concierge:</span>
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Weekly Training Digest
            </h4>
            <p className="text-xs text-neutral-400 mb-4">
              Receive nutrition guides, lifting mobility warmups, and private member seminar invites.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF2A2A]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#FF2A2A] text-white hover:bg-[#ff3b3b] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                  <Check className="w-3.5 h-3.5" /> You're on the insider list!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Sample Label */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            {BUSINESS_CONFIG.copyright}
          </div>
          <div className="text-[11px] text-neutral-600">
            * Demonstration website crafted with athletic luxury design principles
          </div>
        </div>
      </div>
    </footer>
  );
}

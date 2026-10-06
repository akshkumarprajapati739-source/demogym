import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/gymData';

interface NavbarProps {
  onOpenJoin: (planId?: string) => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'trainers', label: 'Trainers' },
  { id: 'membership', label: 'Membership' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ onOpenJoin }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Active section detection
      const sections = NAV_LINKS.map(item => document.getElementById(item.id));
      const scrollPosition = scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_LINKS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-3.5 shadow-2xl' : 'bg-transparent py-5'
        }`}
      >
        {/* Top Scroll Progress Line */}
        <div
          className="absolute top-0 left-0 h-[2.5px] bg-[#FF2A2A] transition-all duration-75 z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A2A] rounded-lg p-1"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-[#FF2A2A] to-[#B81010] rounded-lg flex items-center justify-center font-display text-2xl font-black tracking-wider text-white shadow-[0_0_20px_rgba(255,42,42,0.5)] group-hover:shadow-[0_0_28px_rgba(255,42,42,0.7)] group-hover:scale-105 transition-all duration-300">
                DFC
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.12em] text-white leading-none">
                  DEMO FITNESS CLUB
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A0A0A0] font-medium group-hover:text-[#FF2A2A] transition-colors mt-0.5">
                  PREMIUM ATHLETIC CLUB
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-3 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#FF2A2A] rounded-full shadow-[0_0_8px_#FF2A2A]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Join Button & Mobile Menu Trigger */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenJoin()}
                className="relative group overflow-hidden px-5 sm:px-6 py-2.5 rounded-lg bg-[#FF2A2A] hover:bg-[#ff3b3b] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,42,42,0.4)] hover:shadow-[0_0_30px_rgba(255,42,42,0.65)] hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center gap-2">
                  JOIN NOW
                </span>
              </button>

              {/* Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#FF2A2A] transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF2A2A]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Panel */}
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#0D0D0D] border-l border-neutral-800 p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#FF2A2A] rounded-md flex items-center justify-center font-display text-xl font-bold text-white">
                  DFC
                </div>
                <div className="font-display text-lg font-bold tracking-wider text-white">
                  DEMO FITNESS CLUB
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 mt-6">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-[#FF2A2A]/15 text-[#FF2A2A] border-l-4 border-[#FF2A2A]'
                        : 'text-neutral-300 hover:bg-neutral-850 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoin();
              }}
              className="w-full py-3.5 rounded-lg bg-[#FF2A2A] text-white font-heading font-bold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(255,42,42,0.4)]"
            >
              JOIN THE CLUB
            </button>
            <div className="mt-4 text-center">
              <p className="text-xs text-neutral-500">{BUSINESS_CONFIG.operatingHours.weekdays}</p>
              <p className="text-xs text-neutral-400 mt-1">{BUSINESS_CONFIG.phoneDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

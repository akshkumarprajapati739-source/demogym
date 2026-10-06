import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Progress from './components/Progress';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import JoinModal from './components/JoinModal';
import ProgramModal from './components/ProgramModal';
import { MembershipPlan, ProgramItem, TrainerItem } from './data/gymData';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('pro');
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const handleOpenJoin = (planId: string = 'pro') => {
    setSelectedPlanId(planId);
    setJoinModalOpen(true);
  };

  const handleSelectPlan = (plan: MembershipPlan) => {
    setSelectedPlanId(plan.id);
    setJoinModalOpen(true);
  };

  const handleSelectProgram = (prog: ProgramItem) => {
    setSelectedProgram(prog);
  };

  const handleBookTrainer = (trainer: TrainerItem) => {
    // Open join modal with note or scroll to contact
    handleOpenJoin('elite');
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#FF2A2A] selection:text-white">
      {/* 1. Page Loader with smooth transition */}
      <PageLoader />

      {/* 2. Custom Cursor for Desktop */}
      <CustomCursor />

      {/* 3. Sticky Navigation */}
      <Navbar onOpenJoin={() => handleOpenJoin('pro')} />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* 4. Hero Section with Counters */}
        <Hero
          onOpenJoin={() => handleOpenJoin('pro')}
          onExplorePrograms={handleExplorePrograms}
        />

        {/* 5. About Section */}
        <About onOpenJoin={() => handleOpenJoin('basic')} />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Fitness Programs Section */}
        <Programs
          onSelectProgram={handleSelectProgram}
          onOpenJoin={(programName) => handleOpenJoin('pro')}
        />

        {/* 8. Trainers Section */}
        <Trainers onBookTrainer={handleBookTrainer} />

        {/* 9. Membership Plans Section */}
        <Membership onSelectPlan={handleSelectPlan} />

        {/* 10. Progress / Metrics Section */}
        <Progress />

        {/* 11. Gallery Section with Fullscreen Lightbox */}
        <Gallery />

        {/* 12. Testimonials Carousel */}
        <Testimonials />

        {/* 13. Call To Action (CTA) Section */}
        <CTASection onOpenJoin={() => handleOpenJoin('pro')} />

        {/* 14. Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 17. Back to Top Button */}
      <BackToTop />

      {/* Modals */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        initialPlanId={selectedPlanId}
      />

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onBookTrial={(programName) => {
          setSelectedProgram(null);
          handleOpenJoin('pro');
        }}
      />
    </div>
  );
}

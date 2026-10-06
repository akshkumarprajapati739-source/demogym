import { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, Flame, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/gymData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
}

export default function JoinModal({ isOpen, onClose, initialPlanId = 'pro' }: JoinModalProps) {
  const [selectedPlanId, setSelectedPlanId] = useState(initialPlanId);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialPlanId) {
      setSelectedPlanId(initialPlanId);
    }
  }, [initialPlanId]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPlan = MEMBERSHIP_PLANS.find(p => p.id === selectedPlanId) || MEMBERSHIP_PLANS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSuccess(true);
  };

  const handleResetAndClose = () => {
    setSuccess(false);
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
      className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-[fadeIn_0.2s_ease-out] overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#121212] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          /* Success Screen */
          <div className="text-center py-8 sm:py-12">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF2A2A] block mb-1">
              WELCOME TO THE BROTHERHOOD OF DISCIPLINE
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
              Membership Request Confirmed!
            </h3>
            <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <strong className="text-white">{name}</strong>! Your <strong className="text-[#FF2A2A]">{currentPlan.name}</strong> membership invitation is ready. Our front desk concierge has reserved your orientation spot.
            </p>
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 max-w-sm mx-auto text-xs text-neutral-400 mb-8 text-left">
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span>Selected Tier:</span>
                <span className="text-white font-bold">{currentPlan.name} ({currentPlan.currency}{currentPlan.monthlyPrice}/mo)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span>Contact Phone:</span>
                <span className="text-white font-semibold">{phone}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Access Status:</span>
                <span className="text-emerald-400 font-semibold">Immediate Trial Access</span>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="px-8 py-3.5 rounded-xl bg-[#FF2A2A] hover:bg-[#ff3b3b] text-white font-heading font-bold text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(255,42,42,0.4)]"
            >
              DONE & RETURN TO SITE
            </button>
          </div>
        ) : (
          /* Join Form */
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF2A2A] font-bold block mb-1">
                JOIN DEMO FITNESS CLUB
              </span>
              <h3 id="join-modal-title" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                START YOUR TRANSFORMATION
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Choose your membership tier below and secure your complimentary body composition screening.
              </p>
            </div>

            {/* Plan Selector Radio Cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {MEMBERSHIP_PLANS.map((plan) => {
                const isSelected = selectedPlanId === plan.id;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#FF2A2A]/15 border-[#FF2A2A] shadow-[0_0_15px_rgba(255,42,42,0.3)]'
                        : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display text-base font-bold text-white tracking-wide">
                        {plan.name}
                      </span>
                      {plan.popular && <Flame className="w-3.5 h-3.5 text-[#FF2A2A]" />}
                    </div>
                    <span className="font-heading text-sm font-black text-[#FF2A2A]">
                      {plan.currency}{plan.monthlyPrice}
                    </span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">/month</span>
                  </button>
                );
              })}
            </div>

            {error && (
              <div className="p-3 mb-4 rounded-lg bg-red-950/60 border border-red-500/50 text-red-300 text-xs font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Hunter"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF2A2A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF2A2A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555-0123"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF2A2A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Preferred Orientation Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-[#FF2A2A]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#FF2A2A] hover:bg-[#ff3b3b] text-white font-heading font-black text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:shadow-[0_0_35px_rgba(255,42,42,0.6)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>CONFIRM & ACTIVATE {currentPlan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>Zero registration fees · Risk-free 7-day money back guarantee</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

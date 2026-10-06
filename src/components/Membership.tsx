import { useState } from 'react';
import { Check, Flame, ArrowRight, ShieldCheck } from 'lucide-react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/gymData';

interface MembershipProps {
  onSelectPlan: (plan: MembershipPlan) => void;
}

export default function Membership({ onSelectPlan }: MembershipProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="membership" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#FF2A2A]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF2A2A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2A2A] font-bold">
              MEMBERSHIP TIERS
            </span>
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            CHOOSE YOUR MEMBERSHIP
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Invest in your physical vitality and long-term discipline. Straightforward rates with zero hidden cancellation fees.
          </p>
          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400">
            * Sample pricing for demonstration purposes
          </div>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-neutral-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              aria-label="Toggle annual or monthly billing"
              className="relative w-14 h-8 rounded-full bg-neutral-800 p-1 border border-neutral-700 transition-colors cursor-pointer"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#FF2A2A] transition-transform duration-300 shadow-[0_0_10px_#FF2A2A] ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-white' : 'text-neutral-400'}`}>
              Annual
              <span className="px-2 py-0.5 rounded-full bg-[#FF2A2A]/20 border border-[#FF2A2A]/40 text-[10px] font-bold text-[#FF2A2A] uppercase">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const rawPrice = billingCycle === 'annual'
              ? Math.round(plan.monthlyPrice * 0.8)
              : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 ${
                  plan.popular
                    ? 'bg-[#151515] border-2 border-[#FF2A2A] shadow-[0_0_40px_rgba(255,42,42,0.25)] lg:-translate-y-4'
                    : 'bg-[#101010] border border-neutral-800/90 hover:border-neutral-700 shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#FF2A2A] text-white font-heading font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,42,42,0.6)] flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" />
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="mb-6">
                    <h3 className="font-display text-3xl font-bold tracking-wider text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-neutral-800 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-neutral-300">
                      {plan.currency}
                    </span>
                    <span className="font-display text-5xl sm:text-6xl font-black text-white tracking-tight tabular-nums">
                      {rawPrice.toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold text-neutral-400 ml-1">
                      / month
                    </span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                      INCLUDED PRIVILEGES:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-0.5 ${plan.popular ? 'bg-[#FF2A2A] text-white' : 'bg-neutral-800 text-neutral-300'}`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm text-neutral-300 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 rounded-xl font-heading font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#FF2A2A] hover:bg-[#ff3b3b] text-white shadow-[0_0_25px_rgba(255,42,42,0.45)] hover:shadow-[0_0_35px_rgba(255,42,42,0.7)] hover:scale-102 active:scale-98'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white hover:border-[#FF2A2A]'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-neutral-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Cancel or freeze membership anytime</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
